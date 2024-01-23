import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	// 희망하는 전역 스타일 정의
		body {
		font-size: 16px;
		}
		button {
		outline: none;
		border: none;
		}
		
		input {
		outline: none;
		border: none;
		}
`;

export default GlobalStyle;
