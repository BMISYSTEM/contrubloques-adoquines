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
    console.log(scrollY)
    const cubeRef = useRef<THREE.Mesh>(null!);
    const glb = useGLTF("./bloquecemento.glb")
    const { camera } = useThree()
    const prev = useRef(0);
    const lookOffset = useRef(new THREE.Vector3(0, 0, 0));
    useFrame(() => {
        if(move) return;
        prev.current = THREE.MathUtils.lerp(prev.current, scrollY, 0.1);
        const s = prev.current * 0.01;
        const ss = scrollY * 0.01;
        // Movimiento suave vertical
        // cubeRef.current.position.y = 3 - s;
        camera.lookAt(cubeRef.current.position);
        // console.log(camera.position.x)
        // console.log(camera.position.y)
        // console.log(camera.position.z)
        if (scrollY > 330 && scrollY < 1300) {
            const target = new THREE.Vector3(
                4.079306331087989,     // x
                4.439763914867283,     // y
                -6.673415131206547      // z
            );
            // Lerp suave (0.05 = velocidad)
            camera.position.lerp(target, 0.05);
            // 2. Offset objetivo animado
            const targetOffset = new THREE.Vector3(1.5, 0, 0); // quieres mover foco a la derecha

            // 3. Animar el offset (lerp suave)
            lookOffset.current.lerp(targetOffset, 0.5);
            // 4. Calcular hacia dónde mira la cámara
            const newLookAt = cubeRef.current.position
                .clone()
                .add(lookOffset.current);

            camera.lookAt(newLookAt);

        } else if (scrollY >= 1300) {
            const terceraAnimacion = new THREE.Vector3(0.3886968727481667,
                4.163120614083115,
                -7.450996006824353)
            camera.position.lerp(terceraAnimacion, 0.05);
            const targetOffset = new THREE.Vector3(0, 0, 0);
            lookOffset.current.lerp(targetOffset, 0.5);
            const newLookAt = cubeRef.current.position
                .clone()
                .add(lookOffset.current);

            camera.lookAt(newLookAt);
        }
        else {
            const inicial = new THREE.Vector3(
                0.07985455512524606,
                8.543630550451574,
                -0.0005171232341936815)
            const focoIncial = new THREE.Vector3(0, 0, 0)
            camera.position.lerp(inicial, 0.5);
            lookOffset.current.lerp(focoIncial, 0.5);
            // 4. Calcular hacia dónde mira la cámara
            const newLookAt = cubeRef.current.position
                .clone()
                .add(lookOffset.current);
            camera.lookAt(newLookAt);

        }
    });
    useEffect(() => {
        
        camera.position.set(0.07985455512524606,
            8.543630550451574,
            -0.0005171232341936815)
    }, [])
    return (
        <>
            <ambientLight intensity={1} />
            <pointLight position={[0, 3, 8]} />
            <primitive ref={cubeRef} object={glb.scene} scale={3} />
        </>
    );
}


interface Props {
    from: number,
    to: number,
    duration: number,
    onUpdate: () => void,
    onComplete: () => void,
    easing: (t: any) => any
}

function animateNumberInterval(from: number, to: number, duration = 1000, onUpdate: (value: number) => void, steps = 60) {
    const stepTime = duration / steps;
    let i = 0;
    const inc = 1 / steps;
    const interval = setInterval(() => {
        i++;
        const t = Math.min(i * inc, 1);
        const value = from + (to - from) * t;
        onUpdate(value);
        if (t >= 1) clearInterval(interval);
    }, stepTime);
    return () => clearInterval(interval);
}