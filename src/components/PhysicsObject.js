import React, { useRef, useLayoutEffect, useState } from 'react';
import { usePhysics } from './PhysicsWorld';

const PhysicsObject = ({ children, bodyOptions = {}, className, style, ...props }) => {
    const ref = useRef(null);
    const { addBody, isReady, gravityEnabled } = usePhysics() || {};
    const [isPhysicsEnabled, setIsPhysicsEnabled] = useState(false);

    // We wait for the world to be ready AND gravity to be enabled before snapshotting
    useLayoutEffect(() => {
        if (isReady && gravityEnabled && ref.current && addBody && !isPhysicsEnabled) {
            // Register the body immediately when gravity is enabled
            addBody(Math.random().toString(36), ref.current, bodyOptions);

            // Lock the element to fixed position so transform takes over
            const rect = ref.current.getBoundingClientRect();
            // Important: Set explicit top/left to current computed position to avoid jumping
            ref.current.style.top = `${rect.top}px`;
            ref.current.style.left = `${rect.left}px`;

            ref.current.style.position = 'fixed';
            ref.current.style.margin = '0';
            ref.current.style.width = `${rect.width}px`; // Fix width to prevent collapse
            ref.current.style.willChange = 'transform';
            ref.current.style.zIndex = '100'; // Higher z-index to stay above canvas

            setIsPhysicsEnabled(true);
        }
    }, [isReady, gravityEnabled, addBody, bodyOptions, isPhysicsEnabled]);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                // Initial style before physics takes over
                ...style
            }}
            {...props}
        >
            {children}
        </div>
    );
};

export default PhysicsObject;
