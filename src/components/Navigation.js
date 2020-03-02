import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";

export default function Navigation() {
    return (
        <Router>
        <div className = "navigation">
        <nav className = "navlinks">
            <Link to = "/">Home</Link>
            <Link to = "/login">Login</Link>
            <Link to = "/register">Register</Link>
        </nav>
        </div>
        <Switch>

        <Route path = "/login" component={Login}/>
           
      
  
        <Route path = "/register" component={Register}/>
         
       

        <Route path = "/">
            <Home/>
        </Route>
        </Switch>
        </Router>
    );
}