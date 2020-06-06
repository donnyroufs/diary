import styled from "styled-components";

export const headerHeight = "120px";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${headerHeight};
    margin: 0 2rem;

    @media screen and (min-width: 968px) {
        margin: 1.5rem 0;
        min-height: 120px;
    }
`;

export const Title = styled.h3`
    display: none;
    @media screen and (min-width: 968px) {
        display: flex;
        font-weight: 500;
        text-transform: capitalize;
    }
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
    letter-spacing: 0.05em;
`;
