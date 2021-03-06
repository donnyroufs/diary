import React from "react";
import { useSelector } from "react-redux";
import heroImage from "../assets/images/hero-image.svg";
import * as Styled from "./styles/Banner";
import { Highlight } from "./styles/Utilities";

const Banner = () => {
    const { todos } = useSelector((state) => state.todos);

    const percentageDone = () => {
        const _todos = todos.length;
        const _completed = todos.filter((todo) => todo.completed).length;
        return ((_completed / _todos) * 100).toFixed(0);
    };

    return (
        <Styled.Banner>
            <Styled.Banner.ImageWrapper>
                <Styled.Banner.Image src={heroImage} />
            </Styled.Banner.ImageWrapper>
            <Styled.Banner.Wrapper>
                <Styled.Banner.Title>Welcome back Donny!</Styled.Banner.Title>
                <Styled.Banner.Paragraph>
                    {todos.length > 0 ? (
                        <React.Fragment>
                            You have completed <Highlight>{percentageDone()}%</Highlight> of your todos today!
                            <br /> Keep it up and get the last ones done!
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            Looks like you have no todos for today! <br />
                            Perhaps you can think of something?
                        </React.Fragment>
                    )}
                </Styled.Banner.Paragraph>
            </Styled.Banner.Wrapper>
        </Styled.Banner>
    );
};

export default Banner;
