// js/electricity-data.js
export const electricityData = {
    current_voltage: {
        title: "3.5.1a Current & Voltage",
        paper: "Paper 1",
        icon: "zap",
        topics: [
            { 
                id: "3.5.1.1a", 
                title: "Current definition", 
                prompt: "Can you define electric current as the rate of flow of charge? Can you use the equation I = ΔQ/Δt?",
                learningObjectives: [
                    "Define electric current",
                    "Apply I = ΔQ/Δt",
                    "Understand charge flow",
                    "Calculate current in circuits"
                ],
                examples: [
                    "Current = charge flow per unit time",
                    "I = ΔQ/Δt",
                    "Units: Amperes (A) = C/s",
                    "Conventional current: positive charge flow"
                ],
                resources: [
                    { title: "Current Calculator", url: "#" },
                    { title: "Current vs Electron Flow", url: "#" }
                ]
            },
            { 
                id: "3.5.1.1b", 
                title: "Potential difference", 
                prompt: "Can you define potential difference (voltage) as the work done per unit charge? Can you use the equation V = W/Q?",
                learningObjectives: [
                    "Define potential difference",
                    "Apply V = W/Q",
                    "Understand energy per charge",
                    "Relate to electric field"
                ],
                examples: [
                    "PD = work done per unit charge",
                    "V = W/Q",
                    "Units: Volts (V) = J/C",
                    "Driving force for current"
                ],
                resources: [
                    { title: "Voltage Calculator", url: "#" },
                    { title: "Water Circuit Analogy", url: "#" }
                ]
            },
            { 
                id: "3.5.1.1c", 
                title: "Resistance definition", 
                prompt: "Can you define resistance as the ratio of voltage to current? Can you use the equation R = V/I?",
                learningObjectives: [
                    "Define electrical resistance",
                    "Apply Ohm's law R = V/I",
                    "Understand opposition to current",
                    "Calculate resistance values"
                ],
                examples: [
                    "Resistance = voltage/current",
                    "R = V/I",
                    "Units: Ohms (Ω) = V/A",
                    "Opposes current flow"
                ],
                resources: [
                    { title: "Resistance Calculator", url: "#" },
                    { title: "Ohm's Law Problems", url: "#" }
                ]
            },
            { 
                id: "3.5.1.2a", 
                title: "Ohmic conductors", 
                prompt: "Can you describe the I-V characteristic of an ohmic conductor (a straight line through the origin)? Can you state Ohm's law?",
                learningObjectives: [
                    "Describe ohmic conductor behavior",
                    "Interpret I-V characteristics",
                    "State Ohm's law",
                    "Understand constant resistance"
                ],
                examples: [
                    "I-V graph: straight line through origin",
                    "Constant resistance at constant temperature",
                    "Ohm's law: V = IR",
                    "Examples: metal wires, resistors"
                ],
                resources: [
                    { title: "I-V Characteristic Plotter", url: "#" },
                    { title: "Ohmic Materials", url: "#" }
                ]
            },
            { 
                id: "3.5.1.2b", 
                title: "Diode characteristics", 
                prompt: "Can you sketch and explain the I-V characteristic for a semiconductor diode, including the concept of forward bias and reverse bias?",
                learningObjectives: [
                    "Sketch diode I-V characteristic",
                    "Explain forward bias",
                    "Explain reverse bias",
                    "Understand threshold voltage"
                ],
                examples: [
                    "Forward bias: current flows (>0.7V for Si)",
                    "Reverse bias: minimal current",
                    "Exponential I-V relationship",
                    "One-way current flow"
                ],
                resources: [
                    { title: "Diode Characteristic Plotter", url: "#" },
                    { title: "Diode Testing", url: "#" }
                ]
            },
            { 
                id: "3.5.1.2c", 
                title: "Filament lamp characteristics", 
                prompt: "Can you sketch and explain the I-V characteristic for a filament lamp, explaining why its resistance increases as the temperature of the filament increases?",
                learningObjectives: [
                    "Sketch filament lamp I-V characteristic",
                    "Explain temperature effect on resistance",
                    "Understand non-ohmic behavior",
                    "Relate to atomic structure"
                ],
                examples: [
                    "Curved I-V characteristic",
                    "Resistance increases with temperature",
                    "More collisions between electrons and atoms",
                    "Non-ohmic conductor"
                ],
                resources: [
                    { title: "Filament Lamp Demo", url: "#" },
                    { title: "Temperature-Resistance Relationship", url: "#" }
                ]
            }
        ]
    },
    dc_circuits: {
        title: "3.5.1b DC Circuits",
        paper: "Paper 1",
        icon: "zap",
        topics: [
            { 
                id: "3.5.1.3a", 
                title: "Resistivity", 
                prompt: "Can you define resistivity (ρ) and use the formula R = ρL/A to solve problems involving the resistance of a wire?",
                learningObjectives: [
                    "Define resistivity",
                    "Apply R = ρL/A formula",
                    "Understand material property",
                    "Calculate wire resistance"
                ],
                examples: [
                    "ρ = resistivity (material property)",
                    "R = ρL/A",
                    "Units: Ω⋅m",
                    "Depends on material, not dimensions"
                ],
                resources: [
                    { title: "Resistivity Calculator", url: "#" },
                    { title: "Resistivity Values", url: "#" }
                ]
            },
            { 
                id: "3.5.1.3b", 
                title: "Temperature effects", 
                prompt: "Can you describe how the resistance of a metal conductor and a thermistor changes with temperature?",
                learningObjectives: [
                    "Describe metal resistance vs temperature",
                    "Describe thermistor behavior",
                    "Explain physical mechanisms",
                    "Apply to temperature sensing"
                ],
                examples: [
                    "Metals: resistance increases with temperature",
                    "Thermistors: resistance decreases with temperature",
                    "NTC: negative temperature coefficient",
                    "Used in temperature sensors"
                ],
                resources: [
                    { title: "Resistance vs Temperature Graphs", url: "#" },
                    { title: "Temperature Sensing Applications", url: "#" }
                ]
            },
            { 
                id: "3.5.1.3c", 
                title: "Superconductivity", 
                prompt: "Can you describe the phenomenon of superconductivity and define the critical temperature?",
                learningObjectives: [
                    "Define superconductivity",
                    "Explain critical temperature",
                    "Describe zero resistance",
                    "Understand applications"
                ],
                examples: [
                    "Zero electrical resistance below Tc",
                    "Critical temperature varies by material",
                    "Meissner effect: expels magnetic fields",
                    "Applications: MRI, power transmission"
                ],
                resources: [
                    { title: "Superconductor Demonstration", url: "#" },
                    { title: "Superconductor Applications", url: "#" }
                ]
            },
            { 
                id: "3.5.1.4a", 
                title: "Series resistors", 
                prompt: "Can you calculate the total resistance of resistors connected in series using the formula Rₜ = R₁ + R₂ + ...?",
                learningObjectives: [
                    "Apply series resistance formula",
                    "Understand current flow in series",
                    "Calculate total resistance",
                    "Analyze series circuits"
                ],
                examples: [
                    "Rₜ = R₁ + R₂ + R₃ + ...",
                    "Same current through all resistors",
                    "Voltages add up",
                    "Total resistance > largest individual resistance"
                ],
                resources: [
                    { title: "Series Resistance Calculator", url: "#" },
                    { title: "Series Circuit Problems", url: "#" }
                ]
            },
            { 
                id: "3.5.1.4b", 
                title: "Parallel resistors", 
                prompt: "Can you calculate the total resistance of resistors connected in parallel using the formula 1/Rₜ = 1/R₁ + 1/R₂ + ...?",
                learningObjectives: [
                    "Apply parallel resistance formula",
                    "Understand current division",
                    "Calculate total resistance",
                    "Analyze parallel circuits"
                ],
                examples: [
                    "1/Rₜ = 1/R₁ + 1/R₂ + 1/R₃ + ...",
                    "Same voltage across all resistors",
                    "Currents add up",
                    "Total resistance < smallest individual resistance"
                ],
                resources: [
                    { title: "Parallel Resistance Calculator", url: "#" },
                    { title: "Parallel Circuit Problems", url: "#" }
                ]
            },
            { 
                id: "3.5.1.4c", 
                title: "Power equations", 
                prompt: "Can you recall and use the different equations for electrical power: P = IV, P = I²R, and P = V²/R?",
                learningObjectives: [
                    "Apply P = IV",
                    "Apply P = I²R",
                    "Apply P = V²/R",
                    "Choose appropriate formula"
                ],
                examples: [
                    "P = IV (power = current × voltage)",
                    "P = I²R (useful when I and R known)",
                    "P = V²/R (useful when V and R known)",
                    "All equivalent, derived from P = IV"
                ],
                resources: [
                    { title: "Power Calculator", url: "#" },
                    { title: "Electrical Power Problems", url: "#" }
                ]
            },
            { 
                id: "3.5.1.4d", 
                title: "Circuit analysis", 
                prompt: "Can you analyze more complex circuits containing combinations of series and parallel resistors to find the current and voltage across different components?",
                learningObjectives: [
                    "Analyze complex circuits",
                    "Apply series and parallel rules",
                    "Calculate currents and voltages",
                    "Use circuit reduction techniques"
                ],
                examples: [
                    "Identify series and parallel sections",
                    "Calculate equivalent resistances",
                    "Use V = IR for each section",
                    "Work systematically through circuit"
                ],
                resources: [
                    { title: "Circuit Analysis Solver", url: "#" },
                    { title: "Complex Circuit Problems", url: "#" }
                ]
            },
            { 
                id: "3.5.1.5a", 
                title: "Potential divider", 
                prompt: "Can you explain how a potential divider circuit works and use it to calculate output voltages?",
                learningObjectives: [
                    "Explain potential divider principle",
                    "Calculate output voltages",
                    "Apply voltage ratio formula",
                    "Design voltage dividers"
                ],
                examples: [
                    "V₂ = V₁ × (R₂/(R₁ + R₂))",
                    "Voltage divided in ratio of resistances",
                    "Used to obtain fraction of supply voltage",
                    "Input impedance affects loading"
                ],
                resources: [
                    { title: "Potential Divider Calculator", url: "#" },
                    { title: "Voltage Divider Designer", url: "#" }
                ]
            },
            { 
                id: "3.5.1.5b", 
                title: "Sensor circuits", 
                prompt: "Do you understand how a potential divider can be used with components like thermistors and LDRs to create sensor circuits (e.g., for a thermostat or light sensor)?",
                learningObjectives: [
                    "Design sensor circuits",
                    "Use thermistors in potential dividers",
                    "Use LDRs in potential dividers",
                    "Understand sensor operation"
                ],
                examples: [
                    "Thermistor: temperature-dependent voltage",
                    "LDR: light-dependent voltage",
                    "Output voltage changes with sensor resistance",
                    "Used in automatic control systems"
                ],
                resources: [
                    { title: "Sensor Circuit Designer", url: "#" },
                    { title: "Sensor Applications", url: "#" }
                ]
            },
            { 
                id: "3.5.1.6a", 
                title: "EMF vs terminal pd", 
                prompt: "Can you define electromotive force (e.m.f.) as the energy supplied per unit charge by a source? Can you distinguish it from terminal potential difference (p.d.)?",
                learningObjectives: [
                    "Define electromotive force",
                    "Distinguish EMF from terminal PD",
                    "Understand energy per charge",
                    "Relate to battery characteristics"
                ],
                examples: [
                    "EMF: energy per unit charge from source",
                    "Terminal PD: voltage across terminals",
                    "Terminal PD < EMF due to internal resistance",
                    "EMF measured on open circuit"
                ],
                resources: [
                    { title: "EMF vs Terminal PD", url: "#" },
                    { title: "Measuring EMF", url: "#" }
                ]
            },
            { 
                id: "3.5.1.6b", 
                title: "Internal resistance", 
                prompt: "Can you explain the concept of internal resistance and 'lost volts'? Can you use the equation ε = I(R + r) to solve circuit problems?",
                learningObjectives: [
                    "Explain internal resistance concept",
                    "Understand 'lost volts'",
                    "Apply ε = I(R + r)",
                    "Calculate internal resistance"
                ],
                examples: [
                    "Internal resistance: resistance inside battery",
                    "Lost volts: V = Ir (voltage drop inside battery)",
                    "ε = I(R + r) = IR + Ir",
                    "Terminal PD = ε - Ir"
                ],
                resources: [
                    { title: "Internal Resistance Calculator", url: "#" },
                    { title: "Internal Resistance Experiment", url: "#" }
                ]
            }
        ]
    }
};
