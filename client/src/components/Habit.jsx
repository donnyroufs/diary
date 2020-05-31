import React from "react";
import * as Styled from "./styles/Habit";

/* @TODO: Danger prop */

const Habit = ({ danger }) => {
    return (
        <Styled.Habit>
            <Styled.Habit.Streak>0</Styled.Habit.Streak>
            <Styled.Habit.Title>lorem ipsum do</Styled.Habit.Title>
        </Styled.Habit>
    );
};

export default Habit;
