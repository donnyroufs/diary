import styled, { css } from "styled-components";
export const Modal = styled.div`
    display: none;
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 100;

    ${({ isOpen }) =>
        isOpen &&
        css`
            display: flex;
            align-items: center;
        `}

    @media screen and (min-width: 968px) {
        width: calc(100% - 400px);
    }
`;

Modal.Overlay = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    ${({ isOpen }) =>
        isOpen &&
        css`
            display: block;
        `}
`;

Modal.Inner = styled.div`
    ${({ theme }) => css`
        background: ${theme.white};
        height: 100%;
        width: 100%;
        padding: 4rem 2rem;
        @media screen and (min-width: 968px) {
            height: auto;
            width: 1000px;
            border-radius: ${theme.borderRadius};
            padding: 4rem 8rem;
        }
    `}
`;

// export const Modal = styled.div`
//     display: none;
//     background: white;
//     height: 100%;
//     width: 100%;

//     ${({ isOpen }) =>
//         isOpen &&
//         css`
//             display: flex;
//             position: fixed;
//             align-items: center;
//             flex-flow: column nowrap;
//             top: 0;
//         `}

//     @media screen and (min-width: 968px) {
//         position: relative;
//         border-radius: ${({ theme }) => theme.borderRadius};
//     }
// `;

Modal.Title = styled.h1`
    ${({ theme }) => css`
        color: ${theme.darkBlue};
        text-transform: uppercase;
        text-align: center;
        margin: 2rem 0;
    `}
`;

// Modal.Overlay = styled.div`
//     display: none;
//     ${({ isOpen }) =>
//         isOpen &&
//         css`
//             display: flex;
//             position: fixed;
//             top: 0;
//             height: 100%;
//             width: 100%;
//             background-color: ${({ theme }) => theme.darkBlue};
//             opacity: 0.6;
//         `}

//     @media screen and (min-width: 968px) {
//         left: 0;
//     }
// `;

// Modal.Inner = styled.div``;

// Modal.Form = styled.form`
//     ${({ theme }) => css`
//         z-index: 5;
//         display: flex;
//         flex-flow: column nowrap;
//         background: ${theme.white};
//         border-radius: ${theme.borderRadius};
//         height: 100%;
//         margin-top: 2rem;
//         width: 80%;

//         @media screen and (min-width: 968px) {
//             width: 60%;
//             padding: 0rem 2rem 4rem 2rem;
//         }
//     `}
// `;
