import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import Characters from "./Components/Characters";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/characters" component={Characters} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
