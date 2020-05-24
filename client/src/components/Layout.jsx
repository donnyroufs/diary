import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <div id="app">
            <Sidebar />
            <main class="container">{children}</main>
        </div>
    );
};

export default Layout;
