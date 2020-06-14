import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Ellipsis } from "react-awesome-spinners";
import * as Styled from "../styles/Widget";

const Widget = ({ children, size, loading, error, title, link = "more", href, count = 0, message = "" }) => {
    const render = () => {
        if (loading) {
            return <Ellipsis />;
        } else if (error) {
            return <Styled.Widget.Item danger>Something went wrong...</Styled.Widget.Item>;
        } else if (count <= 0) {
            return <Styled.Widget.Item info>{message}</Styled.Widget.Item>;
        } else {
            return children;
        }
    };

    return (
        <Styled.Widget size={size}>
            <Styled.Widget.Wrapper>
                <Styled.Widget.Title>{title}</Styled.Widget.Title>
                <Styled.Widget.Link to={href}>
                    {link} <FaLongArrowAltRight className="ml-2 mt-02" />
                </Styled.Widget.Link>
            </Styled.Widget.Wrapper>
            {render()}
        </Styled.Widget>
    );
};

export default Widget;
