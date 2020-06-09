import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Tabs from "../components/Tabs";
import Tab from "../components/Tab";
import { Header, Container, Wrapper, Column } from "./styles/Todos";
import Todo from "../components/Todo";
import * as Styled from "../components/styles/Todos";
import * as Utility from "../components/styles/Utilities";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin4Line } from "react-icons/ri";
import { FcCheckmark } from "react-icons/fc";
import { Roller, Ellipsis } from "react-awesome-spinners";
import useTabs from "../hooks/useTabs";
import Modal from "../components/Modal";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodoComplete, fetchTodosByDate } from "../store/actions/todos";

const Todos = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [current, setCurrent] = useTabs("Today");
    const [selected, setSelected] = useState("");
    const { todos, loading, error } = useSelector((state) => state.todos);

    const createTodo = (payload) => {
        dispatch(addTodo({ ...payload, current }));
    };

    const toggleModal = (e) => {
        setIsOpen((old) => !old);
    };

    const handleDeleteTodo = (e) => {
        if (!selected) return;
        dispatch(deleteTodo(selected));
        setSelected(null);
    };

    const handleToggleComplete = (e) => {
        if (!selected) return;
        dispatch(toggleTodoComplete({ id: selected, completed: todos.find((todo) => todo.id === selected).completed }));
    };

    const handleEditTodo = (e) => console.log(e.target);

    const sortByCompleted = () => todos.sort((x, y) => x.completed - y.completed);

    const renderDescription = () => {
        if (error) {
            return "Something went wrong";
        } else if (todos.length <= 0) {
            return `You have no todos for ${current.toLowerCase()}.`;
        } else if (!selected) {
            return "Select a todo to view it's contents.";
        } else {
            return todos.find((todo) => todo.id === selected).description;
        }
    };

    useEffect(() => {
        dispatch(fetchTodosByDate(current));
        setSelected("");
    }, [current]);

    return (
        <Wrapper>
            <Modal createTodo={createTodo} setIsOpen={setIsOpen} isOpen={isOpen} title="add new todo" />
            <Header>
                <Tabs current={current} setCurrent={setCurrent}>
                    <Tab title="Today" />
                    <Tab title="Tomorrow" />
                </Tabs>
            </Header>

            <Container>
                {loading ? (
                    <Column isLoading={loading}>
                        <Roller />
                    </Column>
                ) : (
                    <Column>
                        <Styled.Todos>
                            {error && <h5>something went wrong...</h5>}
                            {!error && todos.length <= 0 && <h5>You have no todos for {current.toLowerCase()}!</h5>}
                            {todos.length > 0 &&
                                todos.length > 0 &&
                                sortByCompleted().map((todo) => (
                                    <Todo key={todo.id} {...todo} setSelected={setSelected} selected={selected} />
                                ))}
                        </Styled.Todos>
                        <Utility.Button primary onClick={toggleModal}>
                            Add Todo
                        </Utility.Button>
                    </Column>
                )}

                <Styled.Description>
                    <Styled.Description.Header>
                        <Styled.Description.Title>Description</Styled.Description.Title>
                        {selected && (
                            <Styled.Description.Icons>
                                <Utility.Button icon selected={selected} onClick={handleEditTodo}>
                                    <FaEdit className="todo-icon" />
                                </Utility.Button>
                                <Utility.Button icon selected={selected} onClick={handleDeleteTodo}>
                                    <RiDeleteBin4Line className="todo-icon todo-icon--danger" />
                                </Utility.Button>
                                <Utility.Button icon selected={selected} onClick={handleToggleComplete}>
                                    <FcCheckmark className="todo-icon" />
                                </Utility.Button>
                            </Styled.Description.Icons>
                        )}
                    </Styled.Description.Header>

                    <Styled.Description.Body>{loading ? <Ellipsis /> : renderDescription()}</Styled.Description.Body>
                </Styled.Description>
            </Container>
        </Wrapper>
    );
};

export default Todos;
