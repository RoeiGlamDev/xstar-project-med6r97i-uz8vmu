import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('floating-elements')?.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xffa500 }); // orange color
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.position.y = Math.sin(Date.now()  0.001)  1;
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <div id="floating-elements" className="absolute inset-0" />
      <motion.div
        className="absolute top-0 left-0 right-0 z-10 flex flex-col items-center justify-center h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold text-orange-500">Welcome to luxury LRP cosmetics</h1>
        <p className="mt-4 text-xl text-gray-700">
          Elevate your beauty routine with our exquisite range of luxury cosmetics designed for the discerning individual.
        </p>
      </motion.div>
    </div>
  );
};

export default FloatingElements;