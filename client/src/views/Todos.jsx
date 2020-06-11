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
// import Modal from "../components/Modal";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodoComplete, fetchTodosByDate, updateTodo } from "../store/actions/todos";
import Modal from "../components/generic/Modal";
import { grabIfExists } from "../utils/grabIfExists";

const Todos = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [current, setCurrent] = useTabs("Today");
    const [selected, setSelected] = useState("");
    const [edit, setEdit] = useState(false);
    const { todos, loading, error } = useSelector((state) => state.todos);

    const createTodo = (payload) => {
        dispatch(addTodo({ ...payload, current }));
    };

    const editTodo = (payload) => {
        dispatch(updateTodo({ ...payload, id: selected }));
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

    const handleEditTodo = (e) => {
        setEdit(true);
        setIsOpen(true);
    };

    const handleAddTodo = (e) => {
        setEdit(false);
        setIsOpen(true);
    };

    const sortByCompleted = () => todos.sort((x, y) => x.completed - y.completed);

    const renderDescription = () => {
        if (error) {
            return "Something went wrong";
        } else if (todos.length <= 0) {
            return `You have no todos for ${current.toLowerCase()}.`;
        } else if (!selected) {
            return "Select a todo to view it's contents.";
        } else {
            return grabIfExists(todos, selected, "description");
        }
    };

    useEffect(() => {
        dispatch(fetchTodosByDate(current));
        setSelected("");
    }, [current]);

    return (
        <Wrapper>
            {/* <Modal createTodo={createTodo} setIsOpen={setIsOpen} isOpen={isOpen} title="add new todo" /> */}
            {edit ? (
                <Modal
                    action={editTodo}
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                    title="edit todo"
                    labelOne="title"
                    btnText="save"
                    valueOne={grabIfExists(todos, selected, "title")}
                    valueTwo={grabIfExists(todos, selected, "description")}
                />
            ) : (
                <Modal
                    action={createTodo}
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                    title="add new todo"
                    labelOne="add new todo"
                    btnText="add todo"
                />
            )}
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
                            {error && <Utility.Message danger>Something went wrong...</Utility.Message>}
                            {!error && todos.length <= 0 && (
                                <Utility.Message info mb-2>
                                    You have no todos for {current.toLowerCase()}!
                                </Utility.Message>
                            )}
                            {todos.length > 0 &&
                                sortByCompleted().map((todo) => (
                                    <Todo key={todo.id} {...todo} setSelected={setSelected} selected={selected} />
                                ))}
                        </Styled.Todos>
                        <Utility.Button primary onClick={handleAddTodo}>
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
