import React from 'react';
import './App.css';

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
      <div>{localStorage.getItem("token") ? <Dashboard /> : <Navigation />}</div>
    </div>
     
    </Router>
  );
}

export default App;
