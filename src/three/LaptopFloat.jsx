import React,{Suspense} from 'react'
import LaptopModel from './LaptopModel';
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei";

function LaptopFloat() {
    return (
      <div className="relative w-full  max-w-[750px] h-[400px] md:h-[500px] lg:h-screen flex items-center justify-center overflow-hidden pointer-events-none">
        <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={null}>
            <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
              <LaptopModel />
            </group>
            <Environment preset="city" />
          </Suspense>
          <ContactShadows position={[0, -3, 0]} scale={20} blur={2} far={4.5} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </div>
    );
}

export default LaptopFloat