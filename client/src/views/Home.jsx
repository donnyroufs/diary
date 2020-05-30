import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../store/actions/todos";
import { Title } from "./styles/home";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    return (
        <div>
            <Title>Hello World.</Title>
        </div>
    );
};

export default Home;
