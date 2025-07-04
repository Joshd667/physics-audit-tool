// js/fields-data.js
export const fieldsData = {
    gravitational_fields: {
        title: "3.7.2 Gravitational Fields",
        paper: "Paper 2",
        icon: "globe",
        topics: [
            { 
                id: "3.7.2.1a", 
                title: "Newton's law of gravitation", 
                prompt: "Can you state Newton's law of universal gravitation and use the formula F = -Gm₁m₂/r² to calculate the force between two point masses?",
                learningObjectives: [
                    "State Newton's law of universal gravitation",
                    "Apply F = Gm₁m₂/r²",
                    "Understand inverse square relationship",
                    "Calculate gravitational forces"
                ],
                examples: [
                    "F = Gm₁m₂/r²",
                    "G = 6.67×10⁻¹¹ N⋅m²/kg²",
                    "Force proportional to masses",
                    "Force inversely proportional to r²"
                ],
                resources: []
            },
            { 
                id: "3.7.2.2a", 
                title: "Gravitational field strength", 
                prompt: "Can you define gravitational field strength (g) and use the equations g = F/m and g = GM/r² for a radial field?",
                learningObjectives: [
                    "Define gravitational field strength",
                    "Apply g = F/m",
                    "Apply g = GM/r²",
                    "Understand field concept"
                ],
                examples: [
                    "g = gravitational field strength (N/kg)",
                    "g = F/m = GM/r²",
                    "Field strength at Earth's surface ≈ 9.81 N/kg",
                    "Vector quantity pointing toward mass"
                ],
                resources: []
            },
            { 
                id: "3.7.2.2b", 
                title: "Field line representation", 
                prompt: "Can you draw the gravitational field lines for a uniform field and a radial field (e.g., around a planet)?",
                learningObjectives: [
                    "Draw uniform field lines",
                    "Draw radial field lines",
                    "Understand field line properties",
                    "Relate density to field strength"
                ],
                examples: [
                    "Uniform field: parallel, equally spaced lines",
                    "Radial field: lines pointing inward to mass",
                    "Line density ∝ field strength",
                    "Lines never cross"
                ],
                resources: []
            },
            { 
                id: "3.7.2.3a", 
                title: "Gravitational potential", 
                prompt: "Can you define gravitational potential (V) as the work done per unit mass to move an object from infinity to a point in the field? Can you use V = -GM/r?",
                learningObjectives: [
                    "Define gravitational potential",
                    "Apply V = -GM/r",
                    "Understand reference at infinity",
                    "Calculate potential values"
                ],
                examples: [
                    "V = work done per unit mass from ∞",
                    "V = -GM/r",
                    "Always negative (attractive field)",
                    "Zero at infinite distance"
                ],
                resources: []
            },
            { 
                id: "3.7.2.3b", 
                title: "Potential difference", 
                prompt: "Can you calculate the work done (W = mΔV) in moving a mass between two points in a gravitational field?",
                learningObjectives: [
                    "Calculate work done in field",
                    "Apply W = mΔV",
                    "Understand potential difference",
                    "Solve energy problems"
                ],
                examples: [
                    "W = mΔV = m(V₂ - V₁)",
                    "Work against field = positive",
                    "Work with field = negative",
                    "Independent of path taken"
                ],
                resources: []
            },
            { 
                id: "3.7.2.3c", 
                title: "Field-potential relationship", 
                prompt: "Do you understand the relationship between gravitational field strength and potential, g = -ΔV/Δr, and that g is the gradient of the V-r graph?",
                learningObjectives: [
                    "Apply g = -ΔV/Δr",
                    "Understand gradient relationship",
                    "Interpret V-r graphs",
                    "Calculate field from potential"
                ],
                examples: [
                    "g = -ΔV/Δr = -gradient of V-r graph",
                    "Negative gradient → positive field",
                    "Steeper gradient → stronger field",
                    "Field points in direction of decreasing potential"
                ],
                resources: []
            },
            { 
                id: "3.7.2.4a", 
                title: "Orbital motion", 
                prompt: "Can you derive Kepler's third law (T² ∝ r³) by equating the gravitational force with the centripetal force for an orbiting satellite?",
                learningObjectives: [
                    "Derive Kepler's third law",
                    "Equate gravitational and centripetal forces",
                    "Apply to orbital motion",
                    "Understand T² ∝ r³ relationship"
                ],
                examples: [
                    "GMm/r² = mv²/r → GM/r = v²",
                    "v = 2πr/T → GM/r = 4π²r²/T²",
                    "T² = 4π²r³/GM",
                    "T² ∝ r³ (Kepler's third law)"
                ],
                resources: []
            },
            { 
                id: "3.7.2.4b", 
                title: "Satellite energies", 
                prompt: "Can you calculate the orbital speed, kinetic energy, potential energy, and total energy of a satellite in a circular orbit?",
                learningObjectives: [
                    "Calculate orbital speed",
                    "Calculate kinetic energy",
                    "Calculate potential energy",
                    "Calculate total energy"
                ],
                examples: [
                    "v = √(GM/r)",
                    "KE = ½mv² = GMm/2r",
                    "PE = -GMm/r",
                    "Total E = KE + PE = -GMm/2r"
                ],
                resources: []
            },
            { 
                id: "3.7.2.4c", 
                title: "Escape velocity", 
                prompt: "Can you define and calculate the escape velocity of an object from a gravitational field?",
                learningObjectives: [
                    "Define escape velocity",
                    "Derive escape velocity formula",
                    "Calculate escape velocities",
                    "Understand energy requirements"
                ],
                examples: [
                    "Minimum velocity to escape gravitational field",
                    "Total energy = 0 at escape",
                    "v_escape = √(2GM/r)",
                    "Independent of mass of escaping object"
                ],
                resources: []
            },
            { 
                id: "3.7.2.4d", 
                title: "Geostationary orbits", 
                prompt: "Can you describe the properties and uses of geostationary satellites (e.g., orbital period of 24 hours, orbit above the equator)?",
                learningObjectives: [
                    "Describe geostationary orbit properties",
                    "Explain orbital period requirement",
                    "Understand orbital radius",
                    "List applications"
                ],
                examples: [
                    "Orbital period = 24 hours",
                    "Orbit above equator",
                    "Altitude ≈ 36,000 km",
                    "Used for communications, weather"
                ],
                resources: []
            }
        ]
    },
    electric_fields: {
        title: "3.7.3 Electric Fields",
        paper: "Paper 2",
        icon: "zap",
        topics: [
            { 
                id: "3.7.3.1a", 
                title: "Coulomb's law", 
                prompt: "Can you state Coulomb's law and use the formula F = (1/4πε₀)(Q₁Q₂/r²) to calculate the force between two point charges?",
                learningObjectives: [
                    "State Coulomb's law",
                    "Apply F = kQ₁Q₂/r²",
                    "Understand permittivity constant",
                    "Calculate electric forces"
                ],
                examples: [
                    "F = (1/4πε₀)(Q₁Q₂/r²)",
                    "1/4πε₀ = 9.0×10⁹ N⋅m²/C²",
                    "Force along line joining charges",
                    "Like charges repel, unlike attract"
                ],
                resources: []
            },
            { 
                id: "3.7.3.1b", 
                title: "Permittivity", 
                prompt: "Do you understand the role of the permittivity of free space (ε₀) and that air can be treated as a vacuum in calculations?",
                learningObjectives: [
                    "Understand permittivity of free space",
                    "Know ε₀ value",
                    "Understand air ≈ vacuum",
                    "Apply to calculations"
                ],
                examples: [
                    "ε₀ = 8.85×10⁻¹² F/m",
                    "Fundamental constant",
                    "Air permittivity ≈ ε₀",
                    "Related to speed of light: c = 1/√(μ₀ε₀)"
                ],
                resources: []
            },
            { 
                id: "3.7.3.2a", 
                title: "Electric field strength", 
                prompt: "Can you define electric field strength (E) as the force per unit positive charge? Can you use E = F/Q?",
                learningObjectives: [
                    "Define electric field strength",
                    "Apply E = F/Q",
                    "Understand field concept",
                    "Calculate field strengths"
                ],
                examples: [
                    "E = F/Q (force per unit charge)",
                    "Units: N/C or V/m",
                    "Vector quantity",
                    "Direction: force on positive charge"
                ],
                resources: []
            },
            { 
                id: "3.7.3.2b", 
                title: "Uniform fields", 
                prompt: "Can you draw the electric field for a uniform field (e.g., between two parallel plates) and use the formula E = V/d?",
                learningObjectives: [
                    "Draw uniform field lines",
                    "Apply E = V/d",
                    "Understand parallel plate setup",
                    "Calculate field between plates"
                ],
                examples: [
                    "Uniform field: parallel, equally spaced lines",
                    "E = V/d (between parallel plates)",
                    "Field perpendicular to plates",
                    "Used in capacitors"
                ],
                resources: []
            },
            { 
                id: "3.7.3.2c", 
                title: "Radial fields", 
                prompt: "Can you draw the electric field for a radial field (around a point charge) and use the formula E = (1/4πε₀)(Q/r²)?",
                learningObjectives: [
                    "Draw radial field lines",
                    "Apply E = kQ/r²",
                    "Understand inverse square law",
                    "Compare positive and negative charges"
                ],
                examples: [
                    "E = (1/4πε₀)(Q/r²)",
                    "Radial field: lines from/to point charge",
                    "Positive charge: lines outward",
                    "Negative charge: lines inward"
                ],
                resources: []
            },
            { 
                id: "3.7.3.2d", 
                title: "Charged particle motion", 
                prompt: "Can you analyze the trajectory of a charged particle moving through a uniform electric field, similar to projectile motion?",
                learningObjectives: [
                    "Analyze particle motion in uniform field",
                    "Apply F = qE",
                    "Use kinematic equations",
                    "Calculate trajectories"
                ],
                examples: [
                    "F = qE (force on charge)",
                    "a = qE/m (acceleration)",
                    "Parabolic trajectory in uniform field",
                    "Similar to projectile motion"
                ],
                resources: []
            },
            { 
                id: "3.7.3.3a", 
                title: "Electric potential", 
                prompt: "Can you define electric potential (V) and use the formula V = (1/4πε₀)(Q/r) for the potential around a point charge?",
                learningObjectives: [
                    "Define electric potential",
                    "Apply V = kQ/r",
                    "Understand potential reference",
                    "Calculate potentials"
                ],
                examples: [
                    "V = work done per unit charge from ∞",
                    "V = (1/4πε₀)(Q/r)",
                    "Scalar quantity",
                    "Zero at infinite distance"
                ],
                resources: []
            },
            { 
                id: "3.7.3.3b", 
                title: "Potential difference", 
                prompt: "Can you calculate the work done (W = QΔV) when a charge moves between two points in an electric field?",
                learningObjectives: [
                    "Calculate work done in electric field",
                    "Apply W = QΔV",
                    "Understand potential difference",
                    "Solve energy problems"
                ],
                examples: [
                    "W = QΔV = Q(V₂ - V₁)",
                    "Work against field = positive",
                    "Work with field = negative",
                    "Independent of path taken"
                ],
                resources: []
            },
            { 
                id: "3.7.3.3c", 
                title: "Field-potential relationship", 
                prompt: "Do you understand the relationship between electric field strength and potential, E = -ΔV/Δr, and that E is the negative gradient of the V-r graph?",
                learningObjectives: [
                    "Apply E = -ΔV/Δr",
                    "Understand gradient relationship",
                    "Interpret V-r graphs",
                    "Calculate field from potential"
                ],
                examples: [
                    "E = -ΔV/Δr = -gradient of V-r graph",
                    "Negative gradient → positive field",
                    "Steeper gradient → stronger field",
                    "Field points in direction of decreasing potential"
                ],
                resources: []
            }
        ]
    },
    capacitance: {
        title: "3.7.4 Capacitance",
        paper: "Paper 2",
        icon: "zap",
        topics: [
            { 
                id: "3.7.4.1a", 
                title: "Capacitance definition", 
                prompt: "Can you define capacitance as the charge stored per unit potential difference? Can you use the formula C = Q/V?",
                learningObjectives: [
                    "Define capacitance",
                    "Apply C = Q/V",
                    "Understand charge storage",
                    "Calculate capacitance values"
                ],
                examples: [
                    "C = Q/V (charge per unit voltage)",
                    "Units: Farads (F) = C/V",
                    "Measure of charge storage ability",
                    "Independent of Q and V for linear capacitors"
                ],
                resources: []
            },
            { 
                id: "3.7.4.2a", 
                title: "Parallel plate capacitor", 
                prompt: "Can you use the formula C = Aε₀εᵣ/d to calculate the capacitance of a parallel plate capacitor?",
                learningObjectives: [
                    "Apply C = Aε₀εᵣ/d",
                    "Understand area dependence",
                    "Understand separation dependence",
                    "Include dielectric effects"
                ],
                examples: [
                    "C = Aε₀εᵣ/d",
                    "A = plate area, d = separation",
                    "εᵣ = relative permittivity",
                    "Larger area → larger capacitance"
                ],
                resources: []
            },
            { 
                id: "3.7.4.2b", 
                title: "Dielectric action", 
                prompt: "Can you explain how inserting a dielectric material between the plates of a capacitor increases its capacitance?",
                learningObjectives: [
                    "Explain dielectric effect",
                    "Understand polarization",
                    "Calculate capacitance increase",
                    "Compare different dielectrics"
                ],
                examples: [
                    "Dielectric reduces electric field",
                    "Polarization opposes applied field",
                    "C = εᵣC₀ (εᵣ > 1)",
                    "Higher εᵣ → higher capacitance"
                ],
                resources: []
            },
            { 
                id: "3.7.4.3a", 
                title: "Energy stored", 
                prompt: "Can you recall and use the equations for the energy stored by a capacitor: E = ½QV = ½CV² = ½Q²/C? Can you relate this to the area under a Q-V graph?",
                learningObjectives: [
                    "Apply energy equations",
                    "Use E = ½QV = ½CV² = ½Q²/C",
                    "Relate to Q-V graph area",
                    "Calculate stored energy"
                ],
                examples: [
                    "E = ½QV = ½CV² = ½Q²/C",
                    "Energy stored in electric field",
                    "Area under Q-V graph",
                    "Energy density = ½ε₀E²"
                ],
                resources: []
            },
            { 
                id: "3.7.4.4a", 
                title: "Capacitor discharge", 
                prompt: "Can you use the exponential decay equations for charge, voltage, and current (e.g., Q = Q₀e^(-t/RC)) when a capacitor discharges through a resistor?",
                learningObjectives: [
                    "Apply exponential decay equations",
                    "Use Q = Q₀e^(-t/RC)",
                    "Calculate discharge parameters",
                    "Understand RC circuits"
                ],
                examples: [
                    "Q = Q₀e^(-t/RC)",
                    "V = V₀e^(-t/RC)",
                    "I = I₀e^(-t/RC)",
                    "Exponential decay with time constant RC"
                ],
                resources: []
            },
            { 
                id: "3.7.4.4b", 
                title: "Time constant", 
                prompt: "Can you define the time constant (τ = RC) and explain its significance in the charging and discharging of a capacitor?",
                learningObjectives: [
                    "Define time constant",
                    "Understand τ = RC",
                    "Explain physical significance",
                    "Calculate time constants"
                ],
                examples: [
                    "τ = RC (time constant)",
                    "Time to decay to 1/e of initial value",
                    "τ ≈ 37% of initial after one time constant",
                    "Larger RC → slower decay"
                ],
                resources: []
            },
            { 
                id: "3.7.4.4c", 
                title: "Charging equation", 
                prompt: "Can you use the exponential charging equations, such as Q = Q₀(1 - e^(-t/RC)), to analyze a capacitor charging circuit?",
                learningObjectives: [
                    "Apply charging equations",
                    "Use Q = Q₀(1 - e^(-t/RC))",
                    "Analyze charging circuits",
                    "Calculate charging parameters"
                ],
                examples: [
                    "Q = Q₀(1 - e^(-t/RC))",
                    "V = V₀(1 - e^(-t/RC))",
                    "I = I₀e^(-t/RC)",
                    "Exponential approach to final value"
                ],
                resources: []
            }
        ]
    }
};
