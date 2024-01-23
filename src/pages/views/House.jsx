import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import { InHouse } from "../../components/3d/InHouse";

export default function View() {
  return (
    <>
      <Canvas camera={{ position: [20, 5, -8] }}>
        <OrbitControls />
        <axesHelper args={[200, 200, 200]} />
        <ambientLight intensity={3} />
        <group rotation-y={-Math.PI / 2}>
          <InHouse />
        </group>
      </Canvas>
    </>
  );
}
