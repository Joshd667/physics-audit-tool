// js/data.js - Main data combiner
import { measurementsData } from './measurements-data.js';
import { particlesData } from './particles-data.js';
// Import other data files here as we create them
// import { wavesData } from './waves-data.js';
// import { mechanicsData } from './mechanics-data.js';
// import { electricityData } from './electricity-data.js';
// import { periodicMotionData } from './periodic-motion-data.js';
// import { thermalData } from './thermal-data.js';
// import { fieldsData } from './fields-data.js';
// import { magneticFieldsData } from './magnetic-fields-data.js';
// import { nuclearData } from './nuclear-data.js';

// Combine all specification data
export const specificationData = {
    ...measurementsData,
    ...particlesData,
    // Add other data as we create the files
    // ...wavesData,
    // ...mechanicsData,
    // etc.
};

// Paper Mode Groups - split across Paper 1 and Paper 2
export const paperModeGroups = {
    "Paper 1": [
        { type: "single", key: "measurements" },
        { type: "group", title: "3.2 Particles & Radiation", icon: "atom", sections: ["particles_structure", "particle_physics", "quantum_phenomena"] },
        { type: "group", title: "3.3 Waves", icon: "waves", sections: ["waves_basic", "waves_advanced"] },
        { type: "group", title: "3.4 Mechanics & Materials", icon: "target", sections: ["mechanics_forces", "mechanics_motion", "mechanics_dynamics", "materials"] },
        { type: "group", title: "3.5 Electricity", icon: "zap", sections: ["electricity_basic", "electricity_circuits"] },
        { type: "single", key: "circular_motion" }
    ],
    "Paper 2": [
        { type: "single", key: "shm" },
        { type: "group", title: "3.6.2 Thermal Physics", icon: "settings", sections: ["thermal_energy", "ideal_gases", "kinetic_theory"] },
        { type: "group", title: "3.7 G and E Fields", icon: "globe", sections: ["gravitational_fields", "electric_fields", "capacitance"] },
        { type: "group", title: "3.7 Magnetic Fields", icon: "settings", sections: ["magnetic_forces", "electromagnetic_induction", "ac_transformers"] },
        { type: "group", title: "3.8 Nuclear Physics", icon: "shield", sections: ["radioactivity", "nuclear_structure", "nuclear_applications"] }
    ]
};

// Spec Mode Groups - all topics shown, no paper split
export const specModeGroups = {
    "All Topics": [
        { type: "group", title: "3.1 Measurements and their errors", icon: "settings", sections: ["measurements"] },
        { type: "group", title: "3.2 Particles & Radiation", icon: "atom", sections: ["particles_structure", "particle_physics", "quantum_phenomena"] },
        { type: "group", title: "3.3 Waves", icon: "waves", sections: ["waves_basic", "waves_advanced"] },
        { type: "group", title: "3.4 Mechanics & Materials", icon: "target", sections: ["mechanics_forces", "mechanics_motion", "mechanics_dynamics", "materials"] },
        { type: "group", title: "3.5 Electricity", icon: "zap", sections: ["electricity_basic", "electricity_circuits"] },
        { type: "group", title: "3.6.1 Periodic motion", icon: "target", sections: ["circular_motion", "shm"] },
        { type: "group", title: "3.6.2 Thermal Physics", icon: "settings", sections: ["thermal_energy", "ideal_gases", "kinetic_theory"] },
        { type: "group", title: "3.7 G and E Fields", icon: "globe", sections: ["gravitational_fields", "electric_fields", "capacitance"] },
        { type: "group", title: "3.7 Magnetic Fields", icon: "settings", sections: ["magnetic_forces", "electromagnetic_induction", "ac_transformers"] },
        { type: "group", title: "3.8 Nuclear Physics", icon: "shield", sections: ["radioactivity", "nuclear_structure", "nuclear_applications"] }
    ]
};
