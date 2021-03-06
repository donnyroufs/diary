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
    
    html, body, #root, #app {
        @media screen and (min-width: 968px) {
            height: 100%;
        }
    }

    body {
        margin: 0;
        font-family: "Poppins", sans-serif;
        color: ${theme.black};

    }

    #app {
        display: flex;
        margin: 0 0 4rem 0;

        @media screen and (min-width: 968px) {
            margin: 0;
            justify-content: center;
        }
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
    
    .mt-02 {
        margin-top: 1px;
        
        @media screen and (min-width: 968px) {
            margin-top: 2px;
        }
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
        margin-left: .5rem;
    }

    .todo-icon--danger {
        color: ${theme.red};
    }
    .toast {
        padding: 2rem;
    }

    textarea:focus, input:focus {
        outline: none;
    }

    input::placeholder, textarea::placeholder {
        color: ${theme.opacityBlue};
        font-weight: 500;
    }
`;
