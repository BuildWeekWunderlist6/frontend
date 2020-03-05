import React from 'react';
import './App.css';
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard"
import { BrowserRouter as Router } from "react-router-dom";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import AddList from "./components/AddList";

function App() {
  const token = localStorage.getItem("token");
  
  return (
    
    <Router>
    <div className="App">
      <header className="App-header">
      <nav className = "navigation">
        <div className = "navlinks">
      {token ? <> <NavLink activeClassName = "active" to="/dashboard">Dashboard</NavLink><NavLink activeClassName = "active" to="/addlist">Add List</NavLink></> : <>
            <NavLink exact={true} activeClassName = "active" to = "/">Home</NavLink>
            <NavLink activeClassName = "active" to = "/login">Login</NavLink>
            <NavLink activeClassName = "active" to = "/register">Register</NavLink>  </>
            }
            </div>
        </nav>
        <h1>Wunderlist 2.0</h1>
      </header>
     
    </div>
{token ? 
    
    (<Switch>

      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/addlist' component={AddList}/>
      
        
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
