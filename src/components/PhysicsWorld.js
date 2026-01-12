import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import Matter from 'matter-js';
import MatterWrap from 'matter-wrap';

Matter.use(MatterWrap);

const PhysicsContext = createContext(null);

export const usePhysics = () => useContext(PhysicsContext);

const PhysicsWorld = ({ children }) => {
    const sceneRef = useRef(null);
    const engineRef = useRef(null);
    const renderRef = useRef(null);
    const runnerRef = useRef(null);
    const [isReady, setIsReady] = useState(false);
    const [gravityEnabled, setGravityEnabled] = useState(false); // Default to off for readability

    // Store references to registered DOM elements and their bodies
    const bodiesMap = useRef(new Map());

    const toggleGravity = () => setGravityEnabled(prev => !prev);

    // Function to register an element
    const addBody = (id, element, options) => {
        if (!engineRef.current || !element) return;

        // Get initial dimensions and position
        const { width, height, left, top } = element.getBoundingClientRect();

        // Create body based on element dimensions
        // Matter.js bodies are positioned at their center
        const x = left + width / 2;
        const y = top + height / 2;

        const body = Matter.Bodies.rectangle(x, y, width, height, {
            restitution: 0.5,
            friction: 0.1,
            density: 0.001,
            ...options
        });

        Matter.Composite.add(engineRef.current.world, body);
        bodiesMap.current.set(id, { element, body, initialWidth: width, initialHeight: height });

        return body;
    };

    useEffect(() => {
        const { Engine, Render, Runner, World, Mouse, MouseConstraint, Composite, Bodies, Events } = Matter;

        // Create engine
        engineRef.current = Engine.create();
        const engine = engineRef.current;

        // Create renderer
        renderRef.current = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                background: 'transparent',
                wireframes: false, // Set to true for debugging physics bodies
                showAngleIndicator: false
            }
        });
        const render = renderRef.current;

        // Create runner
        runnerRef.current = Runner.create();
        const runner = runnerRef.current;

        // Add wall bodies
        const wallThickness = 100;
        const walls = [
            Bodies.rectangle(window.innerWidth / 2, -wallThickness * 2, window.innerWidth * 2, wallThickness, { isStatic: true }), // Top (higher up to allow falling in from top if needed)
            Bodies.rectangle(window.innerWidth / 2, window.innerHeight + wallThickness / 2, window.innerWidth * 2, wallThickness, { isStatic: true }), // Bottom
            Bodies.rectangle(window.innerWidth + wallThickness / 2, window.innerHeight / 2, wallThickness, window.innerHeight * 2, { isStatic: true }), // Right
            Bodies.rectangle(-wallThickness / 2, window.innerHeight / 2, wallThickness, window.innerHeight * 2, { isStatic: true }) // Left
        ];
        Composite.add(engine.world, walls);

        // Add mouse control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

        Composite.add(engine.world, mouseConstraint);
        render.mouse = mouse;

        // Sync loop: Update DOM elements positions
        Events.on(engine, 'afterUpdate', () => {
            bodiesMap.current.forEach(({ element, body, initialWidth, initialHeight }) => {
                if (!body || !element) return;

                const { x, y } = body.position;
                const rotation = body.angle;

                // Calculate the translation needed to move the element from its top-left (0,0 fixed) origin
                // to the center position of the physics body.
                // Since we fix the element at 0,0, we translate it by (x - width/2, y - height/2)

                const translateX = x - initialWidth / 2;
                const translateY = y - initialHeight / 2;

                element.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotation}rad)`;
            });
        });

        // Run
        Runner.run(runner, engine);
        Render.run(render);

        setIsReady(true);

        const handleResize = () => {
            render.canvas.width = window.innerWidth;
            render.canvas.height = window.innerHeight;

            // Update walls (simplified)
            // Ideally we should remove and recreate walls or update their vertices
            Matter.Body.setPosition(walls[1], { x: window.innerWidth / 2, y: window.innerHeight + wallThickness / 2 });
            Matter.Body.setPosition(walls[2], { x: window.innerWidth + wallThickness / 2, y: window.innerHeight / 2 });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            Render.stop(render);
            Runner.stop(runner);
            if (render.canvas) render.canvas.remove();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <PhysicsContext.Provider value={{ addBody, isReady, gravityEnabled, toggleGravity }}>
            <div
                ref={sceneRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 0,
                    pointerEvents: 'none' // Canvas shouldn't capture clicks, but MouseConstraint needs events? 
                    // Actually, for MouseConstraint to work on the canvas, it DOES need events.
                    // But if it captures events, we can't click the DOM elements unless we propagate.
                    // Solution: Put canvas behind (zIndex 0), DOM elements in front (zIndex 100).
                    // Only when clicking background does canvas get it.
                    // But MouseConstraint tracks mouse position globally if we set it up right.
                }}
            />
            {children}
        </PhysicsContext.Provider>
    );
};

export default PhysicsWorld;
