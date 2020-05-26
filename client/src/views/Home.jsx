import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../store/actions/todos";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    return (
        <div>
            <h1>This is the home page.</h1>
        </div>
    );
};

export default Home;
