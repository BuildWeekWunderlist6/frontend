import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
//Components

import Main from "./Main";


export default function Navigation() {
    return (
        <Router>
       <Switch>

       <PrivateRoute exact path="/main" component={Main} />
            
        
        </Switch>
        </Router>
    );
}