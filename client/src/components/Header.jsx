import React, { useState } from "react";
import * as Styled from "./styles/Header";
import todaysDate from "../utils/todaysDate";
import { Hamburger } from "./styles/Header";
import hamburgerIcon from "../assets/images/hamburger.svg";
import { useLocation } from "react-router-dom";

const Header = ({ setOpen }) => {
    const location = useLocation();

    const toggleSidebar = (e) => setOpen((oldValue) => !oldValue);

    return (
        <Styled.Header>
            <Hamburger src={hamburgerIcon} onClick={toggleSidebar} />
            <Styled.Title>{location.pathname === "/" ? "overview" : location.pathname.substr(1)}</Styled.Title>
            <Styled.Time>{todaysDate()}</Styled.Time>
        </Styled.Header>
    );
};

export default Header;
