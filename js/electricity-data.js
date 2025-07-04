// js/electricity-data.js
export const electricityData = {
    current_voltage: {
        title: "3.5.1a Current & Voltage",
        paper: "Paper 1",
        icon: "zap",
        topics: [
            { id: "3.5.1.1a", title: "Current definition", prompt: "Can you define electric current as the rate of flow of charge? Can you use the equation I = ΔQ/Δt?" },
            { id: "3.5.1.1b", title: "Potential difference", prompt: "Can you define potential difference (voltage) as the work done per unit charge? Can you use the equation V = W/Q?" },
            { id: "3.5.1.1c", title: "Resistance definition", prompt: "Can you define resistance as the ratio of voltage to current? Can you use the equation R = V/I?" },
            { id: "3.5.1.2a", title: "Ohmic conductors", prompt: "Can you describe the I-V characteristic of an ohmic conductor (a straight line through the origin)? Can you state Ohm's law?" },
            { id: "3.5.1.2b", title: "Diode characteristics", prompt: "Can you sketch and explain the I-V characteristic for a semiconductor diode, including the concept of forward bias and reverse bias?" },
            { id: "3.5.1.2c", title: "Filament lamp characteristics", prompt: "Can you sketch and explain the I-V characteristic for a filament lamp, explaining why its resistance increases as the temperature of the filament increases?" },
            { id: "3.5.1.3a", title: "Resistivity", prompt: "Can you define resistivity (ρ) and use the formula R = ρL/A to solve problems involving the resistance of a wire?" },
            { id: "3.5.1.3b", title: "Temperature effects", prompt: "Can you describe how the resistance of a metal conductor and a thermistor changes with temperature?" },
            { id: "3.5.1.3c", title: "Superconductivity", prompt: "Can you describe the phenomenon of superconductivity and define the critical temperature?" }
        ]
    },
    dc_circuits: {
        title: "3.5.1b DC Circuits",
        paper: "Paper 1",
        icon: "zap",
        topics: [
            { id: "3.5.1.4a", title: "Series resistors", prompt: "Can you calculate the total resistance of resistors connected in series using the formula Rₜ = R₁ + R₂ + ...?" },
            { id: "3.5.1.4b", title: "Parallel resistors", prompt: "Can you calculate the total resistance of resistors connected in parallel using the formula 1/Rₜ = 1/R₁ + 1/R₂ + ...?" },
            { id: "3.5.1.4c", title: "Power equations", prompt: "Can you recall and use the different equations for electrical power: P = IV, P = I²R, and P = V²/R?" },
            { id: "3.5.1.4d", title: "Circuit analysis", prompt: "Can you analyze more complex circuits containing combinations of series and parallel resistors to find the current and voltage across different components?" },
            { id: "3.5.1.5a", title: "Potential divider", prompt: "Can you explain how a potential divider circuit works and use it to calculate output voltages?" },
            { id: "3.5.1.5b", title: "Sensor circuits", prompt: "Do you understand how a potential divider can be used with components like thermistors and LDRs to create sensor circuits (e.g., for a thermostat or light sensor)?" },
            { id: "3.5.1.6a", title: "EMF vs terminal pd", prompt: "Can you define electromotive force (e.m.f.) as the energy supplied per unit charge by a source? Can you distinguish it from terminal potential difference (p.d.)?" },
            { id: "3.5.1.6b", title: "Internal resistance", prompt: "Can you explain the concept of internal resistance and 'lost volts'? Can you use the equation ε = I(R + r) to solve circuit problems?" }
        ]
    }
};
