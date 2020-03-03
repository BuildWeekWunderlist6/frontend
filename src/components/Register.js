import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import Button from "@material-ui/core/Button";
import { TextField } from "formik-material-ui";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, Route, Switch } from "react-router-dom";


const Register = ({values, handleChange, touched, errors, status}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log("Status has changed", status);
        status && setUsers(users => [...users, status]);
    }, [status]);
    
   
    

    return (
        <div className = "maincard">
        <div className = "register">
            <div className = "usercard">
            <h2>Register</h2>
        <Form>
            <Field component = {TextField} id = "first_name" type = "text" name = "first_name" placeholder = "First Name" />
            <br/>
            <Field component = {TextField} id = "last_name" type = "text" name = "last_name" placeholder = "Last Name" />
            <br/>
            <Field component = {TextField} id = "email" type = "email" name = "email" placeholder = "Email" />
            <br/>
            <Field component = {TextField} id = "password" type = "password" name = "password" placeholder = "Password" />
            <br/>
            <Button type = "submit" variant = "contained" color = "primary">Submit</Button>
            
        </Form>
        <p>Already registered? <Link to = "/login">Login</Link></p>
        </div>
        </div>
        </div>
    );
};

const FormikRegister = withFormik({
    mapPropsToValues({first_name, last_name, email, password}) {
        return {
            first_name: first_name || "",
            last_name: last_name || "",
            email: email || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        first_name: Yup.string().required("First name is required."),
        last_name: Yup.string().required("Last name is required."),
        email: Yup.string().required("Email is required."),
        password: Yup.string().required("Password is required.").min(8, "Password must be at least 8 characters.")
    }),
    
    handleSubmit(values, { setStatus, resetForm, props }) {
        console.log("Submitting", values);
       
        axiosWithAuth().post("/users/register", values)
            .then(response => {
                window.localStorage.setItem('token', response.data.token);
                console.log("payload", response.data.token)
                console.log("VALUES", values);
                console.log("Success", response.data);
                setStatus(response.data);
                // props.history.push('/dashboard');
                resetForm();
            })
            .catch(err => {
                console.log("Error posting data", err);
            });
    }
})(Register);

export default FormikRegister;