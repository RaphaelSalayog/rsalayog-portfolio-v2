"use client";

import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { inSphere } from "maath/random";
import { Suspense, useRef } from "react";

const StarField = () => {
    const StarField = (props: any) => {
        const ref = useRef<any>(null);
        const sphere = inSphere(new Float32Array(3000 * 3), { radius: 1.2 });

        useFrame((state, delta) => {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        });

        return (
            <group rotation={[0, 0, Math.PI / 4]}>
                <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                    <PointMaterial
                        transparent
                        color="#f272c8"
                        size={0.002}
                        sizeAttenuation={true}
                        depthWrite={false}
                    />
                </Points>
            </group>
        );
    };

    return (
        <div className="w-full h-auto absolute inset-0 -z-20">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={<div>loading ...</div>}>
                    <StarField />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarField;
