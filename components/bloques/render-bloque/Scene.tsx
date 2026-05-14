'use client'
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
export default function Scene({
    scrollY,
    move
}: {
    scrollY: number;
    move:boolean
}) {
    const cubeRef = useRef<THREE.Mesh>(null!);
    const glb = useGLTF("/bloque.glb")
    return (
        <>
            <ambientLight intensity={1} />
            <pointLight position={[0, 0, 0]} />
            <primitive ref={cubeRef} object={glb.scene} scale={0.5} />
        </>
    );
}



