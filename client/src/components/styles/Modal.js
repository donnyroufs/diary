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
        justify-content: center;
        left: 200px;
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
    z-index: 5;

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

Modal.Title = styled.h1`
    ${({ theme }) => css`
        color: ${theme.darkBlue};
        text-transform: uppercase;
        text-align: center;
        margin: 2rem 0;
    `}
`;
