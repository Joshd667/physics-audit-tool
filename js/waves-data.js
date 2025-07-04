// js/waves-data.js
export const wavesData = {
    waves_properties: {
        title: "3.3.1a Wave Properties",
        paper: "Paper 1",
        icon: "waves",
        topics: [
            { id: "3.3.1.1a", title: "Wave equation c = fλ", prompt: "Can you use the wave speed equation (v = fλ) and the relationship between frequency and period (f = 1/T) to solve problems for various types of waves?" },
            { id: "3.3.1.1b", title: "Amplitude and phase", prompt: "Can you define amplitude, wavelength, frequency, and period? Can you explain phase difference in terms of degrees and radians and identify points that are in phase or antiphase?" },
            { id: "3.3.1.2a", title: "Transverse vs longitudinal", prompt: "Can you distinguish between transverse waves (oscillations perpendicular to energy transfer) and longitudinal waves (oscillations parallel to energy transfer) and provide examples of each?" },
            { id: "3.3.1.2b", title: "Polarisation", prompt: "Can you explain the phenomenon of polarisation? Why can transverse waves be polarised but longitudinal waves cannot? Can you describe applications like polaroid sunglasses?" },
            { id: "3.3.1.2c", title: "EM wave properties", prompt: "Do you know that all electromagnetic waves are transverse and travel at the speed of light (c) in a vacuum? Can you recall the order of the EM spectrum?" }
        ]
    },
    stationary_waves: {
        title: "3.3.1b Stationary Waves",
        paper: "Paper 1",
        icon: "waves",
        topics: [
            { id: "3.3.1.3a", title: "Stationary wave formation", prompt: "Can you explain how a stationary (or standing) wave is formed by the superposition of two progressive waves with the same frequency, travelling in opposite directions?" },
            { id: "3.3.1.3b", title: "Nodes and antinodes", prompt: "Can you identify and define nodes (points of zero amplitude) and antinodes (points of maximum amplitude) on a stationary wave?" },
            { id: "3.3.1.3c", title: "String harmonics", prompt: "Can you describe the different modes of vibration (harmonics) for a stretched string? Can you use the formula f = (1/2L)√(T/μ) to find the frequency of the first harmonic?" }
        ]
    },
    interference_patterns: {
        title: "3.3.2a Interference Patterns",
        paper: "Paper 1",
        icon: "waves",
        topics: [
            { id: "3.3.2.1a", title: "Coherence", prompt: "Can you define coherence in terms of a constant phase difference and the same frequency? Why is it a necessary condition for observable interference?" },
            { id: "3.3.2.1b", title: "Young's double slit", prompt: "Can you describe Young's double-slit experiment and explain how the resulting interference pattern of bright and dark fringes is formed by constructive and destructive superposition?" },
            { id: "3.3.2.1c", title: "Fringe spacing formula", prompt: "Can you use the formula w = λD/s to calculate the fringe spacing, wavelength, slit separation, or screen distance in a double-slit experiment?" },
            { id: "3.3.2.1d", title: "White light interference", prompt: "Can you describe the appearance of the interference pattern when using white light, including the central white fringe and the spectra in the outer fringes?" },
            { id: "3.3.2.2a", title: "Single slit diffraction", prompt: "Can you describe the diffraction pattern produced by a single slit, noting the wide, bright central maximum and the narrower, dimmer subsidiary maxima?" },
            { id: "3.3.2.2b", title: "Diffraction and wavelength", prompt: "Can you explain how the amount of diffraction depends on the ratio of the wavelength to the size of the gap? When is diffraction most significant?" },
            { id: "3.3.2.2c", title: "Diffraction gratings", prompt: "Can you use the diffraction grating equation, d sin(θ) = nλ, to solve problems involving the angle of diffraction, order number, and wavelength?" }
        ]
    },
    optics: {
        title: "3.3.2b Optics",
        paper: "Paper 1",
        icon: "waves",
        topics: [
            { id: "3.3.2.3a", title: "Refractive index", prompt: "Can you define the absolute refractive index of a medium (n) using the equation n = c/cₛ, where c is the speed of light in a vacuum?" },
            { id: "3.3.2.3b", title: "Snell's law", prompt: "Can you apply Snell's law, n₁sin(θ₁) = n₂sin(θ₂), to calculate the angle of refraction or incidence when light passes between two different media?" },
            { id: "3.3.2.3c", title: "Total internal reflection", prompt: "Can you explain the phenomenon of total internal reflection (TIR) and calculate the critical angle using the relationship sin(θc) = n₂/n₁?" },
            { id: "3.3.2.3d", title: "Optical fibres", prompt: "Can you describe the structure of an optical fibre (core and cladding) and explain how TIR is used to transmit signals? Can you explain issues like material and modal dispersion?" }
        ]
    }
};
