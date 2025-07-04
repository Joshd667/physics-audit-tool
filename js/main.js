// js/main.js
import { specificationData, sectionGroups } from './data.js';

document.addEventListener('alpine:init', () => {
    Alpine.data('physicsAuditTool', () => ({
        // --- STATE ---
        selectedPaper: 'Paper 1',
        activeSection: 'measurements',
        confidenceLevels: {},
        sidebarVisible: true,
        expandedGroups: {},
        
        // --- DATA (now imported) ---
        specificationData: specificationData,
        sectionGroups: sectionGroups,
        confidenceScale: [
            { value: 1, label: "1", description: "Not confident - I don't understand this topic", color: "bg-red-500" },
            { value: 2, label: "2", description: "Low confidence - I have some understanding but need lots of practice", color: "bg-orange-500" },
            { value: 3, label: "3", description: "Moderate confidence - I understand the basics but need more practice", color: "bg-yellow-500" },               { value: 4, label: "4", description: "Good confidence - I understand well and can solve most problems", color: "bg-blue-500" },
            { value: 5, label: "5", description: "Very confident - I fully understand and can teach others", color: "bg-green-500" }
        ],

        // --- COMPUTED & METHODS ---
        // All the get...() and other methods from the previous file go here
                get currentPaperGroups() {
                    return this.sectionGroups[this.selectedPaper] || [];
                },
                get currentSection() {
                    return this.specificationData[this.activeSection];
                },
                
                // --- METHODS ---
                init() {
                    this.$watch('sidebarVisible', () => this.$nextTick(() => lucide.createIcons()));
                    this.$watch('activeSection', () => this.$nextTick(() => lucide.createIcons()));
                    this.$nextTick(() => lucide.createIcons());
                },
                setSelectedPaper(paper) {
                    this.selectedPaper = paper;
                    const firstItem = this.sectionGroups[paper][0];
                    this.activeSection = firstItem.type === 'single' ? firstItem.key : firstItem.sections[0];
                },
                updateConfidence(topicId, level) {
                    this.confidenceLevels[topicId] = level;
                },
                selectSection(sectionKey) {
                    this.activeSection = sectionKey;
                    this.currentPaperGroups.forEach(item => {
                        if (item.type === "group" && item.sections.includes(sectionKey)) {
                            this.expandedGroups[item.title] = true;
                        }
                    });
                },
                toggleGroup(groupTitle) {
                    this.expandedGroups[groupTitle] = !this.expandedGroups[groupTitle];
                },
                exportResults() {
                    const allSectionsForPaper = Object.entries(this.specificationData).filter(([_, section]) => section.paper === this.selectedPaper);
                    const results = allSectionsForPaper.flatMap(([_, section]) => section.topics.map(topic => ({ paper: section.paper, section: section.title, topic: `${topic.id} ${topic.title}`, confidence: this.confidenceLevels[topic.id] || 0, confidenceLabel: this.confidenceLevels[topic.id] ? this.confidenceScale.find(c => c.value === this.confidenceLevels[topic.id])?.description : "Not assessed" })));
                    const csvContent = [ ['Paper', 'Section', 'Topic', 'Confidence Level', 'Confidence Description'], ...results.map(r => [r.paper, `"${r.section}"`, `"${r.topic}"`, r.confidence, `"${r.confidenceLabel}"`]) ].map(row => row.join(',')).join('\n');
                    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = `physics-audit-${this.selectedPaper.replace(' ', '')}-${new Date().toISOString().split('T')[0]}.csv`;
                    link.click();
                    URL.revokeObjectURL(link.href);
                },
                getOverallProgress() {
                    const allSectionsForPaper = Object.entries(this.specificationData).filter(([_, section]) => section.paper === this.selectedPaper);
                    const totalTopics = allSectionsForPaper.reduce((sum, [_, section]) => sum + section.topics.length, 0);
                    const assessedTopics = Object.keys(this.confidenceLevels).filter(id => allSectionsForPaper.some(([_, section]) => section.topics.some(topic => topic.id === id))).length;
                    return totalTopics > 0 ? Math.round((assessedTopics / totalTopics) * 100) : 0;
                },
                getAverageConfidence() {
                    const allSectionsForPaper = Object.entries(this.specificationData).filter(([_, section]) => section.paper === this.selectedPaper);
                    const relevantLevels = Object.entries(this.confidenceLevels).filter(([id, _]) => allSectionsForPaper.some(([_, section]) => section.topics.some(topic => topic.id === id))).map(([_, level]) => level);
                    if (relevantLevels.length === 0) return 0;
                    return (relevantLevels.reduce((sum, level) => sum + level, 0) / relevantLevels.length).toFixed(1);
                },
                getAssessedCount(topics) {
                    if (!topics) return 0;
                    return topics.filter(topic => this.confidenceLevels[topic.id]).length;
                },
                getGroupTotalTopics(sections) {
                    return sections.reduce((sum, key) => sum + this.specificationData[key].topics.length, 0);
                },
                getGroupAssessedCount(sections) {
                    return sections.reduce((sum, key) => sum + this.getAssessedCount(this.specificationData[key].topics), 0);
                }    
    }));
});
