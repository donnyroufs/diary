import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Widget = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin: 3rem 0rem;
    flex: ${(props) => (props.size === "big" ? 3 : 2)};

    @media screen and (min-width: 968px) {
        max-width: ${(props) => (props.size === "big" ? "55%" : "40%")};
        box-shadow: 4px 10px 14px 4px rgba(0, 0, 0, 0.02);
        padding: 2rem;
        min-height: 500px;
    }
`;

Widget.Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

Widget.Title = styled.h2``;

Widget.Menu = styled.ul`
    list-style: none;
    margin: 0.75rem 0 0 0;
    padding: 0;

    @media screen and (min-width: 968px) {
        padding-bottom: 2rem;
    }
`;

Widget.Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.1rem 0;
    border-bottom: ${({ theme, empty, danger }) => (empty || danger ? "none" : `1px solid ${theme.gray}`)};
    color: ${({ danger, theme }) => danger && theme.red};

    ${({ theme, info }) =>
        info &&
        css`
            color: ${theme.blue};
            border-bottom: none;
        `}
`;

Widget.Span = styled.span`
    transition: 0.2s ease-in-out all;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

Widget.Link = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: ${({ theme }) => theme.darkGray};
    letter-spacing: 0.04em;
    text-transform: capitalize;
    font-size: 0.85rem;

    &:hover {
        text-decoration: underline;
    }
`;
