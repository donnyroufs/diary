import React from "react";
import * as Styled from "./styles/Tabs";

const Tab = ({ title, isActive }) => {
    return <Styled.Tabs.Tab>{title}</Styled.Tabs.Tab>;
};
export default Tab;
