// js/physics-audit-tool.js
export function createPhysicsAuditTool(specificationData, paperModeGroups, specModeGroups, Alpine) {
    return () => ({
        // --- DARK MODE STATE ---
        darkMode: false,
        // --- STATE ---
        selectedPaper: 'Paper 1',
        activeSection: 'measurements_errors',
        confidenceLevels: {},
        sidebarVisible: true,
        expandedGroups: {},
        viewMode: 'paper', // 'paper' or 'spec'
        // Track which group was last expanded for section cards
        lastExpandedGroup: null,
        showingSpecificSection: false,
        showingMainMenu: true,
        
        // --- AUTHENTICATION STATE ---
        isAuthenticated: false,
        showLoginScreen: true,
        user: null,
        authMethod: null, // 'moodle', 'google', or 'local'
        loginError: null,
        isLoading: false,
        
        // --- DATA ---
        specificationData: specificationData,
        paperModeGroups: paperModeGroups,
        specModeGroups: specModeGroups,
        confidenceScale: [
            { value: 1, label: "1", description: "Not confident - I don't understand this topic", color: "bg-red-500" },
            { value: 2, label: "2", description: "Low confidence - I have some understanding but need lots of practice", color: "bg-orange-500" },
            { value: 3, label: "3", description: "Moderate confidence - I understand the basics but need more practice", color: "bg-yellow-500" },
            { value: 4, label: "4", description: "Good confidence - I understand well and can solve most problems", color: "bg-blue-500" },
            { value: 5, label: "5", description: "Very confident - I fully understand and can teach others", color: "bg-green-500" }
        ],

        // --- COMPUTED PROPERTIES ---
        get currentGroups() {
            if (this.viewMode === 'spec') {
                return this.specModeGroups["All Topics"];
            }
            return this.paperModeGroups[this.selectedPaper] || [];
        },
        
        get currentSection() {
            return this.specificationData[this.activeSection];
        },

        get availablePapers() {
            return this.viewMode === 'paper' ? ['Paper 1', 'Paper 2'] : ['All Topics'];
        },
        
        // --- METHODS ---
        init() {
            // Check for existing authentication
            this.checkExistingAuth();
            
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
            
            // Set up watchers
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
            
            // Single icon creation after initialization and when content changes
            this.$nextTick(() => {
                lucide.createIcons();
            });
        },

        // --- AUTHENTICATION METHODS ---
        checkExistingAuth() {
            // Check for existing session
            const savedAuth = localStorage.getItem('physicsAuditAuth');
            if (savedAuth) {
                try {
                    const authData = JSON.parse(savedAuth);
                    if (authData.expires > Date.now()) {
                        this.user = authData.user;
                        this.authMethod = authData.method;
                        this.isAuthenticated = true;
                        this.showLoginScreen = false;
                        this.loadSavedData();
                        return;
                    }
                } catch (error) {
                    localStorage.removeItem('physicsAuditAuth');
                }
            }
            this.showLoginScreen = true;
        },
        
        // Simple login methods (placeholder implementations)
        loginWithMoodle(username, password, moodleUrl) {
            this.isLoading = true;
            this.loginError = null;
            
            // Placeholder implementation - in reality you'd connect to Moodle API
            setTimeout(() => {
                if (username && password && moodleUrl) {
                    this.user = {
                        id: 'moodle_' + username,
                        name: username,
                        email: username + '@school.edu'
                    };
                    this.authMethod = 'moodle';
                    this.completeLogin();
                } else {
                    this.loginError = 'Please fill in all fields';
                }
                this.isLoading = false;
            }, 1000);
        },
        
        loginWithGoogle() {
            this.isLoading = true;
            this.loginError = null;
            
            // Placeholder implementation - in reality you'd use Google Auth
            setTimeout(() => {
                this.user = {
                    id: 'google_user',
                    name: 'Google User',
                    email: 'user@gmail.com',
                    picture: 'https://via.placeholder.com/32'
                };
                this.authMethod = 'google';
                this.completeLogin();
                this.isLoading = false;
            }, 1000);
        },
        
        loginAsGuest() {
            this.user = {
                id: 'guest',
                name: 'Guest User'
            };
            this.authMethod = 'local';
            this.completeLogin();
        },
        
        completeLogin() {
            // Save authentication state
            const authData = {
                user: this.user,
                method: this.authMethod,
                expires: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
            };
            localStorage.setItem('physicsAuditAuth', JSON.stringify(authData));
            
            this.isAuthenticated = true;
            this.showLoginScreen = false;
            
            // Load user's data
            this.loadSavedData();
        },
        
        logout() {
            if (confirm('Are you sure you want to logout? Make sure your data is saved.')) {
                // Clear authentication
                localStorage.removeItem('physicsAuditAuth');
                
                // Reset state
                this.isAuthenticated = false;
                this.showLoginScreen = true;
                this.user = null;
                this.authMethod = null;
                this.confidenceLevels = {};
            }
        },

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
            // Reset to first available section
            const firstItem = this.currentGroups[0];
            this.activeSection = firstItem.type === 'single' ? firstItem.key : firstItem.sections[0];
        },

        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            // Force icon refresh after dark mode change
            this.$nextTick(() => lucide.createIcons());
        },
        
        setSelectedPaper(paper) {
            this.selectedPaper = paper;
            if (this.viewMode === 'spec') {
                // In spec mode, clicking Paper 1/2 should switch to paper mode and show that paper
                this.viewMode = 'paper';
            }
            this.collapseAllDropdowns();
            this.showingMainMenu = true;
            this.showingSpecificSection = false;
            this.lastExpandedGroup = null;
        },
        
        collapseAllDropdowns() {
            this.expandedGroups = {};
        },
        
        updateConfidence(topicId, level) {
            this.confidenceLevels[topicId] = level;
            // Auto-save whenever confidence is updated
            this.saveData();
        },
        
        saveData() {
            const dataToSave = {
                confidenceLevels: this.confidenceLevels,
                lastUpdated: new Date().toISOString(),
                version: "1.0",
                user: this.user
            };
            
            // Save locally first
            localStorage.setItem('physicsAuditData', JSON.stringify(dataToSave));
            
            // In a real implementation, you'd also save to cloud storage here
            // based on this.authMethod
        },
        
        loadSavedData() {
            try {
                const savedData = localStorage.getItem('physicsAuditData');
                if (savedData) {
                    const parsed = JSON.parse(savedData);
                    this.confidenceLevels = parsed.confidenceLevels || {};
                }
            } catch (error) {
                console.warn('Could not load saved data:', error);
                this.confidenceLevels = {};
            }
        },
        
        clearAllData() {
            if (confirm('Are you sure you want to clear ALL your confidence ratings? This cannot be undone.')) {
                this.confidenceLevels = {};
                localStorage.removeItem('physicsAuditData');
                alert('All data has been cleared.');
            }
        },
        
        exportDataBackup() {
            const dataToExport = {
                confidenceLevels: this.confidenceLevels,
                exportDate: new Date().toISOString(),
                version: "1.0"
            };
            
            const dataStr = JSON.stringify(dataToExport, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `physics-audit-backup-${new Date().toISOString().split('T')[0]}.json`;
            link.click();
            URL.revokeObjectURL(link.href);
        },
        
        importDataBackup(event) {
            const file = event.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const importedData = JSON.parse(e.target.result);
                    if (importedData.confidenceLevels) {
                        if (confirm('This will replace your current confidence ratings. Are you sure?')) {
                            this.confidenceLevels = importedData.confidenceLevels;
                            this.saveData();
                            alert('Data imported successfully!');
                        }
                    } else {
                        alert('Invalid backup file format.');
                    }
                } catch (error) {
                    alert('Error reading backup file: ' + error.message);
                }
            };
            reader.readAsText(file);
            // Reset the input
            event.target.value = '';
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
        
        exportResults() {
            const allSections = Object.entries(this.specificationData);
            const results = allSections.flatMap(([_, section]) => 
                section.topics.map(topic => ({
                    paper: section.paper,
                    section: section.title,
                    topic: `${topic.id} ${topic.title}`,
                    confidence: this.confidenceLevels[topic.id] || 0,
                    confidenceLabel: this.confidenceLevels[topic.id] 
                        ? this.confidenceScale.find(c => c.value === this.confidenceLevels[topic.id])?.description 
                        : "Not assessed"
                }))
            );
            
            const csvContent = [
                ['Paper', 'Section', 'Topic', 'Confidence Level', 'Confidence Description'],
                ...results.map(r => [r.paper, `"${r.section}"`, `"${r.topic}"`, r.confidence, `"${r.confidenceLabel}"`])
            ].map(row => row.join(',')).join('\n');
            
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `physics-audit-${this.viewMode}-${new Date().toISOString().split('T')[0]}.csv`;
            link.click();
            URL.revokeObjectURL(link.href);
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
    });
}
