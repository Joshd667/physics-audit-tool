// js/ui-utils.js - UI utilities and dark mode management
export function createUIUtils() {
    return {
        darkMode: false,

        initializeUI() {
            // Initialize dark mode from localStorage or system preference
            const savedDarkMode = localStorage.getItem('darkMode');
            if (savedDarkMode !== null) {
                this.darkMode = savedDarkMode === 'true';
            } else {
                // Use system preference if no saved preference
                this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            }
            this.applyDarkMode();
            
            // Set sidebar visible by default (always open on init)
            this.sidebarVisible = true;
            
            // Listen for window resize to handle mobile/desktop transitions
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 768) {
                    this.sidebarVisible = true;
                }
            });
        },

        applyDarkMode() {
            if (this.darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        },

        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            this.applyDarkMode();
            localStorage.setItem('darkMode', this.darkMode);
            // Force icon refresh after dark mode change
            this.$nextTick(() => lucide.createIcons());
        },

        setupWatchers() {
            // Set up watchers for UI state changes
            this.$watch('darkMode', () => {
                this.applyDarkMode();
                localStorage.setItem('darkMode', this.darkMode);
            });
            
            this.$watch('viewMode', () => {
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
            });
            
            this.$watch('selectedPaper', () => {
                this.collapseAllDropdowns();
                this.showingMainMenu = true;
                this.showingSpecificSection = false;
                this.lastExpandedGroup = null;
                
                // Reset to first available section
                const firstItem = this.currentGroups[0];
                if (firstItem) {
                    this.activeSection = firstItem.type === 'single' ? firstItem.key : firstItem.sections[0];
                }
            });
            
            // Watch for confidence level changes and auto-save
            this.$watch('confidenceLevels', () => {
                this.saveData();
            }, { deep: true });
            
            // Re-create icons when content changes
            this.$watch('activeSection', () => {
                this.$nextTick(() => lucide.createIcons());
            });
            
            this.$watch('currentGroups', () => {
                this.$nextTick(() => lucide.createIcons());
            });
        },

        initializeIcons() {
            // Single icon creation after initialization and when content changes
            this.$nextTick(() => {
                lucide.createIcons();
            });
        }
    };
}
