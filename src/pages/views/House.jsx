import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { InHouse } from "../../components/3d/InHouse";
import { Wrapper, Box } from "../../styles/style";
import { OutHouse } from "../../components/3d/OutHouse";

/* 줌 컨트롤러 확인 필요 */
function ZoomControl() {
  const { camera, gl } = useThree();

  useEffect(() => {
    const handleWheel = (event) => {
      camera.zoom += event.deltaY * -0.01;
      camera.zoom = Math.max(Math.min(camera.zoom, 10), 1); // 줌 범위 제한
      camera.updateProjectionMatrix();
    };

    gl.domElement.addEventListener("wheel", handleWheel);

    return () => {
      gl.domElement.removeEventListener("wheel", handleWheel);
    };
  }, [camera, gl.domElement]);

  return null;
}

export default function View() {
  return (
    <>
      <Wrapper>
        <Box>
          <Canvas camera={{ position: [80, 5, -8] }}>
            <ZoomControl />
            <OrbitControls />
            <axesHelper args={[200, 200, 200]} />
            <ambientLight intensity={3} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <group rotation-y={-Math.PI / 2}>
              <OutHouse />
            </group>
          </Canvas>
        </Box>
      </Wrapper>
    </>
  );
}
