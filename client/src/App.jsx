import React from "react";
import { Route, Switch } from "react-router";
import Layout from "./components/Layout";
import * as View from "./views";

const App = () => {
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
