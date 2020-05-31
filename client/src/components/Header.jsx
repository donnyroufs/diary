import React, { useState } from "react";
import * as Styled from "./styles/Header";
import todaysDate from "../utils/todaysDate";
import { Hamburger } from "./styles/Header";
import hamburgerIcon from "../assets/images/hamburger.svg";

const Header = ({ setOpen }) => {
    const toggleSidebar = (e) => setOpen((oldValue) => !oldValue);

    return (
        <Styled.Header>
            <Hamburger src={hamburgerIcon} onClick={toggleSidebar} />
            <Styled.Time>{todaysDate()}</Styled.Time>
        </Styled.Header>
    );
};

export default Header;
