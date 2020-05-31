import React from "react";
import * as Styled from "./styles/Sidebar";
import { Hamburger } from "./styles/Header";
import hamburgerIcon from "../assets/images/hamburger-light.svg";

const Sidebar = ({ open, setOpen }) => {
    const toggleSidebar = (e) => setOpen((oldValue) => !oldValue);

    return (
        <Styled.Sidebar open={open}>
            <Styled.Header>
                <Styled.Logo>Diary</Styled.Logo>
                <Hamburger src={hamburgerIcon} onClick={toggleSidebar} />
            </Styled.Header>
        </Styled.Sidebar>
    );
};

export default Sidebar;
