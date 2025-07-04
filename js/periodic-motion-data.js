// js/periodic-motion-data.js
export const periodicMotionData = {
    circular_motion: {
        title: "3.6.1.1 Circular Motion",
        paper: "Paper 1",
        icon: "target",
        topics: [
            { id: "3.6.1.1a", title: "Angular velocity", prompt: "Can you define angular velocity (ω) and use the equations ω = v/r and ω = 2πf to solve problems involving objects in circular motion?" },
            { id: "3.6.1.1b", title: "Centripetal acceleration", prompt: "Do you understand that an object in circular motion is always accelerating towards the center of the circle? Can you use the equations a = v²/r and a = ω²r?" },
            { id: "3.6.1.1c", title: "Centripetal force", prompt: "Can you explain that a resultant force, the centripetal force, is required to cause circular motion? Can you use F = mv²/r and F = mω²r to solve problems?" }
        ]
    },
    shm: {
        title: "3.6.1.2-3 Simple Harmonic Motion",
        paper: "Paper 2",
        icon: "target",
        topics: [
            { id: "3.6.1.2a", title: "SHM condition", prompt: "Can you state the defining condition for Simple Harmonic Motion (SHM): an acceleration that is proportional to the displacement from the equilibrium position and always directed towards it (a ∝ -x)?" },
            { id: "3.6.1.2b", title: "SHM equations", prompt: "Can you use the equations a = -ω²x and x = Acos(ωt) or x = Asin(ωt) to describe the motion of an oscillator?" },
            { id: "3.6.1.2c", title: "SHM velocity", prompt: "Can you use the equation v = ±ω√(A² - x²) to find the velocity of an object in SHM at any given displacement?" },
            { id: "3.6.1.2d", title: "SHM energy", prompt: "Can you describe the continuous interchange between kinetic and potential energy during SHM? Can you sketch graphs of energy vs. displacement?" },
            { id: "3.6.1.3a", title: "Mass-spring system", prompt: "Can you use the formula T = 2π√(m/k) for the period of a mass-spring system and describe the energy changes involved?" },
            { id: "3.6.1.3b", title: "Simple pendulum", prompt: "Can you use the formula T = 2π√(L/g) for the period of a simple pendulum and describe the energy changes involved?" },
            { id: "3.6.1.4a", title: "Resonance", prompt: "Can you define natural frequency, forced vibrations, and resonance? Can you describe the effects of damping on the sharpness of the resonance peak?" }
        ]
    }
};
