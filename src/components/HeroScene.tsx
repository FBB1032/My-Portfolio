import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, MeshWobbleMaterial, Sparkles } from '@react-three/drei';

const Blob: React.FC = () => (
    <Float speed={1.2} rotationIntensity={1} floatIntensity={1.2}>
        <mesh castShadow receiveShadow>
            <icosahedronGeometry args={[1.4, 3]} />
            <MeshWobbleMaterial factor={0.6} speed={1.6} color="#7c3aed" envMapIntensity={0.6} metalness={0.35} roughness={0.22} />
        </mesh>
    </Float>
);

export const HeroScene: React.FC = () => {
    return (
        <div className="absolute inset-0 -z-20 pointer-events-none">
            <Canvas shadows camera={{ position: [0, 0, 6], fov: 50 }}>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 6]} />
                    <hemisphereLight args={[0xffffff, 0x111827, 0.35]} />
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[6, 8, 4]} intensity={1.1} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
                    <pointLight position={[-6, -4, -3]} intensity={0.35} color="#60a5fa" />

                    <Blob />

                    <Sparkles size={6} scale={8} count={40} color="#a78bfa" />

                    <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.6} />
                </Suspense>
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        </div>
    );
};

export default HeroScene;
