// js/data.js - Main data combiner with corrected structure
import { measurementsData } from './measurements-data.js';
import { particlesData } from './particles-data.js';
import { wavesData } from './waves-data.js';
import { mechanicsData } from './mechanics-data.js';
import { electricityData } from './electricity-data.js';
import { periodicMotionData } from './periodic-motion-data.js';
import { thermalData } from './thermal-data.js';
import { fieldsData } from './fields-data.js';
import { magneticFieldsData } from './magnetic-fields-data.js';
import { nuclearData } from './nuclear-data.js';

// Combine all specification data
export const specificationData = {
    ...measurementsData,
    ...particlesData,
    ...wavesData,
    ...mechanicsData,
    ...electricityData,
    ...periodicMotionData,
    ...thermalData,
    ...fieldsData,
    ...magneticFieldsData,
    ...nuclearData
};

// Paper Mode Groups - split across Paper 1 and Paper 2 (matching PaperMode.txt)
export const paperModeGroups = {
    "Paper 1": [
        { type: "group", title: "3.1 Measurements and their errors", icon: "settings", sections: ["measurements_errors", "number_work"] },
        { type: "group", title: "3.2 Particles & Radiation", icon: "atom", sections: ["atomic_structure", "particle_interactions", "quantum_phenomena"] },
        { type: "group", title: "3.3 Waves", icon: "waves", sections: ["waves_properties", "stationary_waves", "interference_patterns", "optics"] },
        { type: "group", title: "3.4 Mechanics & Materials", icon: "target", sections: ["vectors_scalars", "moments", "motion_kinematics", "dynamics", "energy", "materials"] },
        { type: "group", title: "3.5 Electricity", icon: "zap", sections: ["current_voltage", "dc_circuits"] },
        { type: "single", key: "circular_motion" }
    ],
    "Paper 2": [
        { type: "single", key: "simple_harmonic_motion" },
        { type: "group", title: "3.6.2 Thermal Physics", icon: "settings", sections: ["thermal_energy_transfer", "ideal_gases", "kinetic_theory"] },
        { type: "group", title: "3.7a G and E Fields", icon: "globe", sections: ["gravitational_fields", "electric_fields", "capacitance"] },
        { type: "group", title: "3.7b Magnetic Fields", icon: "settings", sections: ["magnetic_forces", "electromagnetic_induction", "ac_transformers"] },
        { type: "group", title: "3.8 Nuclear Physics", icon: "shield", sections: ["radioactivity", "nuclear_structure_energy", "nuclear_applications_safety"] }
    ]
};

// Spec Mode Groups - all topics shown, no paper split (matching SpecMode.txt)
export const specModeGroups = {
    "All Topics": [
        { type: "group", title: "3.1 Measurements and their errors", icon: "settings", sections: ["measurements_errors", "number_work"] },
        { type: "group", title: "3.2 Particles & Radiation", icon: "atom", sections: ["atomic_structure", "particle_interactions", "quantum_phenomena"] },
        { type: "group", title: "3.3 Waves", icon: "waves", sections: ["waves_properties", "stationary_waves", "interference_patterns", "optics"] },
        { type: "group", title: "3.4 Mechanics & Materials", icon: "target", sections: ["vectors_scalars", "moments", "motion_kinematics", "dynamics", "energy", "materials"] },
        { type: "group", title: "3.5 Electricity", icon: "zap", sections: ["current_voltage", "dc_circuits"] },
        { type: "group", title: "3.6.1 Periodic motion", icon: "target", sections: ["circular_motion", "simple_harmonic_motion"] },
        { type: "group", title: "3.6.2 Thermal Physics", icon: "settings", sections: ["thermal_energy_transfer", "ideal_gases", "kinetic_theory"] },
        { type: "group", title: "3.7a G and E Fields", icon: "globe", sections: ["gravitational_fields", "electric_fields", "capacitance"] },
        { type: "group", title: "3.7b Magnetic Fields", icon: "settings", sections: ["magnetic_forces", "electromagnetic_induction", "ac_transformers"] },
        { type: "group", title: "3.8 Nuclear Physics", icon: "shield", sections: ["radioactivity", "nuclear_structure_energy", "nuclear_applications_safety"] }
    ]
};
