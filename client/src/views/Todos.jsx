import React, { useState } from "react";
import { useSelector } from "react-redux";
import Tabs from "../components/Tabs";
import Tab from "../components/Tab";
import { Header, Container, Wrapper } from "./styles/Todos";
import Todo from "../components/Todo";
import * as Styled from "../components/styles/Todos";
import * as Utility from "../components/styles/Utilities";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin4Line } from "react-icons/ri";

const Todos = () => {
    const [value, setValues] = useState({});
    const todos = useSelector((state) => state.todos.todos);

    const handleChange = (e) =>
        setValues({
            ...value,
            [e.target.name]: e.target.value,
        });

    return (
        <Wrapper>
            <Header>
                <Tabs>
                    <Tab title="Today" />
                    <Tab title="Tomorrow" />
                </Tabs>
            </Header>

            <Container>
                <Styled.Todos>
                    {todos.map((todo) => (
                        <Todo key={todo.id} {...todo} />
                    ))}
                </Styled.Todos>
                <Utility.Button primary>Add Todo</Utility.Button>
            </Container>

            <Container>
                <Styled.Description>
                    <Styled.Description.Header>
                        <Styled.Description.Title>Description</Styled.Description.Title>
                        <Styled.Description.Icons>
                            <FaEdit className="todo-icon" />
                            <RiDeleteBin4Line className="todo-icon" />
                        </Styled.Description.Icons>
                    </Styled.Description.Header>
                    <Styled.Description.Body placeholder="Enter description" />
                </Styled.Description>
            </Container>
        </Wrapper>
    );
};

export default Todos;
