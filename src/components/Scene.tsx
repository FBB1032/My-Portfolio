import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

export const Scene = () => {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <OrbitControls enableZoom={false} />

                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />

                    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
                        <Sphere args={[1, 100, 100]} scale={1.5}>
                            <MeshDistortMaterial
                                color="#3b82f6"
                                attach="material"
                                distort={0.4}
                                speed={2}
                                roughness={0.1}
                                metalness={0.8}
                            />
                        </Sphere>
                    </Float>

                    {/* Background particles or secondary objects could go here */}
                    <gridHelper args={[20, 20, 0x333333, 0x111111]} position={[0, -2, 0]} rotation={[0, 0, 0]} />
                </Suspense>
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>
    );
};
