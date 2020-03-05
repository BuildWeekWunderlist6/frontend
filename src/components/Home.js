import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { animated } from "react-spring";
import SpringProps from "./Animations";

export default function Home() {
    return (
        <animated.div style = {SpringProps()}>
        <div className = "maincard">
        <div className = "homepage">
            <div className = "hometext">
                <h2>Welcome to Wunderlist 2.0!</h2> 
                <p>Looking for the dashboard? <Link to = "/login">Login</Link></p>
            </div>
        </div>
        </div>
        </animated.div>
    )};