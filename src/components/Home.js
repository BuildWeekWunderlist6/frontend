import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import {useSpring, animated} from "react-spring";


export default function Home() {
    const props = useSpring({opacity: 1, from: {opacity: 0}, config: { mass: 5, tension: 250, friction: 80 }});
    return (
        <animated.div style = {props}>
        <div className = "maincard">
        <div className = "homepage">
            <div className = "hometext">
                <h2>Welcome to the homepage!</h2> 
                <p>Need to access the dashboard? <Link to = "/login">Login</Link></p>
            </div>
        </div>
        </div>
        </animated.div>
    )};