import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";

export default function Navigation() {
    return (
        <Router>
        <div class = "navigation">
        <h1>Wunderlist 2.0</h1>
        <nav>
            <Link to = "/">Home</Link>
            <Link to = "/login">Login</Link>
            <Link to = "/register">Register</Link>
        </nav>
        <Switch>
        <Route path = "/login">
          <SignIn/>
        </Route>
  
        <Route path = "/register">
          <SignIn/>
        </Route>
        </Switch>
        </div>
        </Router>
    );
}