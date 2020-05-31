import React from "react";
import * as Styled from "./styles/Widget";
import { FaLongArrowAltRight } from "react-icons/fa";

const Widget = ({ link, title, subTitle, items, href, size }) => {
    return (
        <Styled.Widget size={size}>
            <Styled.Widget.Wrapper>
                <Styled.Widget.Title>
                    {title} {subTitle}
                </Styled.Widget.Title>
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
