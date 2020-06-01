import styled from "styled-components";
import GlobalStyles from "../../GlobalStyles";

export const Highlight = styled.strong`
    color: ${({ theme }) => theme.blue};
`;

export const Button = styled.button`
    background: ${({ theme }) => theme.darkBlue};
    color: ${({ theme }) => theme.lightBlue};
    border: 0;
    outline: none;
    padding: 0.8rem 1.2rem;
    font-weight: ${(props) => (props.primary ? "bold" : "regular")};
    font-size: 0.9rem;
    text-transform: uppercase;
`;
