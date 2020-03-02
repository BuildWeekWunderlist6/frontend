import React from 'react';
import './App.css';
import Register from "./components/Register";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Wunderlist 2.0</h1>
      </header>
      <Navigation/>
    </div>
     
    </Router>
  );
}

export default App;
