// js/nuclear-data.js
export const nuclearData = {
    radioactivity: {
        title: "3.8.1.1-3 Radioactivity",
        paper: "Paper 2",
        icon: "shield",
        topics: [
            { id: "3.8.1.1a", title: "Rutherford scattering", prompt: "Can you describe the Rutherford alpha-particle scattering experiment and explain how its results led to the nuclear model of the atom?" },
            { id: "3.8.1.2a", title: "Radiation properties", prompt: "Can you compare the nature, penetration power, and ionising ability of alpha (α), beta (β), and gamma (γ) radiation?" },
            { id: "3.8.1.2b", title: "Inverse square law", prompt: "Can you explain and apply the inverse square law for gamma radiation (I = k/x²)?" },
            { id: "3.8.1.2c", title: "Background radiation", prompt: "Can you describe the main sources of background radiation and explain how to correct for it in experiments?" },
            { id: "3.8.1.3a", title: "Random decay", prompt: "Can you explain that radioactive decay is a spontaneous and random process? What does this mean on a macroscopic and microscopic level?" },
            { id: "3.8.1.3b", title: "Decay equation", prompt: "Can you use the exponential decay equation N = N₀e^(-λt) to solve problems involving the number of undecayed nuclei?" },
            { id: "3.8.1.3c", title: "Activity", prompt: "Can you define activity (A) and the decay constant (λ)? Can you use the equation A = λN?" },
            { id: "3.8.1.3d", title: "Half-life", prompt: "Can you define half-life (T½) and use the relationship T½ = ln(2)/λ to solve problems?" }
        ]
    },
    nuclear_structure: {
        title: "3.8.1.4-6 Nuclear Structure & Energy",
        paper: "Paper 2",
        icon: "shield",
        topics: [
            { id: "3.8.1.4a", title: "Nuclear stability", prompt: "Can you interpret the N-Z graph of stable nuclei and explain the shape of the curve in terms of the forces acting within the nucleus?" },
            { id: "3.8.1.4b", title: "Decay modes", prompt: "Can you use the N-Z graph to predict the likely decay mode (α, β⁻, β⁺, or electron capture) for an unstable nucleus?" },
            { id: "3.8.1.5a", title: "Nuclear radius", prompt: "Can you use the empirical formula R = R₀A^(1/3) to estimate the radius of a nucleus?" },
            { id: "3.8.1.5b", title: "Nuclear density", prompt: "Can you show from the nuclear radius formula that the density of nuclear matter is approximately constant for all nuclei?" },
            { id: "3.8.1.6a", title: "Mass-energy equivalence", prompt: "Can you state and apply Einstein's mass-energy equivalence principle, E = mc²? Can you perform calculations using atomic mass units (u) and MeV?" },
            { id: "3.8.1.6b", title: "Binding energy", prompt: "Can you define mass defect and binding energy? Can you calculate the binding energy and binding energy per nucleon for a given nucleus?" },
            { id: "3.8.1.6c", title: "Fission and fusion", prompt: "Do you understand the concept of binding energy per nucleon and how it relates to energy release in nuclear fission and fusion? Can you interpret the binding energy per nucleon curve?" }
        ]
    },
    nuclear_applications: {
        title: "3.8.1.7-8 Nuclear Applications & Safety",
        paper: "Paper 2",
        icon: "shield",
        topics: [
            { id: "3.8.1.7a", title: "Chain reactions", prompt: "Can you explain the concept of a nuclear chain reaction? What is meant by critical mass, and how are control rods and a moderator used to control the reaction in a nuclear reactor?" },
            { id: "3.8.1.8a", title: "Safety aspects", prompt: "Can you describe the main safety features of a nuclear reactor and the procedures for handling and storing radioactive waste safely?" }
        ]
    }
};
