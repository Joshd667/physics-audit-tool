// js/navigation.js - Navigation and view state management
export function createNavigationModule() {
    return {
        // --- NAVIGATION STATE ---
        selectedPaper: 'Paper 1',
        activeSection: 'measurements_errors',
        sidebarVisible: true,
        expandedGroups: {},
        viewMode: 'paper', // 'paper' or 'spec'
        lastExpandedGroup: null,
        showingSpecificSection: false,
        showingMainMenu: true,

        // --- NAVIGATION METHODS ---
        collapseAllDropdowns() {
            this.expandedGroups = {};
        },
        
        setSelectedPaper(paper) {
            this.selectedPaper = paper;
            this.viewMode = 'paper';
            this.collapseAllDropdowns();
            this.showingMainMenu = true;
            this.showingSpecificSection = false;
            this.lastExpandedGroup = null;
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
            // Reset to first available section
            const firstItem = this.currentGroups[0];
            this.activeSection = firstItem.type === 'single' ? firstItem.key : firstItem.sections[0];
        },
        
        selectSection(sectionKey) {
            this.activeSection = sectionKey;
            
            // When a section is selected, show its topics (hide group cards and main menu)
            this.showingSpecificSection = true;
            this.showingMainMenu = false;
            
            // Ensure the group containing this section is expanded in sidebar and set as last clicked
            const parentGroup = this.currentGroups.find(item => 
                item.type === "group" && item.sections.includes(sectionKey)
            );
            
            if (parentGroup) {
                this.lastExpandedGroup = parentGroup.title;
                this.expandedGroups[parentGroup.title] = true;
            }
            
            // Close sidebar on mobile when topic is selected
            if (window.innerWidth < 768) {
                this.sidebarVisible = false;
            }
        },
        
        toggleGroup(groupTitle) {
            // Always set this as the last clicked group, regardless of expanding/collapsing
            this.lastExpandedGroup = groupTitle;
            
            // When clicking a group, show group cards (not specific section or main menu)
            this.showingSpecificSection = false;
            this.showingMainMenu = false;
            
            // Then toggle the expansion state
            this.expandedGroups[groupTitle] = !this.expandedGroups[groupTitle];
        },

        showMainMenuCards() {
            return this.showingMainMenu;
        },
        
        getMainMenuGroups() {
            return this.currentGroups.filter(item => item.type === 'group');
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

        showSectionCards() {
            // Show section cards if we have a last clicked group AND we're not viewing main menu or specific section
            return this.lastExpandedGroup !== null && !this.showingSpecificSection && !this.showingMainMenu;
        },
        
        getCurrentGroupSections() {
            // Get sections only from the last clicked group
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
        
        goBackToGroupCards() {
            // Go back to showing group cards instead of specific section
            this.showingSpecificSection = false;
            this.showingMainMenu = false;
        },
        
        getCurrentGroupForSection() {
            // Find which group contains the current active section
            const currentGroup = this.currentGroups.find(item => 
                item.type === 'group' && item.sections.includes(this.activeSection)
            );
            return currentGroup ? currentGroup.title : null;
        },
        
        isViewingSpecificSection() {
            // Check if we're viewing a specific section's topics (not group cards)
            if (!this.lastExpandedGroup) return true; // Default to showing topics if no group selected
            
            const lastGroup = this.currentGroups.find(item => 
                item.type === 'group' && item.title === this.lastExpandedGroup
            );
            
            return lastGroup && lastGroup.sections.includes(this.activeSection) && !this.showSectionCards();
        }
    };
}
