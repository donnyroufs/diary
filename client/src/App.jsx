import React, { useEffect } from "react";
import { fetchTodos } from "./store/actions/todos";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import Layout from "./components/Layout";
import * as View from "./views";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={View.Home} />
                <Route path="/todos" component={View.Todos} />
            </Switch>
        </Layout>
    );
};

export default App;
