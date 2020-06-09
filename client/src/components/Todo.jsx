import React from "react";
import * as Styled from "./styles/Todos";

const Todo = ({ id, title, completed, setSelected, selected }) => {
    const handleClick = (e) => {
        setSelected((oldValue) => (oldValue === id ? null : id));
    };

    return (
        <Styled.Todos.Todo onClick={handleClick} active={selected === id} completed={completed}>
            <Styled.Todos.Header>Todo</Styled.Todos.Header>
            {title}
        </Styled.Todos.Todo>
    );
};

export default Todo;
