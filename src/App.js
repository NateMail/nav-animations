import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Vid from "./Components/Vid";
import Nav from "./Components/Nav";
import Cal from "./Components/Cal";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/vid" component={Vid} />
        <Route exact path="/cal" component={Cal} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
