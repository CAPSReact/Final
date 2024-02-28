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

/* 전체 */
export const Wrapper = styled.div`
box-sizing: border;
  position: relative;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 390px;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  text-align: center;
`;

export const ButtonStyle = styled.div`
  width: 50%;
  text-align: center;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.marin};
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  border-radius: 10px;
  margin-top: ${(props) => props.top || "20px"};
  cursor: pointer;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.marin};
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  margin-top: ${(props) => props.top};
`;

export const Introduce = styled.div`
  color: ${({ theme }) => theme.colors.marin};
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  margin-top: 5px;
`;

export const Select = styled.select`
  width: 80%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.marin};
  border-radius: 10px;
  padding: 5px 10px;
  margin-top: ${(props) => props.top};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.marin};
  margin-top: 5px;
  outline: none;
`;

export const Label = styled.label`
  width: 75%;
  text-align: left;
  color: ${({ theme }) => theme.colors.marin};
  font-size: 14px;
  font-weight: 400;
  margin-top: ${(props) => props.top};
`;

export const Input = styled.input`
  width: 75%;
  border: 1px solid ${({ theme }) => theme.colors.marin};
  border-radius: 10px;
  font-size: 15px;
  padding: 10px 10px;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.marin};

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.gray};
  animation: ${FadeIn()} 2s ease-out;
`;

/* canvas 속성 */
export const Box = styled.div`
  width: 100%;
  max-width: 390px;
  height: 100%;
  box-sizing: border;
`;

/* sign */

/* 3d pages */
export const InGameButtonStyle = styled.div`
  position: absolute;
  width: 50%;
  text-align: center;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.marin};
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  border-radius: 10px;
  bottom: 200px;
  left: 0;
  right: 0;
  margin: 0 auto;
  cursor: pointer;
`;