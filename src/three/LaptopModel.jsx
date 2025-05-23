import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import LaptopPage from "../components/LaptopPage";

export default function LaptopModel(props) {
  const group = useRef();
  const scrollableDivRef = useRef();

  // Load model
  const { nodes, materials } = useGLTF("/mac-draco.glb");

  // Make it float and rotate
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 20,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 8) / 20,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-2 + Math.sin(t / 2)) / 2,
      0.1
    );
  });

  // Add and remove "no-scroll" class for body when interacting
  useEffect(() => {
    const onPointerEnter = () => {
      document.body.classList.add("no-scroll");
    };
    const onPointerLeave = () => {
      document.body.classList.remove("no-scroll");
    };

    const scrollableDiv = scrollableDivRef.current;
    if (scrollableDiv) {
      scrollableDiv.addEventListener("pointerenter", onPointerEnter);
      scrollableDiv.addEventListener("pointerleave", onPointerLeave);
    }

    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener("pointerenter", onPointerEnter);
        scrollableDiv.removeEventListener("pointerleave", onPointerLeave);
      }
    };
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes.Cube008.geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes.Cube008_1.geometry}
          />
          <mesh geometry={nodes.Cube008_2.geometry}>
            <Html
              className="w-[412px] h-[264px] rounded-[3px] overflow-y-auto p-0 m-0 scrollable-container overflow-x-hidden"
              rotation-x={-Math.PI / 2}
              position={[0, 0.05, -0.09]}
              scale={0.8}
              transform
              occlude
            >
              <div
                ref={scrollableDivRef}
                className="w-[823px] h-[532px] scale-[0.5] origin-top-left"
                onPointerDown={(e) => e.stopPropagation()}
              >
                <LaptopPage />
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes.Cube002.geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes.Cube002_1.geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
}
