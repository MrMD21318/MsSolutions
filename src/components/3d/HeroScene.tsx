import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars } from '@react-three/drei';
// import * as random from 'maath/random';

function Particles(props: any) {
    const ref = useRef<any>();
    // Generate random points manually to avoid maath dependency issues
    const sphere = new Float32Array(5000);
    for (let i = 0; i < 5000; i++) {
        sphere[i] = (Math.random() - 0.5) * 3;
    }


    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#06b6d4" // Electric Cyan
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

function Connections() {
    // Detailed mesh wireframe or similar could go here
    return null;
}

const HeroScene: React.FC = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full -z-10">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <Particles />
                </Float>
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <ambientLight intensity={0.5} />
            </Canvas>
        </div>
    );
};

export default HeroScene;
