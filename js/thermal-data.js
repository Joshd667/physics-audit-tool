// js/thermal-data.js
export const thermalData = {
    thermal_energy_transfer: {
        title: "3.6.2.1 Thermal Energy Transfer",
        paper: "Paper 2",
        icon: "settings",
        topics: [
            { 
                id: "3.6.2.1a", 
                title: "Internal energy", 
                prompt: "Can you define internal energy as the sum of the random distribution of kinetic and potential energies of the molecules in a system?",
                learningObjectives: [
                    "Define internal energy",
                    "Understand molecular kinetic energy",
                    "Understand molecular potential energy",
                    "Relate to temperature"
                ],
                examples: [
                    "U = sum of molecular KE and PE",
                    "Random motion and interactions",
                    "Depends on temperature and state",
                    "Absolute scale starting from 0 K"
                ],
                resources: []
            },
            { 
                id: "3.6.2.1b", 
                title: "First law of thermodynamics", 
                prompt: "Can you state and apply the first law of thermodynamics, Q = ΔU + W, understanding the sign conventions for heat (Q), change in internal energy (ΔU), and work done (W)?",
                learningObjectives: [
                    "State first law of thermodynamics",
                    "Apply Q = ΔU + W",
                    "Understand sign conventions",
                    "Solve thermodynamics problems"
                ],
                examples: [
                    "Q = ΔU + W",
                    "Q > 0: heat into system",
                    "W > 0: work done by system",
                    "Energy conservation principle"
                ],
                resources: []
            },
            { 
                id: "3.6.2.1c", 
                title: "Specific heat capacity", 
                prompt: "Can you define specific heat capacity and use the formula Q = mcΔθ to calculate heat transfer?",
                learningObjectives: [
                    "Define specific heat capacity",
                    "Apply Q = mcΔθ",
                    "Understand material property",
                    "Calculate heat transfer"
                ],
                examples: [
                    "c = heat capacity per unit mass",
                    "Q = mcΔθ",
                    "Units: J/(kg⋅K)",
                    "Different for different materials"
                ],
                resources: []
            },
            { 
                id: "3.6.2.1d", 
                title: "Specific latent heat", 
                prompt: "Can you define specific latent heat of fusion and vaporisation? Can you use the formula Q = mL to calculate the energy required for a change of state?",
                learningObjectives: [
                    "Define specific latent heat",
                    "Distinguish fusion and vaporisation",
                    "Apply Q = mL",
                    "Understand phase changes"
                ],
                examples: [
                    "L = energy per unit mass for phase change",
                    "Fusion: solid ↔ liquid",
                    "Vaporisation: liquid ↔ gas",
                    "Temperature constant during change"
                ],
                resources: []
            }
        ]
    },
    ideal_gases: {
        title: "3.6.2.2 Ideal Gases",
        paper: "Paper 2",
        icon: "settings",
        topics: [
            { 
                id: "3.6.2.2a", 
                title: "Gas laws", 
                prompt: "Can you state and apply Boyle's Law (p₁V₁ = p₂V₂) and Charles's Law (V₁/T₁ = V₂/T₂) for an ideal gas? Do you remember to use temperature in Kelvin?",
                learningObjectives: [
                    "State Boyle's Law",
                    "State Charles's Law",
                    "Apply gas laws",
                    "Use absolute temperature"
                ],
                examples: [
                    "Boyle's Law: p₁V₁ = p₂V₂ (constant T)",
                    "Charles's Law: V₁/T₁ = V₂/T₂ (constant p)",
                    "Temperature in Kelvin (T = θ + 273)",
                    "Gay-Lussac's Law: p₁/T₁ = p₂/T₂ (constant V)"
                ],
                resources: []
            },
            { 
                id: "3.6.2.2b", 
                title: "Ideal gas equation", 
                prompt: "Can you use the ideal gas equation in its two forms, pV = nRT and pV = NkT, and explain the meaning of each term?",
                learningObjectives: [
                    "Apply pV = nRT",
                    "Apply pV = NkT",
                    "Understand each term",
                    "Solve ideal gas problems"
                ],
                examples: [
                    "pV = nRT (n = number of moles)",
                    "pV = NkT (N = number of molecules)",
                    "R = 8.31 J/(mol⋅K), k = 1.38×10⁻²³ J/K",
                    "Relationship: R = NAk"
                ],
                resources: []
            },
            { 
                id: "3.6.2.2c", 
                title: "Absolute zero", 
                prompt: "Can you explain the concept of absolute zero (-273 °C or 0 K) as the temperature at which the internal energy of a system is at its minimum?",
                learningObjectives: [
                    "Define absolute zero",
                    "Understand minimum internal energy",
                    "Relate to molecular motion",
                    "Explain unreachability"
                ],
                examples: [
                    "Absolute zero = 0 K = -273°C",
                    "Minimum possible internal energy",
                    "Theoretical cessation of molecular motion",
                    "Third law of thermodynamics"
                ],
                resources: []
            }
        ]
    },
    kinetic_theory: {
        title: "3.6.2.3 Kinetic Theory",
        paper: "Paper 2",
        icon: "settings",
        topics: [
            { 
                id: "3.6.2.3a", 
                title: "Kinetic theory", 
                prompt: "Can you state the assumptions of the kinetic theory of gases? Can you use the equation pV = ⅓Nm<c²> and explain how it is derived?",
                learningObjectives: [
                    "State kinetic theory assumptions",
                    "Apply pV = ⅓Nm<c²>",
                    "Understand derivation",
                    "Relate to molecular motion"
                ],
                examples: [
                    "Large number of molecules in random motion",
                    "Negligible molecular volume",
                    "Elastic collisions only",
                    "pV = ⅓Nm<c²>"
                ],
                resources: []
            },
            { 
                id: "3.6.2.3b", 
                title: "Mean kinetic energy", 
                prompt: "Do you understand the relationship between the average kinetic energy of a molecule and the absolute temperature of the gas, as given by ½m<c²> = (3/2)kT?",
                learningObjectives: [
                    "Apply ½m<c²> = (3/2)kT",
                    "Understand temperature-energy relationship",
                    "Calculate molecular speeds",
                    "Relate to gas temperature"
                ],
                examples: [
                    "½m<c²> = (3/2)kT",
                    "KE proportional to absolute temperature",
                    "Same for all gases at same temperature",
                    "Root-mean-square speed: √<c²>"
                ],
                resources: []
            }
        ]
    }
};
