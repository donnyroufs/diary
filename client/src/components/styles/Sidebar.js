import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { headerHeight } from "./Header";
import global from "../../GlobalStyles";

/* use . to repeat the last edit in VIM */

const { colours, typography } = global;

export const sidebarWidth = 400;

export const Sidebar = styled.aside`
    position: fixed;
    display: flex;
    flex-flow: column nowrap;
    background: ${({ theme }) => theme.darkBlue};
    width: 100vw;
    height: 100vh;
    top: 0;
    left: ${(props) => (props.open ? "0px" : "-100vw")};
    z-index: 5;
    transition: all 0.3s ease-in;

    @media screen and (min-width: 968px) {
        width: ${sidebarWidth}px;
        left: 0;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${headerHeight};
    padding: 0 3rem;

    @media screen and (min-width: 968px) {
        margin-top: 1.5rem;
    }
`;

export const Logo = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.lightBlue};
    font-size: 2rem;
    font-weight: bold;
`;

export const Navbar = styled.nav`
    margin-top: 3rem;
`;

export const Menu = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
`;

export const Link = styled(NavLink)`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.lightBlue};
    opacity: 0.8;
    text-decoration: none;
    padding: 1rem 3rem;
    width: 100%;
    transition: 0.2s ease-in-out all;
    text-transform: capitalize;

    &.active {
        opacity: 1;
        color: #fff;
        background: ${({ theme }) => theme.activeLink};
    }

    &:hover {
        color: #fff;
        background: ${({ theme }) => theme.activeLink};
    }

    @media screen and (min-width: 968px) {
        width: 80%;
    }
`;
