import styled, { keyframes } from "styled-components";

// 페이드 애니메이션 키프레임
const FadeIn = () => keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  max-width: 390px;
  background-color: #f9faff;
  align-items: center;
  text-align: center;
`;

export const Box = styled.div`
  margin-top: 50vh;
  width: 100vw;
  height: 100vh;
`;

export const ButtonStyle = styled.div`
  width: 100px;
  height: 50px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.darkGray};
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.gray};
  animation: ${FadeIn()} 2s ease-out;
`;
