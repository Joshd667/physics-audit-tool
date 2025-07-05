// js/ui-state-module.js
window.uiModule = {
    init(component) {
        this.component = component;
    },

    getMethods() {
        return {
            applyDarkMode() {
                if (this.darkMode) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            },

            toggleViewMode() {
                this.viewMode = this.viewMode === 'paper' ? 'spec' : 'paper';
                this.collapseAllDropdowns();
                this.showingMainMenu = true;
                this.showingSpecificSection = false;
                this.lastExpandedGroup = null;
                
                if (this.viewMode === 'spec') {
                    this.selectedPaper = 'All Topics';
                } else {
                    this.selectedPaper = 'Paper 1';
                }
                const firstItem = this.currentGroups[0];
                this.activeSection = firstItem.type === 'single' ? firstItem.key : firstItem.sections[0];
            },

            toggleDarkMode() {
                this.darkMode = !this.darkMode;
                this.$nextTick(() => lucide.createIcons());
            },

            collapseAllDropdowns() {
                this.expandedGroups = {};
            },

            showMainMenuCards() {
                return this.showingMainMenu;
            },

            showSectionCards() {
                return this.lastExpandedGroup !== null && !this.showingSpecificSection && !this.showingMainMenu;
            },

            getMainMenuGroups() {
                return this.currentGroups.filter(item => item.type === 'group');
            },

            getCurrentGroupSections() {
                if (!this.lastExpandedGroup) return [];
                
                const lastGroup = this.currentGroups.find(item => 
                    item.type === 'group' && item.title === this.lastExpandedGroup
                );
                
                if (!lastGroup) return [];
                
                return lastGroup.sections.map(key => ({
                    key,
                    ...this.specificationData[key]
                }));
            },

            getCurrentGroupForSection() {
                const currentGroup = this.currentGroups.find(item => 
                    item.type === 'group' && item.sections.includes(this.activeSection)
                );
                return currentGroup ? currentGroup.title : null;
            },

            isViewingSpecificSection() {
                if (!this.lastExpandedGroup) return true;
                
                const lastGroup = this.currentGroups.find(item => 
                    item.type === 'group' && item.title === this.lastExpandedGroup
                );
                
                return lastGroup && lastGroup.sections.includes(this.activeSection) && !this.showSectionCards();
            },

            getConfidenceColor(confidence) {
                if (confidence === 0) return 'bg-gray-300';
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
                if (confidence === 0) return 'background: rgb(107, 114, 128)';
                
                let red, green, blue;
                
                if (confidence <= 3) {
                    const ratio = (confidence - 1) / 2;
                    red = 239 + (249 - 239) * ratio;
                    green = 68 + (115 - 68) * ratio;
                    blue = 68 + (22 - 68) * ratio;
                } else {
                    const ratio = (confidence - 3) / 2;
                    red = 249 + (34 - 249) * ratio;
                    green = 115 + (197 - 115) * ratio;
                    blue = 22 + (94 - 22) * ratio;
                }
                
                return `background: rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`;
            }
        };
    }
};
