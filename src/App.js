import React from 'react';
import './App.css';
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard"
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";



function App() {
  const LoggedIn = localStorage.getItem("token");
  


  
  return (
    
    <Router>
    <div className="App">
      <header className="App-header">
      <nav className = "navigation">
        <div className = "navlinks">
      {LoggedIn ? <><p>placeholder</p></> : <>
            <Link to = "/">Home</Link>
            <Link to = "/login">Login</Link>
            <Link to = "/register">Register</Link>  </>
            }
            </div>
        </nav>
        <h1>Wunderlist 2.0</h1>
      </header>
     
    </div>
{LoggedIn ? 
    
    (<Switch>
      
      <PrivateRoute path='/dashboard' component={Dashboard}/>
        
        </Switch>) : 
        (
      <Switch>
      
      <Login exact path = "/login" component={Login}/>
      
      <Route exact path = "/register">
          <Register/>
           </Route>
      
      <Route exact path="/">
            <Home />
             </Route>
        </Switch>)}
     
    </Router>
  );
}

export default App;
