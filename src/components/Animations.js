import React from "react";
import { useSpring } from "react-spring";

// The "fade-in" effect properties are stored here
const SpringProps = () => {

    // Animation speed is the "tension" value
    const springProps = useSpring({opacity: 1, from: {opacity: 0}, config: { mass: 5, tension: 250, friction: 80 }});

    return springProps;
}

export default SpringProps;



