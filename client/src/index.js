import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
import GlobalStyle from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
