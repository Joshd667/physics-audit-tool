// js/navigation-module.js
window.navModule = {
    init(component) {
        this.component = component;
    },

    getMethods() {
        return {
            setSelectedPaper(paper) {
                this.selectedPaper = paper;
                if (this.viewMode === 'spec') {
                    this.viewMode = 'paper';
                }
                this.collapseAllDropdowns();
                this.showingMainMenu = true;
                this.showingSpecificSection = false;
                this.lastExpandedGroup = null;
            },

            selectSection(sectionKey) {
                this.activeSection = sectionKey;
                
                this.showingSpecificSection = true;
                this.showingMainMenu = false;
                
                const parentGroup = this.currentGroups.find(item => 
                    item.type === "group" && item.sections.includes(sectionKey)
                );
                
                if (parentGroup) {
                    this.lastExpandedGroup = parentGroup.title;
                    this.expandedGroups[parentGroup.title] = true;
                }
                
                if (window.innerWidth < 768) {
                    this.sidebarVisible = false;
                }
            },

            toggleGroup(groupTitle) {
                this.lastExpandedGroup = groupTitle;
                
                this.showingSpecificSection = false;
                this.showingMainMenu = false;
                
                this.expandedGroups[groupTitle] = !this.expandedGroups[groupTitle];
            },

            selectMainMenuGroup(groupTitle) {
                this.lastExpandedGroup = groupTitle;
                this.expandedGroups[groupTitle] = true;
                this.showingMainMenu = false;
                this.showingSpecificSection = false;
            },

            goBackToMainMenu() {
                this.showingMainMenu = true;
                this.showingSpecificSection = false;
                this.lastExpandedGroup = null;
            },

            goBackToGroupCards() {
                this.showingSpecificSection = false;
                this.showingMainMenu = false;
            }
        };
    }
};
