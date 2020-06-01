import React, { useState } from "react";
import * as Styled from "./styles/Tabs";

const Tabs = ({ children }) => {
    const [current, setCurrent] = useState(0);

    return <Styled.Tabs>{children}</Styled.Tabs>;
};

export default Tabs;
