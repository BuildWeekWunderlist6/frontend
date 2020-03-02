import React from 'react';
import './App.css';
import SignUp from "./components/SignUp";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
      </header>
      <SignUp/>
    </div>
  );
}

export default App;
