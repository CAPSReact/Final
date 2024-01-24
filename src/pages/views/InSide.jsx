import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { InHouse } from "../../components/3d/InHouse";
import { Wrapper, Box } from "../../styles/style";

export default function InSide() {
  return (
    <>
      <Wrapper>
        <Box>
          <Canvas camera={{ position: [10, 200, -400] }}>
            <OrbitControls />
            <axesHelper args={[200, 200, 200]} />
            <ambientLight intensity={3} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <group rotation-y={-Math.PI / 2}>
              <InHouse />
            </group>
          </Canvas>
        </Box>
      </Wrapper>
    </>
  );
}
