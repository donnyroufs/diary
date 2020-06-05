import React, { Children, cloneElement } from "react";
import * as Styled from "./styles/Tabs";

const Tabs = ({ children, ...props }) => {
    return (
        <Styled.Tabs>
            {Children.map(children, (child, index) => cloneElement(child, { ...props, tabIndex: index }))}
        </Styled.Tabs>
    );
};

export default Tabs;
