import React, { useState } from "react";
import Sidebar from "./Sidebar";
import * as styled from "./styles/Layout";
import Header from "./Header";
import { ToastsStore, ToastsContainer } from "react-toasts";

const Layout = ({ children }) => {
    const { Container, Main } = styled;

    const [open, setOpen] = useState(false);

    return (
        <div id="app">
            <ToastsContainer store={ToastsStore} className="toast" />
            <Sidebar open={open} setOpen={setOpen} />
            <Container>
                <Header setOpen={setOpen} />
                <Main>{children}</Main>
            </Container>
        </div>
    );
};

export default Layout;
