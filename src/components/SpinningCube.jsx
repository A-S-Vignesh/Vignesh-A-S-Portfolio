import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Cube = () => {
  const cubeRef = useRef();

  // Rotate the cube on each frame
  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const SpinningCube = () => {
    return (
      <div className="absolute">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Cube />
        </Canvas>
      </div>
    );
};

export default SpinningCube;
