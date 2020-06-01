import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import theme from "./theme";

export default createGlobalStyle`
    ${normalize}

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Poppins", sans-serif;
        color: ${theme.black};
    }

    #app {
        display: flex;
        margin: 0 0 4rem 0;
    }

    .link-icons {
        height: 32px;
        width: 32px;
        margin-bottom: -0.2rem;
    }

    .mr-2 {
        margin-right: 2rem;
    }
    
    .ml-2 {
        margin-left: .5rem;
    }

    h1 {
        font-size: 2rem;
        font-weight: bold;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: semi-bold;
    }

    .todo-icon {
        height: 22px;
        width: 22px;
        color: ${theme.darkBlue}; 
    }
`;
