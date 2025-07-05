// js/calculations-module.js
window.calcModule = {
    init(component) {
        this.component = component;
    },

    getMethods() {
        return {
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
                const allSections = Object.entries(this.specificationData);
                const totalTopics = allSections.reduce((sum, [_, section]) => sum + section.topics.length, 0);
                const assessedTopics = Object.keys(this.confidenceLevels).length;
                return totalTopics > 0 ? Math.round((assessedTopics / totalTopics) * 100) : 0;
            },

            getOverallConfidenceAllPapers() {
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
            }
        };
    }
};
