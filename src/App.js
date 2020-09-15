import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./App.css"

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/details/:id" component={Details}></Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
