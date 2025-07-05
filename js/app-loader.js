// js/app-loader.js
// This script loads and initializes the Physics Audit Tool application

(async function() {
    try {
        // Import all required modules with corrected paths
        const { specificationData, paperModeGroups, specModeGroups } = await import('./data.js');
        const { createPhysicsAuditTool } = await import('./physics-audit-tool.js');
        
        // Import Alpine.js as a module
        const Alpine = (await import('https://unpkg.com/alpinejs@3.x.x/dist/module.esm.js')).default;
        
        // Make Alpine available globally (optional, but useful for debugging)
        window.Alpine = Alpine;
        
        // Register the Physics Audit Tool component
        Alpine.data('physicsAuditTool', createPhysicsAuditTool(
            specificationData,
            paperModeGroups,
            specModeGroups,
            Alpine
        ));
        
        // Start Alpine
        Alpine.start();
        
        console.log('Physics Audit Tool initialized successfully');
    } catch (error) {
        console.error('Failed to initialize Physics Audit Tool:', error);
    }
})();
