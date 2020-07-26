import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Layout from "./components/Layout";
import * as View from "./views";

const App = () => {
  // Selecting todos
  const [selected, setSelected] = useState("");

  return (
    <Layout>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <View.Home {...props} setSelected={setSelected} />}
        />
        <Route
          path="/todos"
          render={(props) => (
            <View.Todos
              {...props}
              setSelected={setSelected}
              selected={selected}
            />
          )}
        />
        <Route path="/health" render={(props) => <View.Health {...props} />} />
      </Switch>
    </Layout>
  );
};

export default App;
