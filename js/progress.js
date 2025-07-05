// js/progress.js - Progress and confidence calculations
export function createProgressModule() {
    return {
        confidenceScale: [
            { value: 1, label: "1", description: "Not confident - I don't understand this topic", color: "bg-red-500" },
            { value: 2, label: "2", description: "Low confidence - I have some understanding but need lots of practice", color: "bg-orange-500" },
            { value: 3, label: "3", description: "Moderate confidence - I understand the basics but need more practice", color: "bg-yellow-500" },
            { value: 4, label: "4", description: "Good confidence - I understand well and can solve most problems", color: "bg-blue-500" },
            { value: 5, label: "5", description: "Very confident - I fully understand and can teach others", color: "bg-green-500" }
        ],

        updateConfidence(topicId, level) {
            this.confidenceLevels[topicId] = level;
            // Auto-save whenever confidence is updated
            this.saveData();
        },

        getOverallProgress() {
            let allSections;
            if (this.viewMode === 'spec') {
                allSections = Object.entries(this.specificationData);
            } else {
                allSections = Object.entries(this.specificationData).filter(([_, section]) => section.paper === this.selectedPaper);
            }
            const totalTopics = allSections.reduce((sum, [_, section]) => sum + section.topics.length, 0);
            const assessedTopics = Object.keys(this.confidenceLevels).filter(id => 
                allSections.some(([_, section]) => section.topics.some(topic => topic.id === id))
            ).length;
            return totalTopics > 0 ? Math.round((assessedTopics / totalTopics) * 100) : 0;
        },
        
        getAverageConfidence() {
            let allSections;
            if (this.viewMode === 'spec') {
                allSections = Object.entries(this.specificationData);
            } else {
                allSections = Object.entries(this.specificationData).filter(([_, section]) => section.paper === this.selectedPaper);
            }
            const relevantLevels = Object.entries(this.confidenceLevels).filter(([id, _]) => 
                allSections.some(([_, section]) => section.topics.some(topic => topic.id === id))
            ).map(([_, level]) => level);
            
            if (relevantLevels.length === 0) return 0;
            return (relevantLevels.reduce((sum, level) => sum + level, 0) / relevantLevels.length).toFixed(1);
        },
        
        getAssessedCount(topics) {
            if (!topics) return 0;
            return topics.filter(topic => this.confidenceLevels[topic.id]).length;
        },
        
        getPaperProgress(paper) {
            const paperSections = Object.entries(this.specificationData).filter(([_, section]) => section.paper === paper);
            const totalTopics = paperSections.reduce((sum, [_, section]) => sum + section.topics.length, 0);
            const assessedTopics = Object.keys(this.confidenceLevels).filter(id => 
                paperSections.some(([_, section]) => section.topics.some(topic => topic.id === id))
            ).length;
            return totalTopics > 0 ? Math.round((assessedTopics / totalTopics) * 100) : 0;
        },
        
        getOverallProgressAllPapers() {
            // Always calculate across ALL papers regardless of current mode
            const allSections = Object.entries(this.specificationData);
            const totalTopics = allSections.reduce((sum, [_, section]) => sum + section.topics.length, 0);
            const assessedTopics = Object.keys(this.confidenceLevels).length;
            return totalTopics > 0 ? Math.round((assessedTopics / totalTopics) * 100) : 0;
        },
        
        getOverallConfidenceAllPapers() {
            // Calculate average confidence across ALL papers
            const allSections = Object.entries(this.specificationData);
            const relevantLevels = Object.entries(this.confidenceLevels).filter(([id, _]) => 
                allSections.some(([_, section]) => section.topics.some(topic => topic.id === id))
            ).map(([_, level]) => level);
            
            if (relevantLevels.length === 0) return 0;
            return relevantLevels.reduce((sum, level) => sum + level, 0) / relevantLevels.length;
        },
                    
        getPaperAverageConfidence(paper) {
            const paperSections = Object.entries(this.specificationData).filter(([_, section]) => section.paper === paper);
            const relevantLevels = Object.entries(this.confidenceLevels).filter(([id, _]) => 
                paperSections.some(([_, section]) => section.topics.some(topic => topic.id === id))
            ).map(([_, level]) => level);
            
            if (relevantLevels.length === 0) return 0;
            return (relevantLevels.reduce((sum, level) => sum + level, 0) / relevantLevels.length);
        },

        getGroupAverageConfidence(sections) {
            const relevantLevels = [];
            sections.forEach(key => {
                this.specificationData[key].topics.forEach(topic => {
                    if (this.confidenceLevels[topic.id]) {
                        relevantLevels.push(this.confidenceLevels[topic.id]);
                    }
                });
            });
            
            if (relevantLevels.length === 0) return 0;
            return (relevantLevels.reduce((sum, level) => sum + level, 0) / relevantLevels.length);
        },
        
        getGroupProgress(sections) {
            const totalTopics = this.getGroupTotalTopics(sections);
            const assessedTopics = this.getGroupAssessedCount(sections);
            return totalTopics > 0 ? Math.round((assessedTopics / totalTopics) * 100) : 0;
        },
        
        getGroupTotalTopics(sections) {
            return sections.reduce((sum, key) => sum + this.specificationData[key].topics.length, 0);
        },
        
        getGroupAssessedCount(sections) {
            let assessedCount = 0;
            sections.forEach(key => {
                this.specificationData[key].topics.forEach(topic => {
                    if (this.confidenceLevels[topic.id]) {
                        assessedCount++;
                    }
                });
            });
            return assessedCount;
        },
        
        getConfidenceColor(confidence) {
            if (confidence === 0) return 'bg-gray-300';
            // Smooth gradient from red (1) to green (5)
            const colors = [
                'bg-red-500',      // 1
                'bg-orange-500',   // 2
                'bg-yellow-500',   // 3
                'bg-blue-500',     // 4
                'bg-green-500'     // 5
            ];
            return colors[confidence - 1] || 'bg-gray-300';
        },
        
        getConfidenceBarStyle(confidence) {
            if (confidence === 0) return 'background: rgb(107, 114, 128)'; // Grey for 0
            
            // Create smooth gradient: 1=red, 3=orange, 5=green
            let red, green, blue;
            
            if (confidence <= 3) {
                // From red (239,68,68) at 1 to orange (249,115,22) at 3
                const ratio = (confidence - 1) / 2; // 0 to 1 for confidence 1 to 3
                red = 239 + (249 - 239) * ratio;
                green = 68 + (115 - 68) * ratio;
                blue = 68 + (22 - 68) * ratio;
            } else {
                // From orange (249,115,22) at 3 to green (34,197,94) at 5
                const ratio = (confidence - 3) / 2; // 0 to 1 for confidence 3 to 5
                red = 249 + (34 - 249) * ratio;
                green = 115 + (197 - 115) * ratio;
                blue = 22 + (94 - 22) * ratio;
            }
            
            return `background: rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`;
        }
    };
}
