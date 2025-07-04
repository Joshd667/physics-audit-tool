// js/magnetic-fields-data.js
export const magneticFieldsData = {
    magnetic_forces: {
        title: "3.7.5.1-2 Magnetic Forces",
        paper: "Paper 2",
        icon: "settings",
        topics: [
            { id: "3.7.5.1a", title: "Force on current-carrying wire", prompt: "Can you use the formula F = BILsin(θ) to calculate the force on a current-carrying wire in a magnetic field?" },
            { id: "3.7.5.1b", title: "Fleming's left hand rule", prompt: "Can you confidently use Fleming's left-hand rule to determine the direction of the force, field, or current?" },
            { id: "3.7.5.2a", title: "Force on moving charge", prompt: "Can you use the formula F = BQv to calculate the force on a single charged particle moving through a magnetic field?" },
            { id: "3.7.5.2b", title: "Circular motion of charges", prompt: "Can you explain why a charged particle follows a circular path in a uniform magnetic field and derive an expression for the radius of this path?" }
        ]
    },
    electromagnetic_induction: {
        title: "3.7.5.3-4 Electromagnetic Induction",
        paper: "Paper 2",
        icon: "settings",
        topics: [
            { id: "3.7.5.3a", title: "Magnetic flux", prompt: "Can you define magnetic flux (Φ) and calculate it using the formula Φ = BAcos(θ)?" },
            { id: "3.7.5.3b", title: "Flux linkage", prompt: "Can you define magnetic flux linkage (NΦ) for a coil with N turns?" },
            { id: "3.7.5.4a", title: "Faraday's law", prompt: "Can you state Faraday's law of electromagnetic induction and use the equation ε = -N(ΔΦ/Δt) to calculate the induced e.m.f.?" },
            { id: "3.7.5.4b", title: "Lenz's law", prompt: "Can you state Lenz's law and use it to predict the direction of an induced current, understanding that it opposes the change that caused it?" },
            { id: "3.7.5.4c", title: "Motional emf", prompt: "Can you derive and use the equation for motional e.m.f. (ε = Blv) for a conductor moving through a magnetic field?" }
        ]
    },
    ac_transformers: {
        title: "3.7.5.5-6 AC & Transformers",
        paper: "Paper 2",
        icon: "settings",
        topics: [
            { id: "3.7.5.5a", title: "AC quantities", prompt: "Can you define peak and root-mean-square (rms) values for alternating current and voltage? Can you use the formulas I_rms = I₀/√2 and V_rms = V₀/√2?" },
            { id: "3.7.5.6a", title: "Transformer equation", prompt: "Can you explain the operation of an ideal transformer and use the transformer equation: Nₛ/Nₚ = Vₛ/Vₚ = Iₚ/Iₛ?" },
            { id: "3.7.5.6b", title: "Transformer efficiency", prompt: "Can you explain the main causes of energy loss in a real transformer and calculate its efficiency?" }
        ]
    }
};
