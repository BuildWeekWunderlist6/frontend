import React from 'react';
import './App.css';
import PrivateRoute from "./components/PrivateRoute";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard"
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Wunderlist 2.0</h1>
      </header>
      <Switch>
      <Navigation path="/home" component={Navigation}/>
      <PrivateRoute exact path="/main" component={Dashboard} />
      </Switch>
    </div>
     
    </Router>
  );
}

export default App;
