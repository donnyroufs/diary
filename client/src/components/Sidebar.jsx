import React from "react";
import * as Styled from "./styles/Sidebar";
import { Hamburger } from "./styles/Header";
import hamburgerIcon from "../assets/images/hamburger-light.svg";
import Routes from "../routes";
import { IconContext } from "react-icons";

const Sidebar = ({ open, setOpen }) => {
    const toggleSidebar = (e) => setOpen((oldValue) => !oldValue);

    return (
        <IconContext.Provider value={{ className: "link-icons" }}>
            <Styled.Sidebar open={open}>
                <Styled.Header>
                    <Styled.Logo>Diary</Styled.Logo>
                    <Hamburger src={hamburgerIcon} onClick={toggleSidebar} />
                </Styled.Header>
                <Styled.Navbar>
                    <Styled.Menu>
                        {Routes.map(({ icon, route }) => (
                            <Styled.Item>
                                <Styled.Link exact to={route === "overview" ? "/" : route} onClick={toggleSidebar}>
                                    <span className="mr-2">{icon}</span>
                                    {route}
                                </Styled.Link>
                            </Styled.Item>
                        ))}
                    </Styled.Menu>
                </Styled.Navbar>
            </Styled.Sidebar>
        </IconContext.Provider>
    );
};

export default Sidebar;
