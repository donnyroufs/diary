import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../store/actions/todos";
import Banner from "../components/Banner";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    return (
        <React.Fragment>
            <Banner />
        </React.Fragment>
    );
};

export default Home;
