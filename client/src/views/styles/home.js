import styled from "styled-components";

export const Widgets = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin: 0 2rem;

    @media screen and (min-width: 968px) {
        flex-flow: row nowrap;
        justify-content: space-between;
        margin: 2rem 0;
    }
`;

export const Habbits = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin: 0 2rem;

    @media screen and (min-width: 968px) {
        margin: 1rem 0;
    }
`;

export const Title = styled.h2`
    margin: 0;
`;
export const Wrapper = styled.div`
    @media screen and (min-width: 968px) {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }
`;
