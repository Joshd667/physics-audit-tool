// js/auth-module.js
window.authModule = {
    getAuthState() {
        return {
            isAuthenticated: false,
            showLoginScreen: true,
            user: null,
            authMethod: null,
            loginError: null,
            isLoading: false
        };
    },

    init(component) {
        this.component = component;
        this.checkExistingAuth();
    },

    getMethods() {
        return {
            checkExistingAuth() {
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
            }
        };
    }
};
