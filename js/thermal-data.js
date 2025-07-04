// js/thermal-data.js
export const thermalData = {
    thermal_energy_transfer: {
        title: "3.6.2.1 Thermal Energy Transfer",
        paper: "Paper 2",
        icon: "settings",
        topics: [
            { id: "3.6.2.1a", title: "Internal energy", prompt: "Can you define internal energy as the sum of the random distribution of kinetic and potential energies of the molecules in a system?" },
            { id: "3.6.2.1b", title: "First law of thermodynamics", prompt: "Can you state and apply the first law of thermodynamics, Q = ΔU + W, understanding the sign conventions for heat (Q), change in internal energy (ΔU), and work done (W)?" },
            { id: "3.6.2.1c", title: "Specific heat capacity", prompt: "Can you define specific heat capacity and use the formula Q = mcΔθ to calculate heat transfer?" },
            { id: "3.6.2.1d", title: "Specific latent heat", prompt: "Can you define specific latent heat of fusion and vaporisation? Can you use the formula Q = mL to calculate the energy required for a change of state?" }
        ]
    },
    ideal_gases: {
        title: "3.6.2.2 Ideal Gases",
        paper: "Paper 2",
        icon: "settings",
        topics: [
            { id: "3.6.2.2a", title: "Gas laws", prompt: "Can you state and apply Boyle's Law (p₁V₁ = p₂V₂) and Charles's Law (V₁/T₁ = V₂/T₂) for an ideal gas? Do you remember to use temperature in Kelvin?" },
            { id: "3.6.2.2b", title: "Ideal gas equation", prompt: "Can you use the ideal gas equation in its two forms, pV = nRT and pV = NkT, and explain the meaning of each term?" },
            { id: "3.6.2.2c", title: "Absolute zero", prompt: "Can you explain the concept of absolute zero (-273 °C or 0 K) as the temperature at which the internal energy of a system is at its minimum?" }
        ]
    },
    kinetic_theory: {
        title: "3.6.2.3 Kinetic Theory",
        paper: "Paper 2",
        icon: "settings",
        topics: [
            { id: "3.6.2.3a", title: "Kinetic theory", prompt: "Can you state the assumptions of the kinetic theory of gases? Can you use the equation pV = ⅓Nm<c²> and explain how it is derived?" },
            { id: "3.6.2.3b", title: "Mean kinetic energy", prompt: "Do you understand the relationship between the average kinetic energy of a molecule and the absolute temperature of the gas, as given by ½m<c²> = (3/2)kT?" }
        ]
    }
};
