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
