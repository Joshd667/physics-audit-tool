// js/data.js

// By exporting these, we can import them into our main.js file.
export const specificationData = {
    measurements: { title: "3.1 Measurements and their errors", paper: "Paper 1", icon: "settings", topics: [ /* ... all topic objects ... */ ] },
    particles_structure: { title: "3.2.1 Atomic Structure & Particles", paper: "Paper 1", icon: "atom", topics: [ /* ... all topic objects ... */ ] },
    // ... all the other specification sections ...
    nuclear_applications: { title: "3.8.1.7-8 Nuclear Applications & Safety", paper: "Paper 2", icon: "shield", topics: [ /* ... all topic objects ... */ ] }
};

export const sectionGroups = {
    "Paper 1": [
        { type: "single", key: "measurements" },
        { type: "group", title: "3.2 Particles & Radiation", icon: "atom", sections: ["particles_structure", "particle_physics", "quantum_phenomena"] },
        { type: "group", title: "3.3 Waves", icon: "waves", sections: ["waves_basic", "waves_advanced"] },
        { type: "group", title: "3.4 Mechanics & Materials", icon: "target", sections: ["mechanics_forces", "mechanics_motion", "mechanics_dynamics", "materials"] },
        { type: "group", title: "3.5 Electricity", icon: "zap", sections: ["electricity_basic", "electricity_circuits"] },
        { type: "group", title: "3.6 Further Mechanics (P1)", icon: "target", sections: ["circular_motion"] }
    ],
    "Paper 2": [
        { type: "single", key: "shm" },
        { type: "group", title: "3.7 Fields", icon: "globe", sections: ["gravitational_fields", "electric_fields", "capacitance"] },
        { type: "group", title: "3.7.5 Magnetic Fields", icon: "settings", sections: ["magnetic_forces", "electromagnetic_induction", "ac_transformers"] },
        { type: "group", title: "3.8 Nuclear Physics", icon: "shield", sections: ["radioactivity", "nuclear_structure", "nuclear_applications"] }
    ]
};
