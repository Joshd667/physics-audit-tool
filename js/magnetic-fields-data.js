// js/magnetic-fields-data.js
export const magneticFieldsData = {
    magnetic_forces: {
        title: "3.7.5a Magnetic Forces",
        paper: "Paper 2",
        icon: "settings",
        topics: [
            { 
                id: "3.7.5.1a", 
                title: "Force on current-carrying wire", 
                prompt: "Can you use the formula F = BILsin(θ) to calculate the force on a current-carrying wire in a magnetic field?",
                learningObjectives: [
                    "Apply F = BILsin(θ)",
                    "Understand angle dependence",
                    "Calculate magnetic forces",
                    "Understand maximum force conditions"
                ],
                examples: [
                    "F = BILsin(θ)",
                    "θ = angle between B and I",
                    "Maximum force when θ = 90°",
                    "Zero force when θ = 0°"
                ],
                resources: []
            },
            { 
                id: "3.7.5.1b", 
                title: "Fleming's left hand rule", 
                prompt: "Can you confidently use Fleming's left-hand rule to determine the direction of the force, field, or current?",
                learningObjectives: [
                    "Apply Fleming's left-hand rule",
                    "Determine force direction",
                    "Determine field direction",
                    "Determine current direction"
                ],
                examples: [
                    "First finger: Field direction",
                    "Second finger: Current direction",
                    "Thumb: Force direction",
                    "All three mutually perpendicular"
                ],
                resources: []
            },
            { 
                id: "3.7.5.2a", 
                title: "Force on moving charge", 
                prompt: "Can you use the formula F = BQv to calculate the force on a single charged particle moving through a magnetic field?",
                learningObjectives: [
                    "Apply F = BQv",
                    "Calculate force on moving charges",
                    "Understand velocity dependence",
                    "Apply to particle motion"
                ],
                examples: [
                    "F = BQv (for v ⊥ B)",
                    "F = BQvsin(θ) (general case)",
                    "Force perpendicular to v and B",
                    "Used in particle accelerators"
                ],
                resources: []
            },
            { 
                id: "3.7.5.2b", 
                title: "Circular motion of charges", 
                prompt: "Can you explain why a charged particle follows a circular path in a uniform magnetic field and derive an expression for the radius of this path?",
                learningObjectives: [
                    "Explain circular motion in magnetic field",
                    "Derive radius formula",
                    "Apply to particle paths",
                    "Understand cyclotron motion"
                ],
                examples: [
                    "Magnetic force provides centripetal force",
                    "BQv = mv²/r",
                    "r = mv/BQ",
                    "Radius depends on momentum and charge"
                ],
                resources: []
            }
        ]
    },
    electromagnetic_induction: {
        title: "3.7.5b Electromagnetic Induction",
        paper: "Paper 2",
        icon: "settings",
        topics: [
            { 
                id: "3.7.5.3a", 
                title: "Magnetic flux", 
                prompt: "Can you define magnetic flux (Φ) and calculate it using the formula Φ = BAcos(θ)?",
                learningObjectives: [
                    "Define magnetic flux",
                    "Apply Φ = BAcos(θ)",
                    "Understand angle dependence",
                    "Calculate flux values"
                ],
                examples: [
                    "Φ = BAcos(θ)",
                    "Units: Webers (Wb) = T⋅m²",
                    "θ = angle between B and normal to area",
                    "Maximum flux when θ = 0°"
                ],
                resources: []
            },
            { 
                id: "3.7.5.3b", 
                title: "Flux linkage", 
                prompt: "Can you define magnetic flux linkage (NΦ) for a coil with N turns?",
                learningObjectives: [
                    "Define flux linkage",
                    "Apply NΦ for multiple turns",
                    "Understand coil geometry",
                    "Calculate total flux linkage"
                ],
                examples: [
                    "Flux linkage = NΦ",
                    "N = number of turns",
                    "Each turn links the same flux",
                    "Units: Weber-turns (Wb⋅turns)"
                ],
                resources: []
            },
            { 
                id: "3.7.5.4a", 
                title: "Faraday's law", 
                prompt: "Can you state Faraday's law of electromagnetic induction and use the equation ε = -N(ΔΦ/Δt) to calculate the induced e.m.f.?",
                learningObjectives: [
                    "State Faraday's law",
                    "Apply ε = -N(ΔΦ/Δt)",
                    "Understand flux change requirement",
                    "Calculate induced EMF"
                ],
                examples: [
                    "ε = -N(ΔΦ/Δt)",
                    "EMF proportional to rate of flux change",
                    "Negative sign from Lenz's law",
                    "Basis of generators and transformers"
                ],
                resources: []
            },
            { 
                id: "3.7.5.4b", 
                title: "Lenz's law", 
                prompt: "Can you state Lenz's law and use it to predict the direction of an induced current, understanding that it opposes the change that caused it?",
                learningObjectives: [
                    "State Lenz's law",
                    "Predict current direction",
                    "Understand opposition principle",
                    "Apply to practical situations"
                ],
                examples: [
                    "Induced current opposes the change",
                    "Conservation of energy principle",
                    "Current creates opposing magnetic field",
                    "Explains negative sign in Faraday's law"
                ],
                resources: []
            },
            { 
                id: "3.7.5.4c", 
                title: "Motional emf", 
                prompt: "Can you derive and use the equation for motional e.m.f. (ε = Blv) for a conductor moving through a magnetic field?",
                learningObjectives: [
                    "Derive motional EMF equation",
                    "Apply ε = Blv",
                    "Understand velocity dependence",
                    "Apply to moving conductors"
                ],
                examples: [
                    "ε = Blv (for v ⊥ B)",
                    "EMF due to conductor motion",
                    "Basis of generators",
                    "Force on charge: F = Bqv"
                ],
                resources: []
            }
        ]
    },
    ac_transformers: {
        title: "3.7.5c AC & Transformers",
        paper: "Paper 2",
        icon: "settings",
        topics: [
            { 
                id: "3.7.5.5a", 
                title: "AC quantities", 
                prompt: "Can you define peak and root-mean-square (rms) values for alternating current and voltage? Can you use the formulas I_rms = I₀/√2 and V_rms = V₀/√2?",
                learningObjectives: [
                    "Define peak values",
                    "Define RMS values",
                    "Apply I_rms = I₀/√2",
                    "Apply V_rms = V₀/√2"
                ],
                examples: [
                    "Peak value: maximum instantaneous value",
                    "RMS value: equivalent DC value",
                    "I_rms = I₀/√2, V_rms = V₀/√2",
                    "Power calculations use RMS values"
                ],
                resources: []
            },
            { 
                id: "3.7.5.6a", 
                title: "Transformer equation", 
                prompt: "Can you explain the operation of an ideal transformer and use the transformer equation: Nₛ/Nₚ = Vₛ/Vₚ = Iₚ/Iₛ?",
                learningObjectives: [
                    "Explain transformer operation",
                    "Apply transformer equation",
                    "Understand turns ratio",
                    "Calculate voltages and currents"
                ],
                examples: [
                    "Nₛ/Nₚ = Vₛ/Vₚ = Iₚ/Iₛ",
                    "Step-up: Nₛ > Nₚ",
                    "Step-down: Nₛ < Nₚ",
                    "Power conserved: VₛIₛ = VₚIₚ"
                ],
                resources: []
            },
            { 
                id: "3.7.5.6b", 
                title: "Transformer efficiency", 
                prompt: "Can you explain the main causes of energy loss in a real transformer and calculate its efficiency?",
                learningObjectives: [
                    "Explain energy losses",
                    "Calculate efficiency",
                    "Understand loss mechanisms",
                    "Apply to real transformers"
                ],
                examples: [
                    "Copper losses: I²R in windings",
                    "Iron losses: hysteresis and eddy currents",
                    "Efficiency = (output power/input power) × 100%",
                    "Typical efficiency: 95-99%"
                ],
                resources: []
            }
        ]
    }
};
