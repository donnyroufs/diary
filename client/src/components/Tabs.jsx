import React, { useState } from "react";
import Tab from "./Tab";
import * as Styled from "./styles/Tabs";

const Tabs = ({ children }) => {
    return <Styled.Tabs>{children}</Styled.Tabs>;
};

export default Tabs;
