import React from "react";
import * as Styled from "./styles/Tabs";

const Tab = ({ title, current, setCurrent }) => {
    const toggleCurrent = (e) => {
        setCurrent(title);
    };

    return (
        <Styled.Tabs.Tab onClick={toggleCurrent} active={current === title}>
            {title}
        </Styled.Tabs.Tab>
    );
};
export default Tab;
