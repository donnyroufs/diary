import React from "react";
import * as Styled from "./styles/Widget";
import { FaLongArrowAltRight } from "react-icons/fa";
import WidgetTodo from "./WidgetTodo";
import { Ellipsis } from "react-awesome-spinners";

const Widget = ({ link, title, subTitle, items, href, size, error, loading }) => {
    const renderItems = () => {
        if (error) {
            return <Styled.Widget.Item danger>Something went wrong...</Styled.Widget.Item>;
        }
        if (items && items.length < 1) {
            return <Styled.Widget.Item info>You have no {title} for today!</Styled.Widget.Item>;
        } else if (items && items.filter((item) => !item.completed).length <= 0) {
            return <Styled.Widget.Item info>You've completed all {title} for today!</Styled.Widget.Item>;
        } else {
            return items
                .filter(({ completed }) => !completed)
                .map((todo) => <WidgetTodo {...todo} widgetTitle={title} key={todo.id} />);
        }
    };

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
            <Styled.Widget.Menu>{loading ? <Ellipsis /> : renderItems()}</Styled.Widget.Menu>
        </Styled.Widget>
    );
};

export default Widget;
