import React from "react";
import * as Styled from "./styles/Widget";
import { FaLongArrowAltRight } from "react-icons/fa";
import WidgetTodo from "./WidgetTodo";

const Widget = ({ link, title, subTitle, items, href, size }) => {
    return (
        <Styled.Widget size={size}>
            <Styled.Widget.Wrapper>
                <Styled.Widget.Title>
                    {title} {subTitle}
                </Styled.Widget.Title>
                <Styled.Widget.Link to={href}>
                    {link} <FaLongArrowAltRight className="ml-2 mt-02" />
                </Styled.Widget.Link>
            </Styled.Widget.Wrapper>
            <Styled.Widget.Menu>
                {!items && <Styled.Widget.Item danger>Something went wrong...</Styled.Widget.Item>}
                {items && items.length < 1 && <Styled.Widget.Item empty>{title} seems to be empty.</Styled.Widget.Item>}
                {items && items.filter((item) => item.completed).length <= 0 && (
                    <Styled.Widget.Item info>You've completed all {title} for today!</Styled.Widget.Item>
                )}
                {items &&
                    items.length > 0 &&
                    items
                        .filter(({ completed }) => completed)
                        .map((todo) => <WidgetTodo {...todo} widgetTitle={title} />)}
            </Styled.Widget.Menu>
        </Styled.Widget>
    );
};

export default Widget;
