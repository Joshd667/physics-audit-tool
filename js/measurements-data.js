// js/measurements-data.js
export const measurementsData = {
    measurements_errors: {
        title: "3.1a Measurements and their errors",
        paper: "Paper 1",
        icon: "settings",
        topics: [
            { 
                id: "3.1.1a", 
                title: "Fundamental (base) units", 
                prompt: "Can you recall and state the 7 fundamental SI units and their corresponding quantities (mass - kg, length - m, time - s, current - A, temperature - K, amount of substance - mol)? Can you distinguish them from derived units?",
                learningObjectives: [
                    "State the 7 fundamental SI units",
                    "Match each unit to its corresponding quantity", 
                    "Distinguish fundamental from derived units",
                    "Recognize that all other units are combinations of these 7"
                ],
                examples: [
                    "Mass (kg), Length (m), Time (s), Current (A)",
                    "Temperature (K), Amount of substance (mol), Luminous intensity (cd)",
                    "Derived units: N = kg⋅m⋅s⁻², J = kg⋅m²⋅s⁻²"
                ],
                resources: []
            },
            { 
                id: "3.1.1b", 
                title: "SI prefixes and standard form", 
                prompt: "Are you confident in using and converting between SI prefixes, from tera (T) to femto (f)? Can you express quantities in standard form (e.g., A × 10ⁿ) and convert between different units, such as Joules (J) and electronvolts (eV)?",
                learningObjectives: [
                    "Use SI prefixes from tera (T) to femto (f)",
                    "Express quantities in standard form (A × 10ⁿ)",
                    "Convert between different units",
                    "Handle unit conversions in calculations"
                ],
                examples: [
                    "1 TJ = 10¹² J, 1 GW = 10⁹ W",
                    "1 nm = 10⁻⁹ m, 1 fm = 10⁻¹⁵ m",
                    "1 eV = 1.6 × 10⁻¹⁹ J",
                    "3.2 × 10⁸ m/s = 320 Mm/s"
                ],
                resources: [
                    { title: "SI Base Units Video", url: "https://example.com/video" },
                    { title: "Unit Converter Tool", url: "https://example.com/converter" }
                ]
            },
            { 
                id: "3.1.2a", 
                title: "Random and systematic errors", 
                prompt: "Can you define and differentiate between random errors (unpredictable variations) and systematic errors (consistent offsets)? Can you suggest practical methods to reduce the impact of each type in an experiment?",
                learningObjectives: [
                    "Define random errors and their characteristics",
                    "Define systematic errors and their characteristics",
                    "Suggest methods to reduce random errors",
                    "Suggest methods to reduce systematic errors"
                ],
                examples: [
                    "Random: Reading fluctuations in a digital voltmeter",
                    "Systematic: Zero error in a measuring instrument",
                    "Random reduction: Take multiple readings and average",
                    "Systematic reduction: Calibrate instruments, check zero errors"
                ],
                resources: []
            },
            { 
                id: "3.1.2b", 
                title: "Precision, accuracy, resolution", 
                prompt: "Can you clearly explain the distinction between precision (consistency of results), accuracy (closeness to the true value), and resolution (the smallest change a measuring instrument can detect)?",
                learningObjectives: [
                    "Define precision in terms of consistency",
                    "Define accuracy in terms of closeness to true value",
                    "Define resolution of measuring instruments",
                    "Distinguish between these three concepts"
                ],
                examples: [
                    "High precision, low accuracy: Consistently wrong readings",
                    "High accuracy, low precision: Correct average, scattered readings",
                    "Resolution: Digital balance reads to 0.01g",
                    "Stopwatch resolution: 0.01s"
                ],
                resources: []
            },
            { 
                id: "3.1.2c", 
                title: "Absolute and percentage uncertainties", 
                prompt: "Can you calculate absolute, fractional, and percentage uncertainties from a set of repeated measurements? For example, can you find the uncertainty in a mean value?",
                learningObjectives: [
                    "Calculate absolute uncertainty from repeated measurements",
                    "Calculate fractional uncertainty",
                    "Calculate percentage uncertainty",
                    "Find uncertainty in mean values"
                ],
                examples: [
                    "Absolute: ±0.05 m",
                    "Fractional: 0.05/2.34 = 0.021",
                    "Percentage: 0.021 × 100% = 2.1%",
                    "Mean uncertainty: range/2 or standard deviation"
                ],
                resources: []
            },
            { 
                id: "3.1.2d", 
                title: "Combining uncertainties", 
                prompt: "Do you know the rules for combining uncertainties? Can you correctly calculate the uncertainty in a final result when quantities are added, subtracted, multiplied, divided, or raised to a power?",
                learningObjectives: [
                    "Apply rules for addition/subtraction of uncertainties",
                    "Apply rules for multiplication/division of uncertainties",
                    "Handle uncertainties in powers and roots",
                    "Calculate final uncertainty in complex calculations"
                ],
                examples: [
                    "Addition/subtraction: add absolute uncertainties",
                    "Multiplication/division: add fractional uncertainties",
                    "Powers: multiply fractional uncertainty by power",
                    "y = x²: fractional uncertainty doubles"
                ],
                resources: []
            },
            { 
                id: "3.1.2e", 
                title: "Error bars and graph analysis", 
                prompt: "Can you plot error bars on a graph to represent uncertainty? Can you determine the uncertainty in the gradient and y-intercept of a line of best fit by drawing lines of maximum and minimum slope?",
                learningObjectives: [
                    "Plot error bars correctly on graphs",
                    "Draw lines of best fit through error bars",
                    "Determine uncertainty in gradient using max/min lines",
                    "Find uncertainty in y-intercept"
                ],
                examples: [
                    "Error bars show range of possible values",
                    "Best fit line passes through most error bars",
                    "Max/min lines through error bar extremes",
                    "Gradient uncertainty = (max - min)/2"
                ],
                resources: []
            }
        ]
    },
    number_work: {
        title: "3.1b Number Work",
        paper: "Paper 1",
        icon: "settings",
        topics: [
            { 
                id: "3.1.3a", 
                title: "Orders of magnitude", 
                prompt: "Can you estimate physical quantities (like the mass of a car or the height of a building) to the nearest power of 10 (order of magnitude)?",
                learningObjectives: [
                    "Estimate everyday quantities to nearest power of 10",
                    "Use scientific notation for estimates",
                    "Compare orders of magnitude",
                    "Make reasonable approximations"
                ],
                examples: [
                    "Mass of car: ~10³ kg",
                    "Height of building: ~10² m",
                    "Number of atoms in body: ~10²⁸",
                    "Age of universe: ~10¹⁰ years"
                ],
                resources: []
            },
            { 
                id: "3.1.3b", 
                title: "Estimation calculations", 
                prompt: "Can you use your estimations of physical quantities to perform further calculations and derive other estimates, checking the reasonableness of your results?",
                learningObjectives: [
                    "Use estimated values in calculations",
                    "Check reasonableness of results",
                    "Make sensible approximations",
                    "Validate answers against known values"
                ],
                examples: [
                    "Estimate power consumption of household",
                    "Calculate energy in petrol tank",
                    "Estimate number of heartbeats in lifetime",
                    "Check if answer makes physical sense"
                ],
                resources: []
            }
        ]
    }
};
