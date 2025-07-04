// js/waves-data.js
export const wavesData = {
    waves_properties: {
        title: "3.3.1a Wave Properties",
        paper: "Paper 1",
        icon: "waves",
        topics: [
            { 
                id: "3.3.1.1a", 
                title: "Wave equation c = fλ", 
                prompt: "Can you use the wave speed equation (v = fλ) and the relationship between frequency and period (f = 1/T) to solve problems for various types of waves?",
                learningObjectives: [
                    "Apply wave speed equation v = fλ",
                    "Use frequency-period relationship f = 1/T",
                    "Solve for wave speed, frequency, or wavelength",
                    "Apply to different wave types"
                ],
                examples: [
                    "Sound in air: v = 340 m/s",
                    "Light in vacuum: c = 3×10⁸ m/s",
                    "Radio waves: f = 100 MHz, λ = 3 m",
                    "Period and frequency are reciprocals"
                ],
                resources: []
            },
            { 
                id: "3.3.1.1b", 
                title: "Amplitude and phase", 
                prompt: "Can you define amplitude, wavelength, frequency, and period? Can you explain phase difference in terms of degrees and radians and identify points that are in phase or antiphase?",
                learningObjectives: [
                    "Define amplitude, wavelength, frequency, period",
                    "Explain phase difference concept",
                    "Convert between degrees and radians",
                    "Identify in-phase and antiphase points"
                ],
                examples: [
                    "Amplitude: maximum displacement",
                    "Phase difference: 2π rad = 360°",
                    "In phase: same displacement and direction",
                    "Antiphase: π rad = 180° phase difference"
                ],
                resources: []
            },
            { 
                id: "3.3.1.2a", 
                title: "Transverse vs longitudinal", 
                prompt: "Can you distinguish between transverse waves (oscillations perpendicular to energy transfer) and longitudinal waves (oscillations parallel to energy transfer) and provide examples of each?",
                learningObjectives: [
                    "Define transverse waves",
                    "Define longitudinal waves",
                    "Give examples of each type",
                    "Explain direction of oscillations"
                ],
                examples: [
                    "Transverse: light, water waves, guitar string",
                    "Longitudinal: sound, compression waves",
                    "Transverse: oscillations ⊥ to wave direction",
                    "Longitudinal: oscillations ∥ to wave direction"
                ],
                resources: []
            },
            { 
                id: "3.3.1.2b", 
                title: "Polarisation", 
                prompt: "Can you explain the phenomenon of polarisation? Why can transverse waves be polarised but longitudinal waves cannot? Can you describe applications like polaroid sunglasses?",
                learningObjectives: [
                    "Explain polarisation phenomenon",
                    "Understand why only transverse waves polarise",
                    "Describe polarising filters",
                    "Explain applications of polarisation"
                ],
                examples: [
                    "Polarisation: restricting oscillation direction",
                    "Only transverse waves can be polarised",
                    "Polaroid sunglasses reduce glare",
                    "LCD screens use polarisation"
                ],
                resources: []
            },
            { 
                id: "3.3.1.2c", 
                title: "EM wave properties", 
                prompt: "Do you know that all electromagnetic waves are transverse and travel at the speed of light (c) in a vacuum? Can you recall the order of the EM spectrum?",
                learningObjectives: [
                    "Know EM waves are transverse",
                    "State speed of EM waves in vacuum",
                    "Recall EM spectrum order",
                    "Compare wavelengths and frequencies"
                ],
                examples: [
                    "All EM waves: c = 3×10⁸ m/s in vacuum",
                    "Radio → Micro → IR → Visible → UV → X-ray → γ-ray",
                    "Increasing frequency, decreasing wavelength",
                    "All are transverse waves"
                ],
                resources: []
            }
        ]
    },
    stationary_waves: {
        title: "3.3.1b Stationary Waves",
        paper: "Paper 1",
        icon: "waves",
        topics: [
            { 
                id: "3.3.1.3a", 
                title: "Stationary wave formation", 
                prompt: "Can you explain how a stationary (or standing) wave is formed by the superposition of two progressive waves with the same frequency, travelling in opposite directions?",
                learningObjectives: [
                    "Explain stationary wave formation",
                    "Describe wave superposition",
                    "Understand constructive/destructive interference",
                    "Compare with progressive waves"
                ],
                examples: [
                    "Two waves: same frequency, opposite directions",
                    "Superposition creates stationary pattern",
                    "No energy transfer in stationary waves",
                    "Fixed pattern of nodes and antinodes"
                ],
                resources: []
            },
            { 
                id: "3.3.1.3b", 
                title: "Nodes and antinodes", 
                prompt: "Can you identify and define nodes (points of zero amplitude) and antinodes (points of maximum amplitude) on a stationary wave?",
                learningObjectives: [
                    "Define nodes and antinodes",
                    "Locate nodes and antinodes",
                    "Understand amplitude variation",
                    "Measure distances between nodes"
                ],
                examples: [
                    "Nodes: zero amplitude points",
                    "Antinodes: maximum amplitude points",
                    "Distance between adjacent nodes: λ/2",
                    "Distance between adjacent antinodes: λ/2"
                ],
                resources: []
            },
            { 
                id: "3.3.1.3c", 
                title: "String harmonics", 
                prompt: "Can you describe the different modes of vibration (harmonics) for a stretched string? Can you use the formula f = (1/2L)√(T/μ) to find the frequency of the first harmonic?",
                learningObjectives: [
                    "Describe string harmonics",
                    "Apply string frequency formula",
                    "Calculate fundamental frequency",
                    "Understand harmonic series"
                ],
                examples: [
                    "First harmonic: f₁ = (1/2L)√(T/μ)",
                    "Higher harmonics: f₂ = 2f₁, f₃ = 3f₁",
                    "T = tension, μ = mass per unit length",
                    "Guitar strings: different L, T, μ"
                ],
                resources: []
            }
        ]
    },
    interference_patterns: {
        title: "3.3.2a Interference Patterns",
        paper: "Paper 1",
        icon: "waves",
        topics: [
            { 
                id: "3.3.2.1a", 
                title: "Coherence", 
                prompt: "Can you define coherence in terms of a constant phase difference and the same frequency? Why is it a necessary condition for observable interference?",
                learningObjectives: [
                    "Define coherence",
                    "Explain constant phase difference",
                    "Understand frequency requirement",
                    "Relate to observable interference"
                ],
                examples: [
                    "Coherent: constant phase difference",
                    "Same frequency required",
                    "Laser light is coherent",
                    "Necessary for stable interference patterns"
                ],
                resources: []
            },
            { 
                id: "3.3.2.1b", 
                title: "Young's double slit", 
                prompt: "Can you describe Young's double-slit experiment and explain how the resulting interference pattern of bright and dark fringes is formed by constructive and destructive superposition?",
                learningObjectives: [
                    "Describe Young's double-slit setup",
                    "Explain interference pattern formation",
                    "Understand path difference concept",
                    "Relate to constructive/destructive interference"
                ],
                examples: [
                    "Two coherent sources from single slit",
                    "Path difference creates phase difference",
                    "Constructive: bright fringes",
                    "Destructive: dark fringes"
                ],
                resources: []
            },
            { 
                id: "3.3.2.1c", 
                title: "Fringe spacing formula", 
                prompt: "Can you use the formula w = λD/s to calculate the fringe spacing, wavelength, slit separation, or screen distance in a double-slit experiment?",
                learningObjectives: [
                    "Apply fringe spacing formula w = λD/s",
                    "Calculate fringe spacing",
                    "Find wavelength from measurements",
                    "Determine slit separation"
                ],
                examples: [
                    "w = fringe spacing (m)",
                    "λ = wavelength (m)",
                    "D = distance to screen (m)",
                    "s = slit separation (m)"
                ],
                resources: []
            },
            { 
                id: "3.3.2.1d", 
                title: "White light interference", 
                prompt: "Can you describe the appearance of the interference pattern when using white light, including the central white fringe and the spectra in the outer fringes?",
                learningObjectives: [
                    "Describe white light interference pattern",
                    "Explain central white fringe",
                    "Understand spectral fringes",
                    "Compare with monochromatic light"
                ],
                examples: [
                    "Central fringe: white (all wavelengths in phase)",
                    "Outer fringes: spectral colors",
                    "Different λ → different fringe spacing",
                    "Pattern becomes blurred further out"
                ],
                resources: []
            },
            { 
                id: "3.3.2.2a", 
                title: "Single slit diffraction", 
                prompt: "Can you describe the diffraction pattern produced by a single slit, noting the wide, bright central maximum and the narrower, dimmer subsidiary maxima?",
                learningObjectives: [
                    "Describe single slit diffraction pattern",
                    "Explain central maximum properties",
                    "Understand subsidiary maxima",
                    "Compare intensities"
                ],
                examples: [
                    "Central maximum: width = 2λD/a",
                    "Subsidiary maxima: much dimmer",
                    "Intensity decreases with distance from center",
                    "Narrower slit → wider central maximum"
                ],
                resources: []
            },
            { 
                id: "3.3.2.2b", 
                title: "Diffraction and wavelength", 
                prompt: "Can you explain how the amount of diffraction depends on the ratio of the wavelength to the size of the gap? When is diffraction most significant?",
                learningObjectives: [
                    "Explain diffraction dependence on λ/a ratio",
                    "Understand when diffraction is significant",
                    "Compare different wavelengths",
                    "Relate to everyday observations"
                ],
                examples: [
                    "Significant when λ ≈ gap size",
                    "λ >> gap: little diffraction",
                    "λ << gap: significant diffraction",
                    "Radio waves diffract around buildings"
                ],
                resources: []
            },
            { 
                id: "3.3.2.2c", 
                title: "Diffraction gratings", 
                prompt: "Can you use the diffraction grating equation, d sin(θ) = nλ, to solve problems involving the angle of diffraction, order number, and wavelength?",
                learningObjectives: [
                    "Apply grating equation d sin(θ) = nλ",
                    "Calculate diffraction angles",
                    "Understand order numbers",
                    "Determine wavelengths"
                ],
                examples: [
                    "d = grating spacing (m)",
                    "θ = diffraction angle",
                    "n = order number (0, ±1, ±2, ...)",
                    "Multiple orders create spectrum"
                ],
                resources: []
            }
        ]
    },
    optics: {
        title: "3.3.2b Optics",
        paper: "Paper 1",
        icon: "waves",
        topics: [
            { 
                id: "3.3.2.3a", 
                title: "Refractive index", 
                prompt: "Can you define the absolute refractive index of a medium (n) using the equation n = c/cₛ, where c is the speed of light in a vacuum?",
                learningObjectives: [
                    "Define refractive index",
                    "Apply n = c/cₛ",
                    "Understand physical meaning",
                    "Compare different materials"
                ],
                examples: [
                    "n = c/cₛ (speed ratio)",
                    "n > 1 for all materials",
                    "Water: n ≈ 1.33",
                    "Glass: n ≈ 1.5"
                ],
                resources: []
            },
            { 
                id: "3.3.2.3b", 
                title: "Snell's law", 
                prompt: "Can you apply Snell's law, n₁sin(θ₁) = n₂sin(θ₂), to calculate the angle of refraction or incidence when light passes between two different media?",
                learningObjectives: [
                    "Apply Snell's law",
                    "Calculate refraction angles",
                    "Understand light bending",
                    "Solve refraction problems"
                ],
                examples: [
                    "n₁sin(θ₁) = n₂sin(θ₂)",
                    "Light bends toward normal if n₂ > n₁",
                    "Light bends away from normal if n₂ < n₁",
                    "No bending if θ₁ = 0°"
                ],
                resources: []
            },
            { 
                id: "3.3.2.3c", 
                title: "Total internal reflection", 
                prompt: "Can you explain the phenomenon of total internal reflection (TIR) and calculate the critical angle using the relationship sin(θc) = n₂/n₁?",
                learningObjectives: [
                    "Explain total internal reflection",
                    "Calculate critical angle",
                    "Understand conditions for TIR",
                    "Apply sin(θc) = n₂/n₁"
                ],
                examples: [
                    "TIR occurs when n₁ > n₂",
                    "Critical angle: sin(θc) = n₂/n₁",
                    "Beyond critical angle: total reflection",
                    "No refracted ray in TIR"
                ],
                resources: []
            },
            { 
                id: "3.3.2.3d", 
                title: "Optical fibres", 
                prompt: "Can you describe the structure of an optical fibre (core and cladding) and explain how TIR is used to transmit signals? Can you explain issues like material and modal dispersion?",
                learningObjectives: [
                    "Describe optical fibre structure",
                    "Explain TIR in optical fibres",
                    "Understand signal transmission",
                    "Explain dispersion effects"
                ],
                examples: [
                    "Core: higher refractive index",
                    "Cladding: lower refractive index",
                    "TIR keeps light in core",
                    "Dispersion limits bandwidth"
                ],
                resources: []
            }
        ]
    }
};
