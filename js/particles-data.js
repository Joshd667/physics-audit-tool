// js/particles-data.js
export const particlesData = {
    particles_structure: {
        title: "3.2.1 Atomic Structure & Particles",
        paper: "Paper 1",
        icon: "atom",
        topics: [
            { id: "3.2.1.1a", title: "Proton, neutron, electron properties", prompt: "Can you state the relative mass and charge of protons, neutrons, and electrons? Do you know their values in SI units (kg and C)?" },
            { id: "3.2.1.1b", title: "Specific charge calculations", prompt: "Can you calculate the specific charge (charge-to-mass ratio, Q/m) for fundamental particles, ions, and atomic nuclei?" },
            { id: "3.2.1.1c", title: "Nuclide notation and isotopes", prompt: "Can you interpret and use the ᴬ𝑍X notation to determine the number of protons and neutrons in a nucleus? Can you define an isotope?" },
            { id: "3.2.1.2a", title: "Strong nuclear force", prompt: "Can you describe the properties of the strong nuclear force, including its short range of action (attractive from ~3 fm to 0.5 fm, repulsive below 0.5 fm) and its role in holding the nucleus together?" },
            { id: "3.2.1.2b", title: "Alpha decay equations", prompt: "Can you write and balance nuclear equations for alpha (α) decay, showing the changes in proton and nucleon numbers?" },
            { id: "3.2.1.2c", title: "Beta decay and neutrinos", prompt: "Can you write and balance nuclear equations for beta-minus (β⁻) decay? Can you explain why the existence of the neutrino was hypothesised?" },
            { id: "3.2.1.3a", title: "Antiparticles", prompt: "For every particle, there's an antiparticle with the same mass but opposite charge. Can you name the antiparticles for the electron, proton, neutron, and neutrino?" },
            { id: "3.2.1.3b", title: "Photon energy equations", prompt: "Can you use the photon energy equations, E = hf and E = hc/λ, to calculate the energy, frequency, or wavelength of a photon? This includes understanding the constants h and c." },
            { id: "3.2.1.3c", title: "Annihilation and pair production", prompt: "Can you describe the processes of pair production (a photon creating a particle-antiparticle pair) and annihilation (a particle and antiparticle meeting to produce photons)? Can you calculate the minimum photon energy for pair production?" }
        ]
    },
    particle_physics: {
        title: "3.2.1 Particle Physics & Interactions",
        paper: "Paper 1",
        icon: "atom",
        topics: [
            { id: "3.2.1.4a", title: "Four fundamental interactions", prompt: "Can you name the four fundamental interactions (gravity, electromagnetic, weak nuclear, strong nuclear) and state their relative strengths and ranges?" },
            { id: "3.2.1.4b", title: "Exchange particles", prompt: "Do you understand the concept of exchange particles (gauge bosons) mediating forces? Can you name the exchange particles for the strong and weak nuclear forces and the electromagnetic force (gluons, W/Z bosons, virtual photons)?" },
            { id: "3.2.1.4c", title: "Feynman diagrams", prompt: "Can you draw and interpret simple Feynman diagrams representing particle interactions, such as electron-electron scattering or beta decay?" },
            { id: "3.2.1.5a", title: "Hadrons vs Leptons", prompt: "Can you classify particles into the two main groups: hadrons (which feel the strong force, e.g., protons, neutrons) and leptons (which do not, e.g., electrons, neutrinos)?" },
            { id: "3.2.1.5b", title: "Baryons and mesons", prompt: "Can you further classify hadrons into baryons (made of 3 quarks, e.g., protons) and mesons (made of a quark-antiquark pair, e.g., pions)?" },
            { id: "3.2.1.5c", title: "Baryon number conservation", prompt: "Can you define baryon number and apply its conservation to determine if a particle interaction is possible?" },
            { id: "3.2.1.5d", title: "Lepton number conservation", prompt: "Can you define the three types of lepton number (electron, muon, tau) and apply their conservation to analyze particle interactions?" },
            { id: "3.2.1.5e", title: "Strange particles", prompt: "Do you understand the concept of strangeness for particles containing strange quarks? Can you explain why strange particles are created in pairs via the strong interaction but decay via the weak interaction?" },
            { id: "3.2.1.6a", title: "Quark properties", prompt: "Can you state the charge, baryon number, and strangeness of up, down, and strange quarks and their antiquarks?" },
            { id: "3.2.1.6b", title: "Quark combinations", prompt: "Can you determine the quark composition of protons, neutrons, and various types of pions and kaons?" },
            { id: "3.2.1.7a", title: "Conservation law applications", prompt: "Can you apply all the conservation laws (charge, baryon number, lepton numbers, strangeness) together to predict whether a proposed particle interaction or decay can occur?" }
        ]
    },
    quantum_phenomena: {
        title: "3.2.2 Quantum Phenomena",
        paper: "Paper 1",
        icon: "zap",
        topics: [
            { id: "3.2.2.1a", title: "Threshold frequency", prompt: "Can you explain the photoelectric effect and why there is a minimum 'threshold' frequency of incident light required to eject electrons from a metal surface, a key piece of evidence for the particle nature of light?" },
            { id: "3.2.2.1b", title: "Work function and stopping potential", prompt: "Can you define the work function (φ) as the minimum energy required to remove an electron from a surface? Can you explain how a 'stopping potential' can be used to measure the maximum kinetic energy of the photoelectrons?" },
            { id: "3.2.2.1c", title: "Photoelectric equation", prompt: "Can you use Einstein's photoelectric equation, hf = φ + Eₖ(max), to solve problems involving photon energy, work function, and the maximum kinetic energy of photoelectrons?" },
            { id: "3.2.2.2a", title: "Ionisation and excitation", prompt: "Can you describe how electrons in an atom can be moved to higher energy levels (excitation) or removed completely (ionisation) by absorbing energy from a photon or a colliding electron?" },
            { id: "3.2.2.2b", title: "Electron volt conversions", prompt: "Are you confident in converting energy values between Joules (J) and electronvolts (eV), and do you know when it is appropriate to use each unit?" },
            { id: "3.2.2.3a", title: "Line spectra", prompt: "Can you explain how emission and absorption line spectra are produced? How do they provide evidence for the existence of discrete, quantized energy levels within atoms?" },
            { id: "3.2.2.3b", title: "Energy level transitions", prompt: "Can you use the relationship hf = E₁ - E₂ to calculate the frequency or wavelength of the photon emitted or absorbed when an electron transitions between two energy levels?" },
            { id: "3.2.2.4a", title: "de Broglie wavelength", prompt: "Can you describe the concept of wave-particle duality and use the de Broglie equation, λ = h/p = h/mv, to calculate the wavelength of a particle like an electron?" },
            { id: "3.2.2.4b", title: "Electron diffraction", prompt: "Can you describe the experimental evidence for the wave nature of electrons, such as the diffraction patterns observed when electrons are passed through a thin graphite crystal?" }
        ]
    }
};
