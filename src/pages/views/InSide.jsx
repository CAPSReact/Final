import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { InHouse } from "../../components/3d/InHouse";
import { Wrapper, Box, InGameButtonStyle } from "../../styles/style";
import Loading from "../../components/spinner/Loading";

// redux
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../items/breadSlice";
import { addItem } from "../../items/listSlice";

export default function InSide() {
  const dispatch = useDispatch();
  const showOrigin = useSelector(state => state.bread.value);
  console.log(showOrigin);

  const [loading, setLoading] = useState(false);

  const handleOrigin = () => {
    setLoading(true);

    setTimeout(() => {
      // store의 상태를 변경한다.
      dispatch(toggle());
      // item 추가
      dispatch(addItem());
      setLoading(false);
    }, 2000); // 2초 후에 실행
  };

  return (
    <>
      <Wrapper>
        {loading && <Loading loadingText={"빵을 생성하고 있습니다..."}/>}
        <Box>
          <Canvas camera={{ position: [10, 200, -400] }}>
            <OrbitControls />
            <axesHelper args={[200, 200, 200]} />
            <ambientLight intensity={3} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <group rotation-y={-Math.PI / 2}>
              <InHouse showOrigin={showOrigin}/>
            </group>
          </Canvas>
          <InGameButtonStyle onClick={handleOrigin}>식빵 제작하기</InGameButtonStyle>
        </Box>
      </Wrapper>
    </>
  );
}
