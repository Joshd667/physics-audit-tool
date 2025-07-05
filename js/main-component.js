// js/main-component.js - Main Alpine.js component
import { specificationData, paperModeGroups, specModeGroups } from './data.js';
import { createAuthModule } from './auth.js';
import { createDataModule } from './data-management.js';
import { createNavigationModule } from './navigation.js';
import { createProgressModule } from './progress.js';
import { createUIUtils } from './ui-utils.js';

export function createPhysicsAuditTool() {
    return {
        // --- DATA ---
        specificationData: specificationData,
        paperModeGroups: paperModeGroups,
        specModeGroups: specModeGroups,

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
        
        // --- INITIALIZATION ---
        init() {
            // Mix in all modules
            Object.assign(this, createAuthModule());
            Object.assign(this, createDataModule());
            Object.assign(this, createNavigationModule());
            Object.assign(this, createProgressModule());
            Object.assign(this, createUIUtils());

            // Check for existing authentication
            const authSuccess = this.checkExistingAuth();
            if (authSuccess) {
                this.loadSavedData();
            }
            
            // Initialize UI
            this.initializeUI();
            
            // Set up all watchers
            this.setupWatchers();
            
            // Initialize icons
            this.initializeIcons();
        }
    };
}
