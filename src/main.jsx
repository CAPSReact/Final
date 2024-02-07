import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/GlobalStyle.js";
import theme from "./styles/theme.js";
import { ThemeProvider } from "styled-components";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// redux용
import { Provider } from 'react-redux';
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>
  </Provider>
);
