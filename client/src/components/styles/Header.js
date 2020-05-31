import styled from "styled-components";

export const headerHeight = "120px";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${headerHeight};
`;

export const Title = styled.h3`
    font-weight: bold;
`;

export const Hamburger = styled.img`
    height: 32px;
    width: 32px;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    &:hover {
        opacity: 0.7;
    }

    @media screen and (min-width: 968px) {
        display: none;
    }
`;

export const Time = styled.div`
    margin-left: auto;
`;
