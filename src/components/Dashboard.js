import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
//Components

import Main from "./Main";


const Dashboard = () => {
    return (
       <Router>

      
      <Switch>
       <PrivateRoute path="/main" component={Main} />
            
        </Switch>
       
        </Router>
    );
}

export default Dashboard;