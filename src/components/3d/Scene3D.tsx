import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// FloatingGeometry and ParticleField removed to fix unused variable errors
function GlowingOrb({ position, color, size = 1 }: { position: [number, number, number], color: string, size?: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.scale.setScalar(size + Math.sin(state.clock.elapsedTime * 2) * 0.1);
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.8}
                transparent
                opacity={0.4}
            />
        </mesh>
    );
}


// Interactive Mouse Particles
function MouseParticles() {
    const count = 80; // Reduced from 150
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const lightRef = useRef<THREE.PointLight>(null);
    const followerRef = useRef<THREE.Group>(null);
    const [dummy] = useState(() => new THREE.Object3D());
    const mouse = useRef(new THREE.Vector2(0, 0));
    const target = useRef(new THREE.Vector2(0, 0));

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            // Reduce spread to keep them somewhat near center initially
            const factor = 10 + Math.random() * 20;
            const speed = 0.01 + Math.random() / 200;
            // Constraint initial drift area
            const xFactor = (Math.random() - 0.5) * 10;
            const yFactor = (Math.random() - 0.5) * 10;
            const zFactor = (Math.random() - 0.5) * 5;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            // Map to visible range roughly (-8 to 8 for X, -5 to 5 for Y at Z=0)
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = -(event.clientY / window.innerHeight) * 2 + 1;
            target.current.x = x * 8;
            target.current.y = y * 5;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame(() => {
        // Smooth mouse movement
        mouse.current.x += (target.current.x - mouse.current.x) * 0.1;
        mouse.current.y += (target.current.y - mouse.current.y) * 0.1;

        // IMPERATIVE UPDATE: This ensures the light and mesh actually move!
        if (followerRef.current) {
            followerRef.current.position.set(mouse.current.x, mouse.current.y, 2);
        }
        if (lightRef.current) {
            lightRef.current.position.set(mouse.current.x, mouse.current.y, 2);
        }

        if (meshRef.current) {
            particles.forEach((particle, i) => {
                let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
                t = particle.t += speed / 2;
                const s = Math.cos(t);

                // Attraction to mouse with dampening
                // Calculate distance for scale effect
                const dx = mouse.current.x - (xFactor + particle.mx);
                const dy = mouse.current.y - (yFactor + particle.my);
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Move towards mouse
                particle.mx += (mouse.current.x - particle.mx) * 0.03;
                particle.my += (mouse.current.y - particle.my) * 0.03;

                dummy.position.set(
                    xFactor + particle.mx + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                    yFactor + particle.my + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                    zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
                );

                const scale = (dist < 3) ? 1.5 + s : 0.5 + s * 0.5;
                dummy.scale.set(scale, scale, scale);

                dummy.rotation.set(s * 5, s * 5, s * 5);
                dummy.updateMatrix();

                meshRef.current!.setMatrixAt(i, dummy.matrix);
            });
            meshRef.current.instanceMatrix.needsUpdate = true;
        }
    });

    return (
        <>
            <instancedMesh ref={meshRef} args={[undefined, undefined, count]} frustumCulled={false}>
                <dodecahedronGeometry args={[0.04, 0]} />
                <meshStandardMaterial
                    color="#06b6d4"
                    emissive="#06b6d4"
                    emissiveIntensity={0.8}
                    transparent
                    opacity={0.6}
                />
            </instancedMesh>

            {/* Light linked to Cursor */}
            <pointLight ref={lightRef} intensity={2} distance={5} color="#06b6d4" decay={2} />

            {/* Visual Cursor Follower - Minimized Size */}
            <group ref={followerRef}>
                <mesh>
                    <sphereGeometry args={[0.015, 16, 16]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>
                <mesh>
                    <sphereGeometry args={[0.06, 16, 16]} />
                    <meshBasicMaterial color="#06b6d4" transparent opacity={0.3} />
                </mesh>
                <mesh>
                    <sphereGeometry args={[0.12, 16, 16]} />
                    <meshBasicMaterial color="#06b6d4" transparent opacity={0.1} />
                </mesh>
            </group>
        </>
    );
}

// Main 3D Scene
const Scene3D: React.FC = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0, // Ensure it is not behind the body
            pointerEvents: 'none',
            background: 'linear-gradient(135deg, #0a0e17 0%, #0f172a 50%, #1e1b4b 100%)', // Moved from body
        }}>
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                style={{ background: 'transparent' }}
                dpr={[1, 1.5]} // Optimize pixel ratio
            >
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={0.5} color="#06b6d4" />
                <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />

                {/* Stars background */}
                <Stars radius={50} depth={50} count={1500} factor={3} saturation={0} fade speed={0.5} />

                <MouseParticles />



                {/* Glowing orbs */}
                <GlowingOrb position={[-5, 0, -6]} color="#06b6d4" size={1.5} />
                <GlowingOrb position={[5, 2, -8]} color="#8b5cf6" size={2} />
                <GlowingOrb position={[0, -4, -10]} color="#3b82f6" size={1.2} />
            </Canvas>
        </div>
    );
};

export default Scene3D;
