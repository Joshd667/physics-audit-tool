// js/fields-data.js
export const fieldsData = {
    gravitational_fields: {
        title: "3.7.2 Gravitational Fields",
        paper: "Paper 2",
        icon: "globe",
        topics: [
            { id: "3.7.2.1a", title: "Newton's law of gravitation", prompt: "Can you state Newton's law of universal gravitation and use the formula F = -Gm₁m₂/r² to calculate the force between two point masses?" },
            { id: "3.7.2.2a", title: "Gravitational field strength", prompt: "Can you define gravitational field strength (g) and use the equations g = F/m and g = GM/r² for a radial field?" },
            { id: "3.7.2.2b", title: "Field line representation", prompt: "Can you draw the gravitational field lines for a uniform field and a radial field (e.g., around a planet)?" },
            { id: "3.7.2.3a", title: "Gravitational potential", prompt: "Can you define gravitational potential (V) as the work done per unit mass to move an object from infinity to a point in the field? Can you use V = -GM/r?" },
            { id: "3.7.2.3b", title: "Potential difference", prompt: "Can you calculate the work done (W = mΔV) in moving a mass between two points in a gravitational field?" },
            { id: "3.7.2.3c", title: "Field-potential relationship", prompt: "Do you understand the relationship between gravitational field strength and potential, g = -ΔV/Δr, and that g is the gradient of the V-r graph?" },
            { id: "3.7.2.4a", title: "Orbital motion", prompt: "Can you derive Kepler's third law (T² ∝ r³) by equating the gravitational force with the centripetal force for an orbiting satellite?" },
            { id: "3.7.2.4b", title: "Satellite energies", prompt: "Can you calculate the orbital speed, kinetic energy, potential energy, and total energy of a satellite in a circular orbit?" },
            { id: "3.7.2.4c", title: "Escape velocity", prompt: "Can you define and calculate the escape velocity of an object from a gravitational field?" },
            { id: "3.7.2.4d", title: "Geostationary orbits", prompt: "Can you describe the properties and uses of geostationary satellites (e.g., orbital period of 24 hours, orbit above the equator)?" }
        ]
    },
    electric_fields: {
        title: "3.7.3 Electric Fields",
        paper: "Paper 2",
        icon: "zap",
        topics: [
            { id: "3.7.3.1a", title: "Coulomb's law", prompt: "Can you state Coulomb's law and use the formula F = (1/4πε₀)(Q₁Q₂/r²) to calculate the force between two point charges?" },
            { id: "3.7.3.1b", title: "Permittivity", prompt: "Do you understand the role of the permittivity of free space (ε₀) and that air can be treated as a vacuum in calculations?" },
            { id: "3.7.3.2a", title: "Electric field strength", prompt: "Can you define electric field strength (E) as the force per unit positive charge? Can you use E = F/Q?" },
            { id: "3.7.3.2b", title: "Uniform fields", prompt: "Can you draw the electric field for a uniform field (e.g., between two parallel plates) and use the formula E = V/d?" },
            { id: "3.7.3.2c", title: "Radial fields", prompt: "Can you draw the electric field for a radial field (around a point charge) and use the formula E = (1/4πε₀)(Q/r²)?" },
            { id: "3.7.3.2d", title: "Charged particle motion", prompt: "Can you analyze the trajectory of a charged particle moving through a uniform electric field, similar to projectile motion?" },
            { id: "3.7.3.3a", title: "Electric potential", prompt: "Can you define electric potential (V) and use the formula V = (1/4πε₀)(Q/r) for the potential around a point charge?" },
            { id: "3.7.3.3b", title: "Potential difference", prompt: "Can you calculate the work done (W = QΔV) when a charge moves between two points in an electric field?" },
            { id: "3.7.3.3c", title: "Field-potential relationship", prompt: "Do you understand the relationship between electric field strength and potential, E = -ΔV/Δr, and that E is the negative gradient of the V-r graph?" }
        ]
    },
    capacitance: {
        title: "3.7.4 Capacitance",
        paper: "Paper 2",
        icon: "zap",
        topics: [
            { id: "3.7.4.1a", title: "Capacitance definition", prompt: "Can you define capacitance as the charge stored per unit potential difference? Can you use the formula C = Q/V?" },
            { id: "3.7.4.2a", title: "Parallel plate capacitor", prompt: "Can you use the formula C = Aε₀εᵣ/d to calculate the capacitance of a parallel plate capacitor?" },
            { id: "3.7.4.2b", title: "Dielectric action", prompt: "Can you explain how inserting a dielectric material between the plates of a capacitor increases its capacitance?" },
            { id: "3.7.4.3a", title: "Energy stored", prompt: "Can you recall and use the equations for the energy stored by a capacitor: E = ½QV = ½CV² = ½Q²/C? Can you relate this to the area under a Q-V graph?" },
            { id: "3.7.4.4a", title: "Capacitor discharge", prompt: "Can you use the exponential decay equations for charge, voltage, and current (e.g., Q = Q₀e^(-t/RC)) when a capacitor discharges through a resistor?" },
            { id: "3.7.4.4b", title: "Time constant", prompt: "Can you define the time constant (τ = RC) and explain its significance in the charging and discharging of a capacitor?" },
            { id: "3.7.4.4c", title: "Charging equation", prompt: "Can you use the exponential charging equations, such as Q = Q₀(1 - e^(-t/RC)), to analyze a capacitor charging circuit?" }
        ]
    }
};
