import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import Button from "@material-ui/core/Button";
import { TextField } from "formik-material-ui";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, Route, Switch } from "react-router-dom";
import {useSpring, animated} from "react-spring";



const Login = ({values, handleChange, touched, errors, status}) => {
    const [users, setUsers] = useState([]);

    const props = useSpring({opacity: 1, from: {opacity: 0}, config: { mass: 5, tension: 250, friction: 80 }});
    
    useEffect(() => {
        console.log("Status has changed", status);
        status && setUsers(users => [...users, status]);
    }, [status]);
    
    return (
        <animated.div style = {props}>
        <div className = "maincard">
        <div className = "login">
            <div className = "usercard">
            <h2>Login</h2>
        <Form>
            <Field component = {TextField} id = "email" type = "email" name = "email" placeholder = "Email" />
            <br/>
            <Field component = {TextField} id = "password" type = "password" name = "password" placeholder = "Password" />
            <br/>
            <Button type = "submit" variant = "contained" color = "primary">Submit</Button>
            
        </Form>
        <p>Need an account? <Link to = "/register">Register</Link></p>
        </div>
        </div>
        </div>
        </animated.div>
    );
};

const FormikLogin = withFormik({
    mapPropsToValues({email, password}) {
        return {
            email: email || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required("Email is required."),
        password: Yup.string().required("Password is required.")
    }),
   
    handleSubmit(values, { setStatus, resetForm, props}) {
        console.log("Submitting", values);
        console.log("this is props", props)
        
        axiosWithAuth().post("/users/login", values)
            .then(response => {
                window.localStorage.setItem('token', response.data.token);
                console.log("VALUES", values);
                console.log("Success", response.data);
                setStatus(response.data);
                props.history.push('/dashboard');
                resetForm();
            })
            .catch(response => {
                console.log("Error posting data", response);
            });
    }
})(Login);

export default FormikLogin;