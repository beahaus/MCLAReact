import React, { Component } from "react";
import logo from "../src/logo.svg";
import "./App.css";
import Home from "../../client/src/Pages/Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AboutUS from "./Pages/About.js";
import Games from "./Pages/Games.js";
import SignupP from "./Pages/Signup.js";
import mathA from "../src/components/mathAnnihilator/mathA.js";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Switch>
            <Route path="/About" component={AboutUS} />
            <Route path="/Games" component={mathA} />
            <Route path="/Signup" component={SignupP} />
            <Route exact path="/" component={Home} />
            {/* <Route path="/Log" component={} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
