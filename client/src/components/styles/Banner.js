import styled from "styled-components";

export const Banner = styled.section`
    display: flex;
    flex-flow: row wrap;
    background-color: ${({ theme }) => theme.lightBlue};
    padding: 1rem 0;
    width: 100%;
    margin-top: 50px;

    @media screen and (min-width: 968px) {
        max-height: 220px;
        border-radius: ${({ theme }) => theme.borderRadius};
    }
`;

Banner.ImageWrapper = styled.div`
    flex: 1;
    order: 1;

    @media screen and (min-width: 968px) {
        order: 2;
        position: relative;
    }
`;

Banner.Image = styled.img`
    height: 100%;
    width: 100%;
    mix-blend-mode: darken;
    min-width: 414px;

    @media screen and (min-width: 968px) {
        height: 550px;
        position: absolute;
        top: -250px;
    }
`;

Banner.Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    margin: 0 1.55rem;
    padding-bottom: 2rem;
    flex: 1;
    order: 2;
    justify-content: center;

    @media screen and (min-width: 968px) {
        order: 1;
        padding: 1rem 0;
    }
`;

Banner.Title = styled.h2`
    color: ${({ theme }) => theme.blue};
    margin-bottom: 0;
`;

Banner.Paragraph = styled.p`
    line-height: 1.95em;
    color: ${({ theme }) => theme.black};
    font-size: 0.9rem;

    @media screen and (min-width: 968px) {
        font-size: 1rem;
        letter-spacing: 0.04em;
    }
`;
