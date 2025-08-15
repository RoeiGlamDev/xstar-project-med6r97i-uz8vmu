import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ParticleSystem } from 'three/examples/jsm/particles/ParticleSystem';
import { useAnimation } from 'framer-motion';

const ParticleBackground: React.FC = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: 1,
            transition: { duration: 2 },
        });
    }, [controls]);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-white">
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <ParticleSystem
                    color={new THREE.Color(1.0, 0.647, 0)} // Orange color
                    size={0.02}
                    position={[0, 0, 0]}
                />
            </Canvas>
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-5xl font-extrabold text-orange-600 animate-pulse">
                    luxury LRP cosmetics
                </h1>
                <p className="mt-4 text-xl text-gray-600">
                    Experience the essence of luxury with our high-end cosmetics collection.
                </p>
            </div>
            <style jsx>{
                canvas {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            }</style>
        </div>
    );
};

export default ParticleBackground;