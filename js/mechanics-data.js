// js/mechanics-data.js
export const mechanicsData = {
    vectors_scalars: {
        title: "3.4.1a Vectors & Scalars",
        paper: "Paper 1",
        icon: "target",
        topics: [
            { 
                id: "3.4.1.1a", 
                title: "Scalars vs vectors", 
                prompt: "Can you clearly distinguish between scalar quantities (magnitude only) and vector quantities (magnitude and direction)? Can you provide examples of each (e.g., speed vs velocity)?",
                learningObjectives: [
                    "Define scalar quantities",
                    "Define vector quantities",
                    "Provide examples of each",
                    "Understand the distinction"
                ],
                examples: [
                    "Scalars: mass, time, temperature, energy",
                    "Vectors: displacement, velocity, force, momentum",
                    "Speed (scalar) vs velocity (vector)",
                    "Distance (scalar) vs displacement (vector)"
                ],
                resources: []
            },
            { 
                id: "3.4.1.1b", 
                title: "Vector addition", 
                prompt: "Are you able to add two or more vectors, either by using a scale drawing (tip-to-tail method) or by calculation (e.g., using trigonometry for perpendicular vectors)?",
                learningObjectives: [
                    "Use tip-to-tail method",
                    "Apply trigonometry for perpendicular vectors",
                    "Calculate resultant magnitude and direction",
                    "Resolve vectors into components"
                ],
                examples: [
                    "Tip-to-tail: place vectors end-to-end",
                    "Perpendicular: R = √(A² + B²)",
                    "Angle: tan(θ) = B/A",
                    "Parallelogram law equivalent"
                ],
                resources: []
            },
            { 
                id: "3.4.1.1c", 
                title: "Vector resolution", 
                prompt: "Can you resolve a vector into two perpendicular components? For example, can you find the horizontal and vertical components of a velocity vector at an angle?",
                learningObjectives: [
                    "Resolve vectors into components",
                    "Use trigonometry for resolution",
                    "Apply to force and velocity problems",
                    "Understand component addition"
                ],
                examples: [
                    "Horizontal: Vₓ = V cos(θ)",
                    "Vertical: Vᵧ = V sin(θ)",
                    "Components are perpendicular",
                    "Original vector: V = √(Vₓ² + Vᵧ²)"
                ],
                resources: []
            },
            { 
                id: "3.4.1.1d", 
                title: "Equilibrium conditions", 
                prompt: "For an object in equilibrium, can you state and apply the two conditions: the net force is zero, and the net moment about any point is zero?",
                learningObjectives: [
                    "State conditions for equilibrium",
                    "Apply ΣF = 0 condition",
                    "Apply Σmoments = 0 condition",
                    "Solve equilibrium problems"
                ],
                examples: [
                    "Translational equilibrium: ΣF = 0",
                    "Rotational equilibrium: Σmoments = 0",
                    "Both must be satisfied",
                    "Choose convenient pivot point"
                ],
                resources: []
            }
        ]
    },
    moments: {
        title: "3.4.1b Moments",
        paper: "Paper 1",
        icon: "target",
        topics: [
            { 
                id: "3.4.1.2a", 
                title: "Moment definition", 
                prompt: "Can you define the moment of a force and calculate it using the formula: moment = force × perpendicular distance from the pivot?",
                learningObjectives: [
                    "Define moment of a force",
                    "Calculate moments",
                    "Understand perpendicular distance",
                    "Apply to real situations"
                ],
                examples: [
                    "Moment = Force × perpendicular distance",
                    "Units: N⋅m or J",
                    "Clockwise: negative",
                    "Anticlockwise: positive"
                ],
                resources: []
            },
            { 
                id: "3.4.1.2b", 
                title: "Couples", 
                prompt: "Do you understand what a couple is (a pair of equal and opposite forces not acting along the same line)? Can you calculate the torque of a couple?",
                learningObjectives: [
                    "Define a couple",
                    "Calculate torque of a couple",
                    "Understand couple properties",
                    "Apply to real examples"
                ],
                examples: [
                    "Couple: two equal, opposite, parallel forces",
                    "Torque = Force × perpendicular separation",
                    "Torque independent of pivot point",
                    "Steering wheel creates couples"
                ],
                resources: []
            },
            { 
                id: "3.4.1.2c", 
                title: "Principle of moments", 
                prompt: "Can you state and apply the principle of moments (for equilibrium, the sum of clockwise moments equals the sum of anticlockwise moments) to solve problems with levers and beams?",
                learningObjectives: [
                    "State principle of moments",
                    "Apply to lever problems",
                    "Solve beam equilibrium problems",
                    "Choose appropriate pivot points"
                ],
                examples: [
                    "Σclockwise moments = Σanticlockwise moments",
                    "For equilibrium about any point",
                    "Levers: effort × effort arm = load × load arm",
                    "Choose pivot to eliminate unknown forces"
                ],
                resources: []
            },
            { 
                id: "3.4.1.2d", 
                title: "Centre of mass", 
                prompt: "Can you define the centre of mass of an object? Can you explain how to find the centre of mass of a simple shape experimentally?",
                learningObjectives: [
                    "Define centre of mass",
                    "Understand centre of mass properties",
                    "Explain experimental methods",
                    "Apply to irregular shapes"
                ],
                examples: [
                    "Point where mass appears to be concentrated",
                    "Point of balance for uniform objects",
                    "Experimental: suspend from different points",
                    "Intersection of vertical lines"
                ],
                resources: []
            }
        ]
    },
    motion_kinematics: {
        title: "3.4.1c Motion & Kinematics",
        paper: "Paper 1",
        icon: "target",
        topics: [
            { 
                id: "3.4.1.3a", 
                title: "Kinematic definitions", 
                prompt: "Can you define and distinguish between the key kinematic quantities: displacement, distance, velocity, speed, and acceleration?",
                learningObjectives: [
                    "Define displacement vs distance",
                    "Define velocity vs speed",
                    "Define acceleration",
                    "Understand vector vs scalar nature"
                ],
                examples: [
                    "Displacement: vector from start to end",
                    "Distance: total path length",
                    "Velocity: rate of change of displacement",
                    "Speed: magnitude of velocity"
                ],
                resources: []
            },
            { 
                id: "3.4.1.3b", 
                title: "Motion graphs", 
                prompt: "Can you interpret and draw displacement-time, velocity-time, and acceleration-time graphs? Can you calculate gradient and area under the graph where appropriate (e.g., area under v-t graph is displacement)?",
                learningObjectives: [
                    "Interpret displacement-time graphs",
                    "Interpret velocity-time graphs",
                    "Calculate gradients and areas",
                    "Relate graphs to motion"
                ],
                examples: [
                    "s-t graph: gradient = velocity",
                    "v-t graph: gradient = acceleration",
                    "v-t graph: area = displacement",
                    "Curved lines show changing gradients"
                ],
                resources: []
            },
            { 
                id: "3.4.1.3c", 
                title: "SUVAT equations", 
                prompt: "Can you recall and apply the four equations of motion (SUVAT equations) for objects moving with constant, uniform acceleration?",
                learningObjectives: [
                    "Recall the four SUVAT equations",
                    "Choose appropriate equation for problems",
                    "Apply to constant acceleration problems",
                    "Understand when equations are valid"
                ],
                examples: [
                    "v = u + at",
                    "s = ut + ½at²",
                    "v² = u² + 2as",
                    "s = ½(u + v)t"
                ],
                resources: []
            },
            { 
                id: "3.4.1.3d", 
                title: "Free fall and g", 
                prompt: "Do you understand that the acceleration of free fall (g) is constant for objects near the Earth's surface? Can you apply the SUVAT equations to free-fall problems?",
                learningObjectives: [
                    "Understand constant acceleration g",
                    "Apply SUVAT to free fall",
                    "Handle upward and downward motion",
                    "Consider air resistance effects"
                ],
                examples: [
                    "g = 9.81 m/s² (constant near Earth)",
                    "Downward acceleration always",
                    "Independent of mass (ignoring air resistance)",
                    "Use negative for upward displacement"
                ],
                resources: []
            },
            { 
                id: "3.4.1.4a", 
                title: "Projectile motion", 
                prompt: "Can you analyze the motion of a projectile by considering the horizontal and vertical components of its motion independently? (Horizontal: constant velocity; Vertical: constant acceleration g).",
                learningObjectives: [
                    "Treat horizontal and vertical motion separately",
                    "Apply constant velocity horizontally",
                    "Apply constant acceleration vertically",
                    "Calculate range, maximum height, time of flight"
                ],
                examples: [
                    "Horizontal: vₓ = constant (no acceleration)",
                    "Vertical: vᵧ = u sin(θ) - gt",
                    "Range: R = (u² sin(2θ))/g",
                    "Max height: H = (u² sin²(θ))/(2g)"
                ],
                resources: []
            },
            { 
                id: "3.4.1.4b", 
                title: "Air resistance effects", 
                prompt: "Can you qualitatively describe the effect of air resistance on the trajectory of a projectile, explaining how it affects the horizontal and vertical motion?",
                learningObjectives: [
                    "Explain air resistance effects",
                    "Understand how trajectory changes",
                    "Compare with vacuum motion",
                    "Explain energy losses"
                ],
                examples: [
                    "Reduces horizontal velocity",
                    "Reduces maximum height",
                    "Shorter range than vacuum",
                    "Steeper descent angle"
                ],
                resources: []
            },
            { 
                id: "3.4.1.4c", 
                title: "Terminal velocity", 
                prompt: "Can you explain the concept of terminal velocity for a falling object, describing how the forces of weight and air resistance change as the object accelerates?",
                learningObjectives: [
                    "Explain terminal velocity concept",
                    "Describe force balance",
                    "Understand acceleration changes",
                    "Apply to different objects"
                ],
                examples: [
                    "Terminal velocity: constant velocity when forces balance",
                    "Weight = air resistance at terminal velocity",
                    "Acceleration decreases as speed increases",
                    "Depends on shape, size, and density"
                ],
                resources: []
            }
        ]
    },
    dynamics: {
        title: "3.4.1d Dynamics",
        paper: "Paper 1",
        icon: "target",
        topics: [
            { 
                id: "3.4.1.5a", 
                title: "Newton's first law", 
                prompt: "Can you state Newton's first law of motion (inertia) and apply it to situations where an object is at rest or moving with a constant velocity?",
                learningObjectives: [
                    "State Newton's first law",
                    "Understand inertia concept",
                    "Apply to equilibrium situations",
                    "Identify when first law applies"
                ],
                examples: [
                    "Object at rest stays at rest",
                    "Object in motion stays in motion",
                    "Unless acted upon by unbalanced force",
                    "Applies when net force = 0"
                ],
                resources: []
            },
            { 
                id: "3.4.1.5b", 
                title: "Newton's second law", 
                prompt: "Can you state Newton's second law (F=ma) and use it to solve problems involving resultant force, mass, and acceleration, including situations with multiple forces (e.g., friction, tension)?",
                learningObjectives: [
                    "State Newton's second law",
                    "Apply F = ma in problems",
                    "Calculate resultant forces",
                    "Handle multiple forces"
                ],
                examples: [
                    "F = ma (force = mass × acceleration)",
                    "Net force causes acceleration",
                    "Acceleration proportional to force",
                    "Acceleration inversely proportional to mass"
                ],
                resources: []
            },
            { 
                id: "3.4.1.5c", 
                title: "Newton's third law", 
                prompt: "Can you state Newton's third law and identify action-reaction pairs? Do you understand that these forces are equal and opposite, act on different objects, and are of the same type?",
                learningObjectives: [
                    "State Newton's third law",
                    "Identify action-reaction pairs",
                    "Understand equal and opposite forces",
                    "Know forces act on different objects"
                ],
                examples: [
                    "Every action has equal and opposite reaction",
                    "Forces act on different objects",
                    "Forces are same type (contact, gravitational, etc.)",
                    "Don't cancel as they're on different objects"
                ],
                resources: []
            },
            { 
                id: "3.4.1.6a", 
                title: "Momentum definition", 
                prompt: "Can you define momentum as the product of mass and velocity (p = mv) and recognise that it is a vector quantity?",
                learningObjectives: [
                    "Define momentum",
                    "Understand vector nature",
                    "Calculate momentum",
                    "Relate to Newton's laws"
                ],
                examples: [
                    "p = mv (momentum = mass × velocity)",
                    "Vector quantity (has direction)",
                    "Units: kg⋅m/s or N⋅s",
                    "Related to Newton's second law"
                ],
                resources: []
            },
            { 
                id: "3.4.1.6b", 
                title: "Conservation of momentum", 
                prompt: "Can you state the principle of conservation of linear momentum and apply it to analyze collisions and explosions in one and two dimensions?",
                learningObjectives: [
                    "State conservation of momentum",
                    "Apply to collisions",
                    "Apply to explosions",
                    "Handle vector momentum"
                ],
                examples: [
                    "Total momentum before = total momentum after",
                    "Applies in absence of external forces",
                    "Vector addition of momenta",
                    "Works in all directions"
                ],
                resources: []
            },
            { 
                id: "3.4.1.6c", 
                title: "Impulse", 
                prompt: "Can you define impulse as the change in momentum (Ft = Δ(mv)) and relate it to the area under a force-time graph?",
                learningObjectives: [
                    "Define impulse",
                    "Relate to change in momentum",
                    "Calculate from force-time graphs",
                    "Apply impulse-momentum theorem"
                ],
                examples: [
                    "Impulse = FΔt = Δ(mv)",
                    "Area under F-t graph = impulse",
                    "Units: N⋅s or kg⋅m/s",
                    "Large force for short time = small force for long time"
                ],
                resources: []
            },
            { 
                id: "3.4.1.6d", 
                title: "Elastic vs inelastic collisions", 
                prompt: "Can you distinguish between elastic collisions (kinetic energy is conserved) and inelastic collisions (kinetic energy is not conserved)? Can you solve problems for both types?",
                learningObjectives: [
                    "Define elastic collisions",
                    "Define inelastic collisions",
                    "Apply conservation laws",
                    "Calculate energy losses"
                ],
                examples: [
                    "Elastic: KE conserved, objects separate",
                    "Inelastic: KE not conserved, may stick together",
                    "Momentum always conserved",
                    "Real collisions are usually inelastic"
                ],
                resources: []
            }
        ]
    },
    energy: {
        title: "3.4.1e Energy",
        paper: "Paper 1",
        icon: "target",
        topics: [
            { 
                id: "3.4.1.7a", 
                title: "Work done", 
                prompt: "Can you define work done as the product of force and distance moved in the direction of the force? Can you use the formula W = Fs cos(θ)?",
                learningObjectives: [
                    "Define work done",
                    "Apply W = Fs cos(θ)",
                    "Understand direction importance",
                    "Calculate work in various situations"
                ],
                examples: [
                    "Work = Force × distance in direction of force",
                    "W = Fs cos(θ), θ = angle between F and s",
                    "No work if force perpendicular to motion",
                    "Units: Joules (J) = N⋅m"
                ],
                resources: []
            },
            { 
                id: "3.4.1.7b", 
                title: "Power", 
                prompt: "Can you define power as the rate of doing work or transferring energy? Can you use the equations P = W/t and P = Fv?",
                learningObjectives: [
                    "Define power",
                    "Apply P = W/t",
                    "Apply P = Fv",
                    "Understand energy transfer rate"
                ],
                examples: [
                    "Power = rate of doing work",
                    "P = W/t = energy transferred per second",
                    "P = Fv for constant force",
                    "Units: Watts (W) = J/s"
                ],
                resources: []
            },
            { 
                id: "3.4.1.7c", 
                title: "Efficiency", 
                prompt: "Can you calculate the efficiency of a system using the formula: efficiency = (useful energy output / total energy input) × 100%?",
                learningObjectives: [
                    "Define efficiency",
                    "Calculate efficiency percentage",
                    "Understand energy waste",
                    "Apply to real systems"
                ],
                examples: [
                    "Efficiency = (useful output / total input) × 100%",
                    "Always less than 100% for real systems",
                    "Energy 'lost' as heat, sound, etc.",
                    "Higher efficiency = less waste"
                ],
                resources: []
            },
            { 
                id: "3.4.1.8a", 
                title: "Kinetic energy", 
                prompt: "Can you recall and use the formula for kinetic energy, Eₖ = ½mv²?",
                learningObjectives: [
                    "Apply kinetic energy formula",
                    "Understand dependence on mass and velocity",
                    "Calculate kinetic energy changes",
                    "Relate to work done"
                ],
                examples: [
                    "Eₖ = ½mv²",
                    "Energy of motion",
                    "Depends on v² (speed squared)",
                    "Units: Joules (J)"
                ],
                resources: []
            },
            { 
                id: "3.4.1.8b", 
                title: "Gravitational potential energy", 
                prompt: "Can you recall and use the formula for the change in gravitational potential energy, ΔEₚ = mgΔh, for objects near the Earth's surface?",
                learningObjectives: [
                    "Apply gravitational PE formula",
                    "Understand height dependence",
                    "Calculate energy changes",
                    "Choose reference levels"
                ],
                examples: [
                    "ΔEₚ = mgΔh",
                    "Energy due to position in gravitational field",
                    "Relative to chosen reference level",
                    "Height gained = positive PE"
                ],
                resources: []
            },
            { 
                id: "3.4.1.8c", 
                title: "Conservation of energy", 
                prompt: "Can you apply the principle of conservation of energy to solve problems involving transfers between kinetic energy, potential energy, and work done against resistive forces?",
                learningObjectives: [
                    "Apply conservation of energy",
                    "Handle energy transfers",
                    "Account for resistive forces",
                    "Solve complex energy problems"
                ],
                examples: [
                    "Total energy remains constant",
                    "Energy can be transferred but not destroyed",
                    "Work against resistance = energy 'lost'",
                    "KE + PE + thermal energy = constant"
                ],
                resources: []
            }
        ]
    },
    materials: {
        title: "3.4.2 Materials",
        paper: "Paper 1",
        icon: "settings",
        topics: [
            { 
                id: "3.4.2.1a", 
                title: "Density", 
                prompt: "Can you define density and use the formula ρ = m/V to calculate density, mass, or volume? Can you describe a method to determine the density of a solid or liquid?",
                learningObjectives: [
                    "Define density",
                    "Apply density formula ρ = m/V",
                    "Describe experimental methods",
                    "Handle irregular shapes"
                ],
                examples: [
                    "Density = mass per unit volume",
                    "ρ = m/V",
                    "Units: kg/m³ or g/cm³",
                    "Displacement method for irregular solids"
                ],
                resources: []
            },
            { 
                id: "3.4.2.1b", 
                title: "Hooke's law", 
                prompt: "Can you state Hooke's Law (F = kΔL) and explain the terms force constant (k) and extension (ΔL)? Do you know what the limit of proportionality is?",
                learningObjectives: [
                    "State Hooke's Law",
                    "Define force constant",
                    "Understand proportionality limit",
                    "Apply to springs and wires"
                ],
                examples: [
                    "F = kΔL (force = spring constant × extension)",
                    "k = force constant (N/m)",
                    "Valid only within elastic limit",
                    "Limit of proportionality: F ∝ ΔL breaks down"
                ],
                resources: []
            },
            { 
                id: "3.4.2.1c", 
                title: "Stress and strain", 
                prompt: "Can you define and calculate tensile stress (force per unit area) and tensile strain (extension per unit length)?",
                learningObjectives: [
                    "Define tensile stress",
                    "Define tensile strain",
                    "Calculate stress and strain",
                    "Understand units and dimensions"
                ],
                examples: [
                    "Stress = Force/Area (σ = F/A)",
                    "Strain = Extension/Original length (ε = ΔL/L)",
                    "Stress units: Pa or N/m²",
                    "Strain is dimensionless"
                ],
                resources: []
            },
            { 
                id: "3.4.2.1d", 
                title: "Elastic strain energy", 
                prompt: "Can you calculate the energy stored in a stretched material using E = ½FΔL? Can you relate this to the area under a force-extension graph?",
                learningObjectives: [
                    "Calculate elastic strain energy",
                    "Relate to area under F-ΔL graph",
                    "Apply E = ½FΔL formula",
                    "Understand energy storage"
                ],
                examples: [
                    "E = ½FΔL = ½kΔL² (for springs)",
                    "Area under force-extension graph",
                    "Energy stored elastically",
                    "Released when material returns to original shape"
                ],
                resources: []
            },
            { 
                id: "3.4.2.1e", 
                title: "Material behaviour", 
                prompt: "Can you interpret force-extension and stress-strain graphs to identify and describe elastic and plastic behaviour, and distinguish between brittle and ductile materials?",
                learningObjectives: [
                    "Interpret F-ΔL graphs",
                    "Interpret stress-strain graphs",
                    "Distinguish elastic vs plastic behaviour",
                    "Compare brittle vs ductile materials"
                ],
                examples: [
                    "Elastic: returns to original shape",
                    "Plastic: permanent deformation",
                    "Brittle: breaks without much deformation",
                    "Ductile: stretches significantly before breaking"
                ],
                resources: []
            },
            { 
                id: "3.4.2.2a", 
                title: "Young modulus", 
                prompt: "Can you define the Young modulus as the ratio of stress to strain? Can you use the formula E = (FL)/(AΔL) to solve problems?",
                learningObjectives: [
                    "Define Young modulus",
                    "Apply E = stress/strain",
                    "Use E = (FL)/(AΔL)",
                    "Understand material property"
                ],
                examples: [
                    "E = stress/strain = σ/ε",
                    "E = (FL)/(AΔL)",
                    "Measure of stiffness",
                    "Units: Pa or N/m²"
                ],
                resources: []
            },
            { 
                id: "3.4.2.2b", 
                title: "Stress-strain graphs", 
                prompt: "Can you determine the Young modulus from the gradient of a stress-strain graph? Can you identify the breaking stress and yield point on such a graph?",
                learningObjectives: [
                    "Find Young modulus from graph gradient",
                    "Identify key points on stress-strain graphs",
                    "Understand yield point",
                    "Identify breaking stress"
                ],
                examples: [
                    "Young modulus = gradient of linear region",
                    "Yield point: start of plastic deformation",
                    "Breaking stress: maximum stress before failure",
                    "Different for different materials"
                ],
                resources: []
            }
        ]
    }
};
