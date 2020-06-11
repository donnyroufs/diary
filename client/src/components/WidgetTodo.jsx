import React from "react";
import { useHistory } from "react-router-dom";
import * as Utility from "./styles/Utilities";
import { useDispatch } from "react-redux";
import * as Styled from "./styles/Widget";
import { FcCheckmark } from "react-icons/fc";
import { toggleTodoComplete } from "../store/actions/todos";

const WidgetTodo = ({ setSelected, widgetTitle, title: todoTitle, id, completed }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSetSelected = (e) => {
        setSelected(id);
        history.push("/todos");
    };

    const handleToggleComplete = (e) => {
        dispatch(toggleTodoComplete({ id, completed }));
    };

    return (
        <Styled.Widget.Item key={id} onClick={handleSetSelected}>
            <Styled.Widget.Span>{todoTitle}</Styled.Widget.Span>
            {widgetTitle === "Todos" && (
                <Utility.Button icon onClick={handleToggleComplete}>
                    <FcCheckmark className="todo-icon" />
                </Utility.Button>
            )}
        </Styled.Widget.Item>
    );
};
export default WidgetTodo;
