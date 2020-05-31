import React, { useState } from "react";
import Sidebar from "./Sidebar";
import * as styled from "./styles/Layout";
import Header from "./Header";

const Layout = ({ children }) => {
    const { Container, Main } = styled;

    const [open, setOpen] = useState(false);

    return (
        <div id="app">
            <Sidebar open={open} />
            <Container>
                <Header setOpen={setOpen} />
                <Main>{children}</Main>
            </Container>
        </div>
    );
};

export default Layout;
