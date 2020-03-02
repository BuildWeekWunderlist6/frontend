import React from 'react';
import './App.css';
import SignUp from "./components/SignUp";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    
    <Router>
    <div className="App">
      <header className="App-header">
        <Navigation/>
      </header>
      <SignUp path="/signup"/>
    </div>
    </Router>
  );
}

export default App;
