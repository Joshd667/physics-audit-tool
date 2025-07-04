// js/particles-data.js
export const particlesData = {
    atomic_structure: {
        title: "3.2.1 Atomic Structure & Particles",
        paper: "Paper 1",
        icon: "atom",
        topics: [
            { 
                id: "3.2.1.1a", 
                title: "Proton, neutron, electron properties", 
                prompt: "Can you state the relative mass and charge of protons, neutrons, and electrons? Do you know their values in SI units (kg and C)?",
                learningObjectives: [
                    "State relative masses of proton, neutron, electron",
                    "State relative charges of proton, neutron, electron",
                    "Know actual masses in kg",
                    "Know actual charges in Coulombs"
                ],
                examples: [
                    "Proton: mass ≈ 1u, charge = +1e = +1.6×10⁻¹⁹ C",
                    "Neutron: mass ≈ 1u, charge = 0",
                    "Electron: mass ≈ 1/1836 u, charge = -1e = -1.6×10⁻¹⁹ C",
                    "1u = 1.66×10⁻²⁷ kg"
                ],
                resources: []
            },
            { 
                id: "3.2.1.1b", 
                title: "Specific charge calculations", 
                prompt: "Can you calculate the specific charge (charge-to-mass ratio, Q/m) for fundamental particles, ions, and atomic nuclei?",
                learningObjectives: [
                    "Define specific charge (Q/m)",
                    "Calculate specific charge for electrons",
                    "Calculate specific charge for protons",
                    "Calculate specific charge for ions and nuclei"
                ],
                examples: [
                    "Electron: e/mₑ = 1.76×10¹¹ C/kg",
                    "Proton: e/mₚ = 9.58×10⁷ C/kg",
                    "Alpha particle: 2e/4u = 4.8×10⁷ C/kg",
                    "Ion: depends on charge and mass"
                ],
                resources: []
            },
            { 
                id: "3.2.1.1c", 
                title: "Nuclide notation and isotopes", 
                prompt: "Can you interpret and use the ᴬ𝑍X notation to determine the number of protons and neutrons in a nucleus? Can you define an isotope?",
                learningObjectives: [
                    "Interpret nuclide notation ᴬ𝑍X",
                    "Find number of protons from Z",
                    "Find number of neutrons from A-Z",
                    "Define isotopes and give examples"
                ],
                examples: [
                    "¹²₆C: 6 protons, 6 neutrons",
                    "¹⁴₆C: 6 protons, 8 neutrons",
                    "Isotopes: same Z, different A",
                    "Carbon-12 and Carbon-14 are isotopes"
                ],
                resources: []
            },
            { 
                id: "3.2.1.2a", 
                title: "Strong nuclear force", 
                prompt: "Can you describe the properties of the strong nuclear force, including its short range of action (attractive from ~3 fm to 0.5 fm, repulsive below 0.5 fm) and its role in holding the nucleus together?",
                learningObjectives: [
                    "Describe range of strong nuclear force",
                    "Explain attractive nature at 0.5-3 fm",
                    "Explain repulsive nature below 0.5 fm",
                    "Relate to nuclear stability"
                ],
                examples: [
                    "Range: ~3 fm (3×10⁻¹⁵ m)",
                    "Attractive: 0.5-3 fm separation",
                    "Repulsive: <0.5 fm separation",
                    "Overcomes electrostatic repulsion in nucleus"
                ],
                resources: []
            },
            { 
                id: "3.2.1.2b", 
                title: "Alpha decay equations", 
                prompt: "Can you write and balance nuclear equations for alpha (α) decay, showing the changes in proton and nucleon numbers?",
                learningObjectives: [
                    "Write alpha decay equations",
                    "Balance mass numbers (A)",
                    "Balance atomic numbers (Z)",
                    "Identify daughter nuclei"
                ],
                examples: [
                    "²³⁸U → ²³⁴Th + ⁴He (α)",
                    "²²⁶Ra → ²²²Rn + ⁴He",
                    "Mass number decreases by 4",
                    "Atomic number decreases by 2"
                ],
                resources: []
            },
            { 
                id: "3.2.1.2c", 
                title: "Beta decay and neutrinos", 
                prompt: "Can you write and balance nuclear equations for beta-minus (β⁻) decay? Can you explain why the existence of the neutrino was hypothesised?",
                learningObjectives: [
                    "Write beta-minus decay equations",
                    "Balance nuclear equations for β⁻ decay",
                    "Explain neutrino hypothesis",
                    "Relate to energy and momentum conservation"
                ],
                examples: [
                    "¹⁴C → ¹⁴N + e⁻ + ν̄ₑ",
                    "n → p + e⁻ + ν̄ₑ",
                    "Mass number unchanged",
                    "Atomic number increases by 1"
                ],
                resources: []
            },
            { 
                id: "3.2.1.3a", 
                title: "Antiparticles", 
                prompt: "For every particle, there's an antiparticle with the same mass but opposite charge. Can you name the antiparticles for the electron, proton, neutron, and neutrino?",
                learningObjectives: [
                    "Define antiparticles",
                    "Name antiparticles for fundamental particles",
                    "Compare properties of particles and antiparticles",
                    "Understand matter-antimatter symmetry"
                ],
                examples: [
                    "Electron → positron (e⁺)",
                    "Proton → antiproton (p̄)",
                    "Neutron → antineutron (n̄)",
                    "Neutrino → antineutrino (ν̄)"
                ],
                resources: []
            },
            { 
                id: "3.2.1.3b", 
                title: "Photon energy equations", 
                prompt: "Can you use the photon energy equations, E = hf and E = hc/λ, to calculate the energy, frequency, or wavelength of a photon? This includes understanding the constants h and c.",
                learningObjectives: [
                    "Use E = hf for photon energy calculations",
                    "Use E = hc/λ for energy-wavelength relations",
                    "Know values of h and c",
                    "Convert between energy, frequency, and wavelength"
                ],
                examples: [
                    "h = 6.63×10⁻³⁴ J⋅s (Planck's constant)",
                    "c = 3.00×10⁸ m/s (speed of light)",
                    "Red light: λ = 700 nm, E = 1.8 eV",
                    "X-rays: higher energy, shorter wavelength"
                ],
                resources: []
            },
            { 
                id: "3.2.1.3c", 
                title: "Annihilation and pair production", 
                prompt: "Can you describe the processes of pair production (a photon creating a particle-antiparticle pair) and annihilation (a particle and antiparticle meeting to produce photons)? Can you calculate the minimum photon energy for pair production?",
                learningObjectives: [
                    "Describe pair production process",
                    "Describe annihilation process",
                    "Calculate minimum energy for pair production",
                    "Apply conservation of energy and momentum"
                ],
                examples: [
                    "e⁺ + e⁻ → 2γ (annihilation)",
                    "γ → e⁺ + e⁻ (pair production)",
                    "Minimum energy: 2mₑc² = 1.02 MeV",
                    "Usually produces 2 photons for momentum conservation"
                ],
                resources: []
            }
        ]
    },
    particle_interactions: {
        title: "3.2.1 Particle Physics & Interactions",
        paper: "Paper 1",
        icon: "atom",
        topics: [
            { 
                id: "3.2.1.4a", 
                title: "Four fundamental interactions", 
                prompt: "Can you name the four fundamental interactions (gravity, electromagnetic, weak nuclear, strong nuclear) and state their relative strengths and ranges?",
                learningObjectives: [
                    "Name the four fundamental forces",
                    "State relative strengths of forces",
                    "Compare ranges of forces",
                    "Give examples of each force in action"
                ],
                examples: [
                    "Strong: strongest, ~10⁻¹⁵ m range",
                    "Electromagnetic: 10⁻² relative strength, infinite range",
                    "Weak: 10⁻⁶ relative strength, ~10⁻¹⁸ m range",
                    "Gravity: weakest, infinite range"
                ],
                resources: []
            },
            { 
                id: "3.2.1.4b", 
                title: "Exchange particles", 
                prompt: "Do you understand the concept of exchange particles (gauge bosons) mediating forces? Can you name the exchange particles for the strong and weak nuclear forces and the electromagnetic force (gluons, W/Z bosons, virtual photons)?",
                learningObjectives: [
                    "Understand exchange particle concept",
                    "Name exchange particles for each force",
                    "Explain how forces are mediated",
                    "Distinguish real from virtual particles"
                ],
                examples: [
                    "Strong force: gluons",
                    "Electromagnetic: virtual photons",
                    "Weak force: W⁺, W⁻, Z⁰ bosons",
                    "Gravity: gravitons (theoretical)"
                ],
                resources: []
            },
            { 
                id: "3.2.1.4c", 
                title: "Feynman diagrams", 
                prompt: "Can you draw and interpret simple Feynman diagrams representing particle interactions, such as electron-electron scattering or beta decay?",
                learningObjectives: [
                    "Draw simple Feynman diagrams",
                    "Interpret particle interaction diagrams",
                    "Represent electromagnetic interactions",
                    "Represent weak interactions"
                ],
                examples: [
                    "e⁻ + e⁻ → e⁻ + e⁻ (photon exchange)",
                    "n → p + e⁻ + ν̄ₑ (W⁻ boson)",
                    "Wavy lines: photons",
                    "Straight lines: fermions"
                ],
                resources: []
            },
            { 
                id: "3.2.1.5a", 
                title: "Hadrons vs Leptons", 
                prompt: "Can you classify particles into the two main groups: hadrons (which feel the strong force, e.g., protons, neutrons) and leptons (which do not, e.g., electrons, neutrinos)?",
                learningObjectives: [
                    "Define hadrons and their properties",
                    "Define leptons and their properties",
                    "Classify particles into hadrons/leptons",
                    "Explain strong force interaction"
                ],
                examples: [
                    "Hadrons: protons, neutrons, pions, kaons",
                    "Leptons: electrons, muons, taus, neutrinos",
                    "Hadrons feel strong force",
                    "Leptons don't feel strong force"
                ],
                resources: []
            },
            { 
                id: "3.2.1.5b", 
                title: "Baryons and mesons", 
                prompt: "Can you further classify hadrons into baryons (made of 3 quarks, e.g., protons) and mesons (made of a quark-antiquark pair, e.g., pions)?",
                learningObjectives: [
                    "Define baryons and their quark structure",
                    "Define mesons and their quark structure",
                    "Classify hadrons into baryons/mesons",
                    "Give examples of each type"
                ],
                examples: [
                    "Baryons: 3 quarks (p, n, Λ, Σ, Ξ, Ω)",
                    "Mesons: quark-antiquark (π, K, η, ρ)",
                    "Proton: uud quarks",
                    "Pion: ud̄ quarks"
                ],
                resources: []
            },
            { 
                id: "3.2.1.5c", 
                title: "Baryon number conservation", 
                prompt: "Can you define baryon number and apply its conservation to determine if a particle interaction is possible?",
                learningObjectives: [
                    "Define baryon number for particles",
                    "Apply baryon number conservation",
                    "Check if interactions are allowed",
                    "Distinguish baryons from other particles"
                ],
                examples: [
                    "Baryons: B = +1 (p, n, Λ, etc.)",
                    "Antibaryons: B = -1 (p̄, n̄, Λ̄, etc.)",
                    "Mesons and leptons: B = 0",
                    "Total baryon number conserved in interactions"
                ],
                resources: []
            },
            { 
                id: "3.2.1.5d", 
                title: "Lepton number conservation", 
                prompt: "Can you define the three types of lepton number (electron, muon, tau) and apply their conservation to analyze particle interactions?",
                learningObjectives: [
                    "Define electron lepton number (Lₑ)",
                    "Define muon lepton number (Lμ)",
                    "Define tau lepton number (Lτ)",
                    "Apply lepton number conservation"
                ],
                examples: [
                    "e⁻, νₑ: Lₑ = +1; e⁺, ν̄ₑ: Lₑ = -1",
                    "μ⁻, νμ: Lμ = +1; μ⁺, ν̄μ: Lμ = -1",
                    "τ⁻, ντ: Lτ = +1; τ⁺, ν̄τ: Lτ = -1",
                    "Each lepton number conserved separately"
                ],
                resources: []
            },
            { 
                id: "3.2.1.5e", 
                title: "Strange particles", 
                prompt: "Do you understand the concept of strangeness for particles containing strange quarks? Can you explain why strange particles are created in pairs via the strong interaction but decay via the weak interaction?",
                learningObjectives: [
                    "Define strangeness quantum number",
                    "Explain strange particle properties",
                    "Understand pair production of strange particles",
                    "Explain decay via weak interaction"
                ],
                examples: [
                    "Strange quarks: S = -1",
                    "Kaons, Lambda particles contain strange quarks",
                    "Strong interaction: strangeness conserved",
                    "Weak interaction: strangeness can change"
                ],
                resources: []
            },
            { 
                id: "3.2.1.6a", 
                title: "Quark properties", 
                prompt: "Can you state the charge, baryon number, and strangeness of up, down, and strange quarks and their antiquarks?",
                learningObjectives: [
                    "State properties of up quarks",
                    "State properties of down quarks",
                    "State properties of strange quarks",
                    "Compare quarks with antiquarks"
                ],
                examples: [
                    "Up: Q = +2/3, B = +1/3, S = 0",
                    "Down: Q = -1/3, B = +1/3, S = 0",
                    "Strange: Q = -1/3, B = +1/3, S = -1",
                    "Antiquarks: opposite signs"
                ],
                resources: []
            },
            { 
                id: "3.2.1.6b", 
                title: "Quark combinations", 
                prompt: "Can you determine the quark composition of protons, neutrons, and various types of pions and kaons?",
                learningObjectives: [
                    "Determine quark composition of baryons",
                    "Determine quark composition of mesons",
                    "Check charge conservation in combinations",
                    "Verify baryon number conservation"
                ],
                examples: [
                    "Proton: uud (+2/3 -1/3 +2/3 = +1)",
                    "Neutron: udd (+2/3 -1/3 -1/3 = 0)",
                    "π⁺: ud̄, π⁻: ūd, π⁰: uū or dd̄",
                    "K⁺: us̄, K⁻: ūs, K⁰: ds̄"
                ],
                resources: []
            },
            { 
                id: "3.2.1.7a", 
                title: "Conservation law applications", 
                prompt: "Can you apply all the conservation laws (charge, baryon number, lepton numbers, strangeness) together to predict whether a proposed particle interaction or decay can occur?",
                learningObjectives: [
                    "Apply charge conservation",
                    "Apply baryon number conservation",
                    "Apply lepton number conservation",
                    "Apply strangeness conservation rules"
                ],
                examples: [
                    "Check: Q, B, Lₑ, Lμ, Lτ, S before and after",
                    "Strong/EM: all conserved",
                    "Weak: strangeness can change by ±1",
                    "Impossible if any law violated"
                ],
                resources: []
            }
        ]
    },
    quantum_phenomena: {
        title: "3.2.2 Quantum Phenomena",
        paper: "Paper 1",
        icon: "zap",
        topics: [
            { 
                id: "3.2.2.1a", 
                title: "Threshold frequency", 
                prompt: "Can you explain the photoelectric effect and why there is a minimum 'threshold' frequency of incident light required to eject electrons from a metal surface, a key piece of evidence for the particle nature of light?",
                learningObjectives: [
                    "Explain photoelectric effect phenomenon",
                    "Define threshold frequency",
                    "Relate to particle nature of light",
                    "Explain why classical wave theory fails"
                ],
                examples: [
                    "No electrons emitted below threshold frequency",
                    "Immediate emission above threshold",
                    "KE of electrons independent of intensity",
                    "Evidence for photon model of light"
                ],
                resources: []
            },
            { 
                id: "3.2.2.1b", 
                title: "Work function and stopping potential", 
                prompt: "Can you define the work function (φ) as the minimum energy required to remove an electron from a surface? Can you explain how a 'stopping potential' can be used to measure the maximum kinetic energy of the photoelectrons?",
                learningObjectives: [
                    "Define work function",
                    "Explain stopping potential concept",
                    "Relate stopping potential to max KE",
                    "Understand energy threshold"
                ],
                examples: [
                    "Work function: minimum energy to remove electron",
                    "Typical values: 2-6 eV for metals",
                    "Stopping potential: eVₛ = KEₘₐₓ",
                    "Different metals have different work functions"
                ],
                resources: []
            },
            { 
                id: "3.2.2.1c", 
                title: "Photoelectric equation", 
                prompt: "Can you use Einstein's photoelectric equation, hf = φ + Eₖ(max), to solve problems involving photon energy, work function, and the maximum kinetic energy of photoelectrons?",
                learningObjectives: [
                    "Apply Einstein's photoelectric equation",
                    "Calculate photon energy from frequency",
                    "Find maximum kinetic energy",
                    "Solve for threshold frequency"
                ],
                examples: [
                    "hf = φ + KEₘₐₓ",
                    "Threshold: hf₀ = φ",
                    "KEₘₐₓ = hf - φ",
                    "Graph: KEₘₐₓ vs f gives straight line"
                ],
                resources: []
            },
            { 
                id: "3.2.2.2a", 
                title: "Ionisation and excitation", 
                prompt: "Can you describe how electrons in an atom can be moved to higher energy levels (excitation) or removed completely (ionisation) by absorbing energy from a photon or a colliding electron?",
                learningObjectives: [
                    "Define excitation process",
                    "Define ionisation process",
                    "Explain energy requirements",
                    "Compare photon vs electron collisions"
                ],
                examples: [
                    "Excitation: electron moves to higher level",
                    "Ionisation: electron removed completely",
                    "Ionisation energy > excitation energy",
                    "Hydrogen: 13.6 eV ionisation energy"
                ],
                resources: []
            },
            { 
                id: "3.2.2.2b", 
                title: "Electron volt conversions", 
                prompt: "Are you confident in converting energy values between Joules (J) and electronvolts (eV), and do you know when it is appropriate to use each unit?",
                learningObjectives: [
                    "Convert between J and eV",
                    "Know when to use each unit",
                    "Understand eV definition",
                    "Handle calculations in both units"
                ],
                examples: [
                    "1 eV = 1.6 × 10⁻¹⁹ J",
                    "Use eV for atomic/nuclear energies",
                    "Use J for macroscopic energies",
                    "1 keV = 10³ eV, 1 MeV = 10⁶ eV"
                ],
                resources: []
            },
            { 
                id: "3.2.2.3a", 
                title: "Line spectra", 
                prompt: "Can you explain how emission and absorption line spectra are produced? How do they provide evidence for the existence of discrete, quantized energy levels within atoms?",
                learningObjectives: [
                    "Explain emission spectra formation",
                    "Explain absorption spectra formation",
                    "Relate to quantized energy levels",
                    "Compare continuous and line spectra"
                ],
                examples: [
                    "Emission: electron falls, photon emitted",
                    "Absorption: electron jumps up, photon absorbed",
                    "Discrete lines → discrete energy levels",
                    "Each element has unique spectrum"
                ],
                resources: []
            },
            { 
                id: "3.2.2.3b", 
                title: "Energy level transitions", 
                prompt: "Can you use the relationship hf = E₁ - E₂ to calculate the frequency or wavelength of the photon emitted or absorbed when an electron transitions between two energy levels?",
                learningObjectives: [
                    "Apply energy level transition formula",
                    "Calculate photon frequency",
                    "Calculate photon wavelength",
                    "Identify spectral series"
                ],
                examples: [
                    "hf = E₁ - E₂ (energy difference)",
                    "Higher energy → lower energy: emission",
                    "Lower energy → higher energy: absorption",
                    "Hydrogen: Lyman, Balmer, Paschen series"
                ],
                resources: []
            },
            { 
                id: "3.2.2.4a", 
                title: "de Broglie wavelength", 
                prompt: "Can you describe the concept of wave-particle duality and use the de Broglie equation, λ = h/p = h/mv, to calculate the wavelength of a particle like an electron?",
                learningObjectives: [
                    "Explain wave-particle duality",
                    "Apply de Broglie equation",
                    "Calculate particle wavelength",
                    "Understand when wave nature is significant"
                ],
                examples: [
                    "λ = h/p = h/mv",
                    "All particles have wave properties",
                    "Significant for small particles",
                    "Electron at 1 keV: λ ≈ 0.04 nm"
                ],
                resources: []
            },
            { 
                id: "3.2.2.4b", 
                title: "Electron diffraction", 
                prompt: "Can you describe the experimental evidence for the wave nature of electrons, such as the diffraction patterns observed when electrons are passed through a thin graphite crystal?",
                learningObjectives: [
                    "Describe electron diffraction experiments",
                    "Explain diffraction pattern formation",
                    "Relate to wave nature of electrons",
                    "Compare with light diffraction"
                ],
                examples: [
                    "Davisson-Germer experiment",
                    "Electron beam through graphite crystal",
                    "Diffraction rings observed",
                    "Similar to X-ray diffraction patterns"
                ],
                resources: []
            }
        ]
    }
};
