import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

export default function Navigation() {
    return (
        <Router>
        <div class = "navigation">
        <nav>
            <Link to = "/">Home</Link>
            <Link to = "/login">Login</Link>
            <Link to = "/register">Register</Link>
        </nav>
        </div>
        <Switch>
        <Route path = "/login">
            <Login/>
        </Route>
  
        <Route path = "/register">
          <Register/>
        </Route>
        </Switch>
        </Router>
    );
}