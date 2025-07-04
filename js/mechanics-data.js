// js/mechanics-data.js
export const mechanicsData = {
    vectors_scalars: {
        title: "3.4.1a Vectors & Scalars",
        paper: "Paper 1",
        icon: "target",
        topics: [
            { id: "3.4.1.1a", title: "Scalars vs vectors", prompt: "Can you clearly distinguish between scalar quantities (magnitude only) and vector quantities (magnitude and direction)? Can you provide examples of each (e.g., speed vs velocity)?" },
            { id: "3.4.1.1b", title: "Vector addition", prompt: "Are you able to add two or more vectors, either by using a scale drawing (tip-to-tail method) or by calculation (e.g., using trigonometry for perpendicular vectors)?" },
            { id: "3.4.1.1c", title: "Vector resolution", prompt: "Can you resolve a vector into two perpendicular components? For example, can you find the horizontal and vertical components of a velocity vector at an angle?" },
            { id: "3.4.1.1d", title: "Equilibrium conditions", prompt: "For an object in equilibrium, can you state and apply the two conditions: the net force is zero, and the net moment about any point is zero?" }
        ]
    },
    moments: {
        title: "3.4.1b Moments",
        paper: "Paper 1",
        icon: "target",
        topics: [
            { id: "3.4.1.2a", title: "Moment definition", prompt: "Can you define the moment of a force and calculate it using the formula: moment = force × perpendicular distance from the pivot?" },
            { id: "3.4.1.2b", title: "Couples", prompt: "Do you understand what a couple is (a pair of equal and opposite forces not acting along the same line)? Can you calculate the torque of a couple?" },
            { id: "3.4.1.2c", title: "Principle of moments", prompt: "Can you state and apply the principle of moments (for equilibrium, the sum of clockwise moments equals the sum of anticlockwise moments) to solve problems with levers and beams?" },
            { id: "3.4.1.2d", title: "Centre of mass", prompt: "Can you define the centre of mass of an object? Can you explain how to find the centre of mass of a simple shape experimentally?" }
        ]
    },
    motion_kinematics: {
        title: "3.4.1c Motion & Kinematics",
        paper: "Paper 1",
        icon: "target",
        topics: [
            { id: "3.4.1.3a", title: "Kinematic definitions", prompt: "Can you define and distinguish between the key kinematic quantities: displacement, distance, velocity, speed, and acceleration?" },
            { id: "3.4.1.3b", title: "Motion graphs", prompt: "Can you interpret and draw displacement-time, velocity-time, and acceleration-time graphs? Can you calculate gradient and area under the graph where appropriate (e.g., area under v-t graph is displacement)?" },
            { id: "3.4.1.3c", title: "SUVAT equations", prompt: "Can you recall and apply the four equations of motion (SUVAT equations) for objects moving with constant, uniform acceleration?" },
            { id: "3.4.1.3d", title: "Free fall and g", prompt: "Do you understand that the acceleration of free fall (g) is constant for objects near the Earth's surface? Can you apply the SUVAT equations to free-fall problems?" },
            { id: "3.4.1.4a", title: "Projectile motion", prompt: "Can you analyze the motion of a projectile by considering the horizontal and vertical components of its motion independently? (Horizontal: constant velocity; Vertical: constant acceleration g)." },
            { id: "3.4.1.4b", title: "Air resistance effects", prompt: "Can you qualitatively describe the effect of air resistance on the trajectory of a projectile, explaining how it affects the horizontal and vertical motion?" },
            { id: "3.4.1.4c", title: "Terminal velocity", prompt: "Can you explain the concept of terminal velocity for a falling object, describing how the forces of weight and air resistance change as the object accelerates?" }
        ]
    },
    dynamics: {
        title: "3.4.1d Dynamics",
        paper: "Paper 1",
        icon: "target",
        topics: [
            { id: "3.4.1.5a", title: "Newton's first law", prompt: "Can you state Newton's first law of motion (inertia) and apply it to situations where an object is at rest or moving with a constant velocity?" },
            { id: "3.4.1.5b", title: "Newton's second law", prompt: "Can you state Newton's second law (F=ma) and use it to solve problems involving resultant force, mass, and acceleration, including situations with multiple forces (e.g., friction, tension)?" },
            { id: "3.4.1.5c", title: "Newton's third law", prompt: "Can you state Newton's third law and identify action-reaction pairs? Do you understand that these forces are equal and opposite, act on different objects, and are of the same type?" },
            { id: "3.4.1.6a", title: "Momentum definition", prompt: "Can you define momentum as the product of mass and velocity (p = mv) and recognise that it is a vector quantity?" },
            { id: "3.4.1.6b", title: "Conservation of momentum", prompt: "Can you state the principle of conservation of linear momentum and apply it to analyze collisions and explosions in one and two dimensions?" },
            { id: "3.4.1.6c", title: "Impulse", prompt: "Can you define impulse as the change in momentum (Ft = Δ(mv)) and relate it to the area under a force-time graph?" },
            { id: "3.4.1.6d", title: "Elastic vs inelastic collisions", prompt: "Can you distinguish between elastic collisions (kinetic energy is conserved) and inelastic collisions (kinetic energy is not conserved)? Can you solve problems for both types?" }
        ]
    },
    energy: {
        title: "3.4.1e Energy",
        paper: "Paper 1",
        icon: "target",
        topics: [
            { id: "3.4.1.7a", title: "Work done", prompt: "Can you define work done as the product of force and distance moved in the direction of the force? Can you use the formula W = Fs cos(θ)?" },
            { id: "3.4.1.7b", title: "Power", prompt: "Can you define power as the rate of doing work or transferring energy? Can you use the equations P = W/t and P = Fv?" },
            { id: "3.4.1.7c", title: "Efficiency", prompt: "Can you calculate the efficiency of a system using the formula: efficiency = (useful energy output / total energy input) × 100%?" },
            { id: "3.4.1.8a", title: "Kinetic energy", prompt: "Can you recall and use the formula for kinetic energy, Eₖ = ½mv²?" },
            { id: "3.4.1.8b", title: "Gravitational potential energy", prompt: "Can you recall and use the formula for the change in gravitational potential energy, ΔEₚ = mgΔh, for objects near the Earth's surface?" },
            { id: "3.4.1.8c", title: "Conservation of energy", prompt: "Can you apply the principle of conservation of energy to solve problems involving transfers between kinetic energy, potential energy, and work done against resistive forces?" }
        ]
    },
    materials: {
        title: "3.4.2 Materials",
        paper: "Paper 1",
        icon: "settings",
        topics: [
            { id: "3.4.2.1a", title: "Density", prompt: "Can you define density and use the formula ρ = m/V to calculate density, mass, or volume? Can you describe a method to determine the density of a solid or liquid?" },
            { id: "3.4.2.1b", title: "Hooke's law", prompt: "Can you state Hooke's Law (F = kΔL) and explain the terms force constant (k) and extension (ΔL)? Do you know what the limit of proportionality is?" },
            { id: "3.4.2.1c", title: "Stress and strain", prompt: "Can you define and calculate tensile stress (force per unit area) and tensile strain (extension per unit length)?" },
            { id: "3.4.2.1d", title: "Elastic strain energy", prompt: "Can you calculate the energy stored in a stretched material using E = ½FΔL? Can you relate this to the area under a force-extension graph?" },
            { id: "3.4.2.1e", title: "Material behaviour", prompt: "Can you interpret force-extension and stress-strain graphs to identify and describe elastic and plastic behaviour, and distinguish between brittle and ductile materials?" },
            { id: "3.4.2.2a", title: "Young modulus", prompt: "Can you define the Young modulus as the ratio of stress to strain? Can you use the formula E = (FL)/(AΔL) to solve problems?" },
            { id: "3.4.2.2b", title: "Stress-strain graphs", prompt: "Can you determine the Young modulus from the gradient of a stress-strain graph? Can you identify the breaking stress and yield point on such a graph?" }
        ]
    }
};
