import styled, { css } from "styled-components";

export const Header = styled.header`
    display: flex;
    margin: 2rem;

    @media screen and (min-width: 968px) {
        margin: 0 0 2rem 0;
    }
`;

export const Container = styled.section`
    display: flex;
    flex-flow: column nowrap;
    margin: 0 2rem;
    height: 100%;

    @media screen and (min-width: 968px) {
        margin: 0;
        flex-flow: row nowrap;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
`;

export const Column = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;

    ${({ isLoading }) =>
        isLoading &&
        css`
            justify-content: center;
            align-items: center;
            height: 250px;
        `}
    @media screen and (min-width: 968px) {
        max-width: 380px;
        margin-right: 4rem;
    }
`;
