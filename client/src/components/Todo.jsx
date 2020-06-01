import React from "react";
import * as Styled from "./styles/Todos";

const Todo = ({ title }) => {
    return (
        <Styled.Todos.Todo>
            <Styled.Todos.Header>Todo</Styled.Todos.Header>
            {title}
        </Styled.Todos.Todo>
    );
};

export default Todo;
