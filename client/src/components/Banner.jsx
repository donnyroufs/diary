import React from "react";
import { useSelector } from "react-redux";
import heroImage from "../assets/images/hero-image.svg";
import * as Styled from "./styles/Banner";
import { Highlight } from "./styles/Utilities";

const Banner = () => {
    const { todosByDate: todos } = useSelector((state) => state.todos);

    const percentageDone = () => {
        const _todos = todos.length;
        const _completed = todos.filter((todo) => todo.completed).length;
        return ((_completed / _todos) * 100).toFixed(2);
    };

    return (
        <Styled.Banner>
            <Styled.Banner.ImageWrapper>
                <Styled.Banner.Image src={heroImage} />
            </Styled.Banner.ImageWrapper>
            <Styled.Banner.Wrapper>
                <Styled.Banner.Title>Welcome back Donny!</Styled.Banner.Title>
                <Styled.Banner.Paragraph>
                    You have completed <Highlight>{percentageDone()}%</Highlight> of your todos today!
                    <br /> Keep it up and get the last ones done!
                </Styled.Banner.Paragraph>
            </Styled.Banner.Wrapper>
        </Styled.Banner>
    );
};

export default Banner;
