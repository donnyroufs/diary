import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    margin: 0 2rem 2rem 2rem;

    @media screen and (min-width: 968px) {
        margin: 0 0 2rem 0;
    }
`;

export const Container = styled.section`
    display: flex;
    flex-flow: column wrap;
    margin: 0 2rem;
    justify-content: ${(props) => (props.isLoading ? "center" : "flex-start")};
    align-items: ${(props) => (props.isLoading ? "center" : "flex-start")};
    height: ${(props) => (props.isLoading ? "250px" : "100%")};

    @media screen and (min-width: 968px) {
        margin: 0;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
`;
