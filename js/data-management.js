// js/data-management.js - Data persistence and management
export function createDataModule() {
    return {
        confidenceLevels: {},

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
        }
    };
}
