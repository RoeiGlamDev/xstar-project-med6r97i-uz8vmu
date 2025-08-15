import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Interface for the 3D model options specific to luxury LRP cosmetics.
 */
interface ModelOptions {
    modelPath: string; // Path to the 3D model
    position?: [number, number, number]; // Position of the model in the scene
    scale?: [number, number, number]; // Scale of the model
}

/
 * Custom hook to initialize and manage 3D interactions for luxury LRP cosmetics.
 * This hook uses three.js to create a 3D scene that showcases luxury cosmetic products.
 * 
 * @param options - The options for 3D model rendering.
 */
const use3D = (options: ModelOptions) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const modelRef = useRef<THREE.Group | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        // Initialize Scene
        sceneRef.current = new THREE.Scene();
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Initialize Camera
        cameraRef.current = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        cameraRef.current.position.z = 5;

        // Initialize Renderer
        rendererRef.current = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
        rendererRef.current.setSize(width, height);
        rendererRef.current.setClearColor(0xffffff, 0); // Set background to transparent

        // Load Model
        const loader = new THREE.GLTFLoader();
        loader.load(options.modelPath, (gltf) => {
            modelRef.current = gltf.scene;
            modelRef.current.position.set(...(options.position || [0, 0, 0]));
            modelRef.current.scale.set(...(options.scale || [1, 1, 1]));
            sceneRef.current!.add(modelRef.current);
        });

        // Add Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        sceneRef.current.add(ambientLight);
        sceneRef.current.add(directionalLight);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            if (modelRef.current) {
                modelRef.current.rotation.y += 0.01; // Rotate model for elegant display
            }
            rendererRef.current!.render(sceneRef.current!, cameraRef.current!);
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;
            cameraRef.current!.aspect = newWidth / newHeight;
            cameraRef.current!.updateProjectionMatrix();
            rendererRef.current!.setSize(newWidth, newHeight);
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
            modelRef.current && sceneRef.current!.remove(modelRef.current);
            rendererRef.current!.dispose();
        };
    }, [options]);

    return canvasRef;
};

export default use3D;