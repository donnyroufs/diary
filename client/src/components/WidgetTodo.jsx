import React from "react";
import * as Utility from "./styles/Utilities";
import { useDispatch } from "react-redux";
import * as Styled from "./styles/Widget";
import { FcCheckmark } from "react-icons/fc";
import { toggleTodoComplete } from "../store/actions/todos";

const WidgetTodo = ({ widgetTitle, title: todoTitle, id, completed }) => {
    const dispatch = useDispatch();

    const handleToggleComplete = (e) => {
        dispatch(toggleTodoComplete({ id, completed }));
    };

    return (
        <Styled.Widget.Item key={id}>
            {todoTitle}
            {widgetTitle === "Todos" && (
                <Utility.Button icon onClick={handleToggleComplete}>
                    <FcCheckmark className="todo-icon" />
                </Utility.Button>
            )}
        </Styled.Widget.Item>
    );
};
export default WidgetTodo;
