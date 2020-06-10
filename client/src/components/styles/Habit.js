import styled from "styled-components";

export const Habit = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 0 2rem;
    background: ${({ theme, danger }) => (danger ? theme.red : theme.darkBlue)};
    border-radius: 6px;
    margin-top: 3rem;

    @media screen and (min-width: 968px) {
        width: 31%;
    }
`;

Habit.Streak = styled.h1`
    background-color: ${({ theme, danger }) => (danger ? theme.opacityRed : theme.secondaryBlue)};
    border-radius: 6px;
    padding: 1rem 1.5rem;
    color: #fff;
`;

Habit.Title = styled.h3`
    color: ${({ theme, danger }) => (danger ? "#fff" : theme.opacityBlue)};
    margin-left: 2.5rem;
    font-size: 1.2rem;
    font-weight: 500;
`;
