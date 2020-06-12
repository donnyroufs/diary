import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Banner from "../components/Banner";
// import Widget from "../components/Widget";
import Widget from "../components/generic/Widget";
import WidgetTodo from "../components/WidgetTodo";
import Habit from "../components/Habit";
import * as Styled from "./styles/Home";
import { fetchTodosByDate } from "../store/actions/todos";

const Home = ({ setSelected }) => {
    const dispatch = useDispatch();
    const { todos, error, loading } = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(fetchTodosByDate("Today"));
    }, []);

    return (
        <React.Fragment>
            <Banner />
            <Styled.Widgets>
                <Widget
                    title="Todos"
                    loading={loading}
                    error={error}
                    href="/todos"
                    count={todos.length}
                    message="You have no todos for today!"
                >
                    {todos
                        .filter((todo) => !todo.completed)
                        .map((todo) => (
                            <WidgetTodo {...todo} setSelected={setSelected} key={todo.id} />
                        ))}
                </Widget>
                <Widget title="Exercise" error={true} href="/exercise" size="big" />
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
