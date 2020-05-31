import styled from "styled-components";
import { headerHeight } from "./Header";
import global from "../../GlobalStyles";

/* use . to repeat the last edit in VIM */

const { colours, typography } = global;

export const sidebarWidth = "400px";

export const Sidebar = styled.aside`
    position: fixed;
    display: flex;
    flex-flow: column nowrap;
    background: ${colours.darkBlue};
    width: 100vw;
    height: 100vh;
    top: 0;
    left: ${(props) => (props.open ? "0px" : "-100vw")};
    z-index: 5;
    padding: 0 3rem;
    transition: all 0.3s ease-in;

    @media screen and (min-width: 968px) {
        width: ${sidebarWidth};
        left: 0;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${headerHeight};
`;

export const Logo = styled.a`
    text-decoration: none;
    color: ${colours.lightBlue};
    font-weight: ${typography.h1["font-weight"]};
    font-size: ${typography.h1["font-size"]};
`;

export const Navbar = styled.nav``;

export const Menu = styled.ul``;

export const Item = styled.li``;

export const Link = styled.a``;
