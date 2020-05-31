import React from "react";
import * as Styled from "./styles/Widget";
import { FaLongArrowAltRight } from "react-icons/fa";

const Widget = ({ link, title, subTitle, items, href }) => {
    return (
        <Styled.Widget>
            <Styled.Widget.Wrapper>
                <h1>
                    {title} {subTitle}
                </h1>
                <Styled.Widget.Link to={href}>
                    {link} <FaLongArrowAltRight className="ml-2" />
                </Styled.Widget.Link>
            </Styled.Widget.Wrapper>
            <Styled.Widget.Menu>
                {items.map(({ id, title }) => (
                    <Styled.Widget.Item key={id}>{title}</Styled.Widget.Item>
                ))}
            </Styled.Widget.Menu>
        </Styled.Widget>
    );
};

export default Widget;
