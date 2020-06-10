import styled, { css } from "styled-components";

export const Highlight = styled.strong`
    color: ${({ theme }) => theme.blue};
`;

export const Button = styled.button`
    background: ${({ theme }) => theme.darkBlue};
    color: ${({ theme }) => theme.white};
    border: 0;
    outline: none;
    padding: 0.8rem 1.2rem;
    font-weight: ${(props) => (props.primary ? "bold" : "regular")};
    font-size: 0.9rem;
    text-transform: uppercase;
    width: 100%;
    border-radius: 7px;
    cursor: pointer;

    ${({ secondary }) =>
        secondary &&
        css`
            background: transparent;
            border: ${({ theme }) => `1px solid ${theme.gray}`};
            margin-top: 0.5rem;
            color: ${({ theme }) => theme.darkBlue};
            font-weight: bold;
        `}

    ${({ icon }) =>
        icon &&
        css`
            background: transparent;
            padding: 0;
            width: auto;
            transition: 0.2s ease-in-out all;

            &:hover {
                opacity: 0.6;
            }
        `}
`;

export const Form = styled.form``;

Form.Group = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-flow: column nowrap;
        border: 1px solid ${theme.gray};
        border-radius: ${theme.borderRadius};
        position: relative;
        margin-bottom: 1rem;
    `}

    ${({ text }) =>
        text &&
        css`
            margin-bottom: 2rem;
        `}
`;

Form.Label = styled.label`
    ${({ theme }) => css`
        text-transform: uppercase;
        color: ${theme.secondaryBlue};
        position: absolute;
        top: 14px;
        left: 2rem;
        font-weight: bold;
        letter-spacing: 0.03em;
        font-size: 12px;
    `}
`;

Form.Input = styled.input`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        padding: 1.1rem 2rem 0 2rem;
        height: 66px;
        font-weight: 500;
        border: none;
        background: transparent;
        /* text-transform: uppercase; */
        letter-spacing: 0.03em;
        font-size: 16px;
        color: ${theme.opacityBlue};
        &::placeholder {
            text-transform: uppercase;
        }
    `}
`;

Form.TextArea = styled.textarea`
    ${({ theme }) => css`
        resize: none;
        min-height: 200px;
        border: none;
        padding: 2.2rem 2rem;
        background: transparent;
        letter-spacing: 0.03em;
        color: ${theme.opacityBlue};

        &::placeholder {
            text-transform: uppercase;
        }
    `}
`;

export const Message = styled.div`
    ${({ theme, info }) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80px;
        border-radius: ${theme.borderRadius};
        margin-bottom: ${(props) => props["mb-2"] && "2rem"};

        ${info &&
        css`
            background-color: ${theme.lightBlue};
        `}
    `}
`;
