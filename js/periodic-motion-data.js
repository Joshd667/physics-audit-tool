// js/periodic-motion-data.js
export const periodicMotionData = {
    circular_motion: {
        title: "3.6.1.1 Circular Motion",
        paper: "Paper 1",
        icon: "target",
        topics: [
            { 
                id: "3.6.1.1a", 
                title: "Angular velocity", 
                prompt: "Can you define angular velocity (ω) and use the equations ω = v/r and ω = 2πf to solve problems involving objects in circular motion?",
                learningObjectives: [
                    "Define angular velocity",
                    "Apply ω = v/r",
                    "Apply ω = 2πf",
                    "Relate to linear velocity"
                ],
                examples: [
                    "ω = angular velocity (rad/s)",
                    "ω = v/r (linear velocity / radius)",
                    "ω = 2πf = 2π/T",
                    "Same ω for all points on rigid body"
                ],
                resources: []
            },
            { 
                id: "3.6.1.1b", 
                title: "Centripetal acceleration", 
                prompt: "Do you understand that an object in circular motion is always accelerating towards the center of the circle? Can you use the equations a = v²/r and a = ω²r?",
                learningObjectives: [
                    "Understand centripetal acceleration direction",
                    "Apply a = v²/r",
                    "Apply a = ω²r",
                    "Explain constant speed but changing velocity"
                ],
                examples: [
                    "Always directed toward center",
                    "a = v²/r = ω²r",
                    "Constant magnitude for uniform circular motion",
                    "Velocity changes direction, not magnitude"
                ],
                resources: []
            },
            { 
                id: "3.6.1.1c", 
                title: "Centripetal force", 
                prompt: "Can you explain that a resultant force, the centripetal force, is required to cause circular motion? Can you use F = mv²/r and F = mω²r to solve problems?",
                learningObjectives: [
                    "Explain need for centripetal force",
                    "Apply F = mv²/r",
                    "Apply F = mω²r",
                    "Identify force sources"
                ],
                examples: [
                    "F = mv²/r = mω²r",
                    "Always directed toward center",
                    "Provided by tension, gravity, friction, etc.",
                    "No centripetal force → object moves in straight line"
                ],
                resources: []
            }
        ]
    },
    simple_harmonic_motion: {
        title: "3.6.1.2-3 Simple Harmonic Motion",
        paper: "Paper 2",
        icon: "target",
        topics: [
            { 
                id: "3.6.1.2a", 
                title: "SHM condition", 
                prompt: "Can you state the defining condition for Simple Harmonic Motion (SHM): an acceleration that is proportional to the displacement from the equilibrium position and always directed towards it (a ∝ -x)?",
                learningObjectives: [
                    "State SHM defining condition",
                    "Understand a ∝ -x",
                    "Explain negative sign significance",
                    "Identify SHM systems"
                ],
                examples: [
                    "a ∝ -x (acceleration ∝ -displacement)",
                    "a = -ω²x",
                    "Negative sign: acceleration opposes displacement",
                    "Restoring force toward equilibrium"
                ],
                resources: []
            },
            { 
                id: "3.6.1.2b", 
                title: "SHM equations", 
                prompt: "Can you use the equations a = -ω²x and x = Acos(ωt) or x = Asin(ωt) to describe the motion of an oscillator?",
                learningObjectives: [
                    "Apply a = -ω²x",
                    "Use x = Acos(ωt)",
                    "Use x = Asin(ωt)",
                    "Understand amplitude and angular frequency"
                ],
                examples: [
                    "a = -ω²x (acceleration equation)",
                    "x = Acos(ωt) or x = Asin(ωt)",
                    "A = amplitude, ω = angular frequency",
                    "Choice depends on initial conditions"
                ],
                resources: []
            },
            { 
                id: "3.6.1.2c", 
                title: "SHM velocity", 
                prompt: "Can you use the equation v = ±ω√(A² - x²) to find the velocity of an object in SHM at any given displacement?",
                learningObjectives: [
                    "Apply v = ±ω√(A² - x²)",
                    "Understand sign convention",
                    "Calculate velocity at any position",
                    "Relate to energy"
                ],
                examples: [
                    "v = ±ω√(A² - x²)",
                    "Maximum velocity at equilibrium: vₘₐₓ = ωA",
                    "Zero velocity at maximum displacement",
                    "Sign depends on direction of motion"
                ],
                resources: []
            },
            { 
                id: "3.6.1.2d", 
                title: "SHM energy", 
                prompt: "Can you describe the continuous interchange between kinetic and potential energy during SHM? Can you sketch graphs of energy vs. displacement?",
                learningObjectives: [
                    "Describe energy interchange",
                    "Sketch energy vs displacement graphs",
                    "Understand total energy conservation",
                    "Calculate energies at any position"
                ],
                examples: [
                    "KE + PE = constant",
                    "KE maximum at equilibrium",
                    "PE maximum at amplitude",
                    "Total energy = ½mω²A²"
                ],
                resources: []
            },
            { 
                id: "3.6.1.3a", 
                title: "Mass-spring system", 
                prompt: "Can you use the formula T = 2π√(m/k) for the period of a mass-spring system and describe the energy changes involved?",
                learningObjectives: [
                    "Apply T = 2π√(m/k)",
                    "Understand spring constant dependence",
                    "Describe energy changes",
                    "Solve spring problems"
                ],
                examples: [
                    "T = 2π√(m/k)",
                    "Period depends on mass and spring constant",
                    "Independent of amplitude",
                    "Elastic PE ↔ kinetic energy"
                ],
                resources: []
            },
            { 
                id: "3.6.1.3b", 
                title: "Simple pendulum", 
                prompt: "Can you use the formula T = 2π√(L/g) for the period of a simple pendulum and describe the energy changes involved?",
                learningObjectives: [
                    "Apply T = 2π√(L/g)",
                    "Understand length dependence",
                    "Describe energy changes",
                    "Apply small angle approximation"
                ],
                examples: [
                    "T = 2π√(L/g) (for small angles)",
                    "Period depends on length and gravity",
                    "Independent of mass and amplitude",
                    "Gravitational PE ↔ kinetic energy"
                ],
                resources: []
            },
            { 
                id: "3.6.1.4a", 
                title: "Resonance", 
                prompt: "Can you define natural frequency, forced vibrations, and resonance? Can you describe the effects of damping on the sharpness of the resonance peak?",
                learningObjectives: [
                    "Define natural frequency",
                    "Define forced vibrations",
                    "Explain resonance phenomenon",
                    "Describe damping effects"
                ],
                examples: [
                    "Natural frequency: frequency of free oscillation",
                    "Forced vibrations: external driving force",
                    "Resonance: maximum amplitude at natural frequency",
                    "Damping reduces peak amplitude, broadens curve"
                ],
                resources: []
            }
        ]
    }
};
