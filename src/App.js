import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Vid from "./Components/Vid";
// import Nav from "./Components/Nav";
import Cal from "./Components/Cal";
import Register from "./Components/Register";
import CircleNav from "./Components/CircleNav";

const App = () => {
  return (
    <BrowserRouter>
      <CircleNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/vid" component={Vid} />
        <Route exact path="/cal" component={Cal} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
