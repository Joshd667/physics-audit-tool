// js/nuclear-data.js
export const nuclearData = {
    radioactivity: {
        title: "3.8a Radioactivity",
        paper: "Paper 2",
        icon: "shield",
        topics: [
            { 
                id: "3.8.1.1a", 
                title: "Rutherford scattering", 
                prompt: "Can you describe the Rutherford alpha-particle scattering experiment and explain how its results led to the nuclear model of the atom?",
                learningObjectives: [
                    "Describe Rutherford's experiment",
                    "Explain unexpected results",
                    "Understand nuclear model implications",
                    "Compare with plum pudding model"
                ],
                examples: [
                    "Alpha particles fired at gold foil",
                    "Most passed through, few scattered",
                    "Large angle scattering unexpected",
                    "Led to nuclear model of atom"
                ],
                resources: []
            },
            { 
                id: "3.8.1.2a", 
                title: "Radiation properties", 
                prompt: "Can you compare the nature, penetration power, and ionising ability of alpha (α), beta (β), and gamma (γ) radiation?",
                learningObjectives: [
                    "Compare radiation types",
                    "Understand penetration power",
                    "Compare ionising ability",
                    "Relate to applications"
                ],
                examples: [
                    "Alpha: helium nuclei, low penetration, high ionisation",
                    "Beta: electrons, medium penetration, medium ionisation",
                    "Gamma: EM radiation, high penetration, low ionisation",
                    "Stopped by paper/skin, aluminum, lead respectively"
                ],
                resources: []
            },
            { 
                id: "3.8.1.2b", 
                title: "Inverse square law", 
                prompt: "Can you explain and apply the inverse square law for gamma radiation (I = k/x²)?",
                learningObjectives: [
                    "Explain inverse square law",
                    "Apply I = k/x²",
                    "Understand distance dependence",
                    "Calculate intensity changes"
                ],
                examples: [
                    "I = k/x² (intensity ∝ 1/distance²)",
                    "Point source assumption",
                    "Double distance → quarter intensity",
                    "Used for radiation safety"
                ],
                resources: []
            },
            { 
                id: "3.8.1.2c", 
                title: "Background radiation", 
                prompt: "Can you describe the main sources of background radiation and explain how to correct for it in experiments?",
                learningObjectives: [
                    "Identify background radiation sources",
                    "Explain correction methods",
                    "Understand measurement importance",
                    "Apply to radiation experiments"
                ],
                examples: [
                    "Cosmic rays, radon gas, medical procedures",
                    "Nuclear weapons testing, nuclear accidents",
                    "Subtract background from measurements",
                    "Measure background without source present"
                ],
                resources: []
            },
            { 
                id: "3.8.1.3a", 
                title: "Random decay", 
                prompt: "Can you explain that radioactive decay is a spontaneous and random process? What does this mean on a macroscopic and microscopic level?",
                learningObjectives: [
                    "Explain spontaneous decay",
                    "Understand random nature",
                    "Distinguish macro vs micro behavior",
                    "Relate to probability"
                ],
                examples: [
                    "Cannot predict when individual nucleus decays",
                    "Probability constant for each nucleus",
                    "Large numbers → predictable average behavior",
                    "Exponential decay law for large samples"
                ],
                resources: []
            },
            { 
                id: "3.8.1.3b", 
                title: "Decay equation", 
                prompt: "Can you use the exponential decay equation N = N₀e^(-λt) to solve problems involving the number of undecayed nuclei?",
                learningObjectives: [
                    "Apply N = N₀e^(-λt)",
                    "Understand decay constant",
                    "Calculate undecayed nuclei",
                    "Solve decay problems"
                ],
                examples: [
                    "N = N₀e^(-λt)",
                    "λ = decay constant (s⁻¹)",
                    "Exponential decrease with time",
                    "N₀ = initial number of nuclei"
                ],
                resources: []
            },
            { 
                id: "3.8.1.3c", 
                title: "Activity", 
                prompt: "Can you define activity (A) and the decay constant (λ)? Can you use the equation A = λN?",
                learningObjectives: [
                    "Define activity",
                    "Define decay constant",
                    "Apply A = λN",
                    "Understand activity units"
                ],
                examples: [
                    "A = rate of decay (disintegrations/second)",
                    "Units: Becquerels (Bq) = s⁻¹",
                    "A = λN = λN₀e^(-λt)",
                    "Activity decreases exponentially"
                ],
                resources: []
            },
            { 
                id: "3.8.1.3d", 
                title: "Half-life", 
                prompt: "Can you define half-life (T½) and use the relationship T½ = ln(2)/λ to solve problems?",
                learningObjectives: [
                    "Define half-life",
                    "Apply T½ = ln(2)/λ",
                    "Use half-life in calculations",
                    "Understand practical significance"
                ],
                examples: [
                    "T½ = time for half to decay",
                    "T½ = ln(2)/λ ≈ 0.693/λ",
                    "Independent of initial amount",
                    "Characteristic of each isotope"
                ],
                resources: []
            }
        ]
    },
    nuclear_structure_energy: {
        title: "3.8.1b Nuclear Structure & Energy",
        paper: "Paper 2",
        icon: "shield",
        topics: [
            { 
                id: "3.8.1.4a", 
                title: "Nuclear stability", 
                prompt: "Can you interpret the N-Z graph of stable nuclei and explain the shape of the curve in terms of the forces acting within the nucleus?",
                learningObjectives: [
                    "Interpret N-Z graph",
                    "Understand stability curve",
                    "Explain curve shape",
                    "Relate to nuclear forces"
                ],
                examples: [
                    "N = Z for light nuclei",
                    "N > Z for heavy nuclei",
                    "Curve due to Coulomb repulsion",
                    "Strong force range limitation"
                ],
                resources: []
            },
            { 
                id: "3.8.1.4b", 
                title: "Decay modes", 
                prompt: "Can you use the N-Z graph to predict the likely decay mode (α, β⁻, β⁺, or electron capture) for an unstable nucleus?",
                learningObjectives: [
                    "Predict decay modes from N-Z graph",
                    "Understand alpha decay region",
                    "Understand beta decay regions",
                    "Apply to specific nuclei"
                ],
                examples: [
                    "Above curve: β⁻ decay (n → p)",
                    "Below curve: β⁺ decay or electron capture",
                    "Heavy nuclei: α decay",
                    "Move toward stability curve"
                ],
                resources: []
            },
            { 
                id: "3.8.1.5a", 
                title: "Nuclear radius", 
                prompt: "Can you use the empirical formula R = R₀A^(1/3) to estimate the radius of a nucleus?",
                learningObjectives: [
                    "Apply R = R₀A^(1/3)",
                    "Understand mass number dependence",
                    "Calculate nuclear radii",
                    "Compare with atomic radii"
                ],
                examples: [
                    "R = R₀A^(1/3)",
                    "R₀ ≈ 1.2 fm",
                    "Radius ∝ cube root of mass number",
                    "Much smaller than atomic radius"
                ],
                resources: []
            },
            { 
                id: "3.8.1.5b", 
                title: "Nuclear density", 
                prompt: "Can you show from the nuclear radius formula that the density of nuclear matter is approximately constant for all nuclei?",
                learningObjectives: [
                    "Calculate nuclear density",
                    "Show density constancy",
                    "Understand nuclear matter properties",
                    "Compare with normal matter"
                ],
                examples: [
                    "Volume ∝ R³ ∝ A",
                    "Mass ∝ A",
                    "Density = mass/volume ∝ A/A = constant",
                    "ρ ≈ 2×10¹⁷ kg/m³"
                ],
                resources: []
            },
            { 
                id: "3.8.1.6a", 
                title: "Mass-energy equivalence", 
                prompt: "Can you state and apply Einstein's mass-energy equivalence principle, E = mc²? Can you perform calculations using atomic mass units (u) and MeV?",
                learningObjectives: [
                    "Apply E = mc²",
                    "Convert between mass and energy",
                    "Use atomic mass units",
                    "Calculate in MeV"
                ],
                examples: [
                    "E = mc²",
                    "1 u = 931.5 MeV/c²",
                    "Mass defect → binding energy",
                    "Basis of nuclear power"
                ],
                resources: []
            },
            { 
                id: "3.8.1.6b", 
                title: "Binding energy", 
                prompt: "Can you define mass defect and binding energy? Can you calculate the binding energy and binding energy per nucleon for a given nucleus?",
                learningObjectives: [
                    "Define mass defect",
                    "Define binding energy",
                    "Calculate binding energy",
                    "Calculate binding energy per nucleon"
                ],
                examples: [
                    "Mass defect = (separate masses) - (nucleus mass)",
                    "Binding energy = mass defect × c²",
                    "Energy to separate nucleus",
                    "BE per nucleon = total BE / A"
                ],
                resources: []
            },
            { 
                id: "3.8.1.6c", 
                title: "Fission and fusion", 
                prompt: "Do you understand the concept of binding energy per nucleon and how it relates to energy release in nuclear fission and fusion? Can you interpret the binding energy per nucleon curve?",
                learningObjectives: [
                    "Understand BE per nucleon curve",
                    "Explain fission energy release",
                    "Explain fusion energy release",
                    "Identify most stable nuclei"
                ],
                examples: [
                    "Peak at Fe-56 (most stable)",
                    "Fission: heavy → medium nuclei",
                    "Fusion: light → medium nuclei",
                    "Both increase BE per nucleon"
                ],
                resources: []
            }
        ]
    },
    nuclear_applications_safety: {
        title: "3.8.1c Nuclear Applications & Safety",
        paper: "Paper 2",
        icon: "shield",
        topics: [
            { 
                id: "3.8.1.7a", 
                title: "Chain reactions", 
                prompt: "Can you explain the concept of a nuclear chain reaction? What is meant by critical mass, and how are control rods and a moderator used to control the reaction in a nuclear reactor?",
                learningObjectives: [
                    "Explain chain reaction concept",
                    "Define critical mass",
                    "Understand control rod function",
                    "Understand moderator function"
                ],
                examples: [
                    "One fission triggers more fissions",
                    "Critical mass: self-sustaining reaction",
                    "Control rods: absorb neutrons",
                    "Moderator: slows down neutrons"
                ],
                resources: []
            },
            { 
                id: "3.8.1.8a", 
                title: "Safety aspects", 
                prompt: "Can you describe the main safety features of a nuclear reactor and the procedures for handling and storing radioactive waste safely?",
                learningObjectives: [
                    "Describe reactor safety features",
                    "Explain containment systems",
                    "Understand waste handling",
                    "Apply safety principles"
                ],
                examples: [
                    "Containment building",
                    "Emergency cooling systems",
                    "Waste storage in lead containers",
                    "Remote handling procedures"
                ],
                resources: []
            }
        ]
    }
};
