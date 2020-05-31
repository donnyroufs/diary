import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../store/actions/todos";
import Banner from "../components/Banner";
import Widget from "../components/Widget";
import Habit from "../components/Habit";
import * as Styled from "./styles/Home";

const Home = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    return (
        <React.Fragment>
            <Banner />
            <Styled.Widgets>
                <Widget title="Todos" link="view completed" href="/todos" items={todos} />
                <Widget title="Exercise" link="more" href="/exercise" items={todos} size="big" />
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
