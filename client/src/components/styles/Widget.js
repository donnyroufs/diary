import { Link } from "react-router-dom";
import styled from "styled-components";

export const Widget = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin: 4rem 0rem;
    flex: ${(props) => (props.size === "big" ? 3 : 2)};

    @media screen and (min-width: 968px) {
        max-width: ${(props) => (props.size === "big" ? "55%" : "40%")};
        box-shadow: 4px 10px 14px 4px rgba(0, 0, 0, 0.05);
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
`;

Widget.Item = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 1.25rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.gray};
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
