import { Link } from "react-router-dom";
import styled from "styled-components";

export const Widget = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin: 4rem 0rem;
`;

Widget.Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

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
