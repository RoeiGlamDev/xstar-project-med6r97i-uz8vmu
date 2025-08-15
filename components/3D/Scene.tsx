import { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
}

const Scene: React.FC<SceneProps> = ({ title }) => {
  const sceneRef = useRef<THREE.Scene | null>(null);

  useEffect(() => {
    if (sceneRef.current) {
      const light = new THREE.AmbientLight(0xffffff, 1);
      sceneRef.current.add(light);
    }
  }, []);

  return (
    <Canvas
      ref={sceneRef}
      style={{ height: ''100vh'', background: ''white' '}}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <OrbitControls />
      <motion.div
        position={[0, 0, 0]}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </motion.mesh>
    </Canvas>
  );
};

const LuxuryCosmeticsScene: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-5xl font-bold text-orange-600 mb-6">
        luxury LRP cosmetics
      </h1>
      <p className="text-lg text-gray-700 mb-12">
        Experience the elegance and sophistication of luxury LRP cosmetics.
        Indulge in our luxurious formulations designed for the discerning beauty
        enthusiast.
      </p>
      <Scene title="luxury LRP cosmetics" />
      <p className="mt-6 text-gray-500">
        Discover our exquisite range of products that redefine beauty.
      </p>
    </div>
  );
};

export default LuxuryCosmeticsScene;