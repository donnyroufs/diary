import React from "react";
import heroImage from "../assets/images/hero-image.svg";
import * as Styled from "./styles/Banner";
import { Highlight } from "./styles/Utilities";

const Banner = () => {
    return (
        <Styled.Banner>
            <Styled.Banner.ImageWrapper>
                <Styled.Banner.Image src={heroImage} />
            </Styled.Banner.ImageWrapper>
            <Styled.Banner.Wrapper>
                <Styled.Banner.Title>Welcome back Donny!</Styled.Banner.Title>
                <Styled.Banner.Paragraph>
                    You have completed <Highlight>70%</Highlight> of your todos today!
                    <br /> Keep it up and get the last ones done!
                </Styled.Banner.Paragraph>
            </Styled.Banner.Wrapper>
        </Styled.Banner>
    );
};

export default Banner;
