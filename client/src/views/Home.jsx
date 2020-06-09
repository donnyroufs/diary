import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Banner from "../components/Banner";
import Widget from "../components/Widget";
import Habit from "../components/Habit";
import * as Styled from "./styles/Home";
import { fetchTodosByDate } from "../store/actions/todos";

const Home = () => {
    const dispatch = useDispatch();
    const { todos, error, loading } = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(fetchTodosByDate("Today"));
    }, []);

    return (
        <React.Fragment>
            <Banner />
            <Styled.Widgets>
                <Widget title="Todos" loading={loading} error={error} link="more" href="/todos" items={todos} />
                <Widget title="Exercise" error={true} link="more" href="/exercise" size="big" />
            </Styled.Widgets>

            <Styled.Habbits>
                <Styled.Title>Habits</Styled.Title>
                <Styled.Wrapper>
                    <Habit />
                    <Habit />
                    <Habit />
                </Styled.Wrapper>
            </Styled.Habbits>
        </React.Fragment>
    );
};

export default Home;
