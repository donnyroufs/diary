import React, { useState } from "react";
import { useSelector } from "react-redux";
import Tabs from "../components/Tabs";
import Tab from "../components/Tab";
import { Header, Container, Wrapper, Column } from "./styles/Todos";
import Todo from "../components/Todo";
import * as Styled from "../components/styles/Todos";
import * as Utility from "../components/styles/Utilities";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin4Line } from "react-icons/ri";
import { Roller } from "react-awesome-spinners";
import useTabs from "../hooks/useTabs";

const Todos = () => {
    const [value, setValues] = useState({});
    const [current, setCurrent] = useTabs("Today");
    const [selected, setSelected] = useState("");
    const { todos, loading } = useSelector((state) => state.todos);

    const handleChange = (e) =>
        setValues({
            ...value,
            [e.target.name]: e.target.value,
        });

    return (
        <Wrapper>
            <Header>
                <Tabs current={current} setCurrent={setCurrent}>
                    <Tab title="Today" />
                    <Tab title="Tomorrow" />
                </Tabs>
            </Header>

            <Container isLoading={loading}>
                {loading ? (
                    <Roller />
                ) : (
                    <Column>
                        <Styled.Todos>
                            {todos.map((todo) => (
                                <Todo key={todo.id} {...todo} setSelected={setSelected} />
                            ))}
                        </Styled.Todos>
                        <Utility.Button primary>Add Todo</Utility.Button>
                    </Column>
                )}

                <Styled.Description>
                    <Styled.Description.Header>
                        <Styled.Description.Title>Description</Styled.Description.Title>
                        <Styled.Description.Icons>
                            <Utility.Button icon>
                                <FaEdit className="todo-icon" />
                            </Utility.Button>
                            <Utility.Button icon>
                                <RiDeleteBin4Line className="todo-icon todo-icon--danger" />
                            </Utility.Button>
                        </Styled.Description.Icons>
                    </Styled.Description.Header>

                    <Styled.Description.Body>
                        {!todos && "Looks like you have no todos for today!"}
                        {!selected && todos && "Select a todo to view it's contents."}
                        {selected && todos.find((todo) => todo.id === selected).description}
                    </Styled.Description.Body>
                </Styled.Description>
            </Container>
        </Wrapper>
    );
};

export default Todos;
