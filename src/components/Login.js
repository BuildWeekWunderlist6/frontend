import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";



const Login = ({values, handleChange, touched, errors, status}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log("Status has changed", status);
        status && setUsers(users => [...users, status]);
    }, [status]);
    
    return (
        <div className = "login">
            <h2>Login</h2>
           
        <Form>
            <label htmlFor = "email"> Email
            <Field id = "email" type = "email" name = "email" placeholder = "Email" />
            {touched.email && errors.email && (
                <p className = "error"> {errors.email}</p>
            )}
            </label>
            <br/>
            <label htmlFor = "password"> Password
            <Field id = "password" type = "password" name = "password" placeholder = "Password" />
            {touched.password && errors.password && (
                <p className = "error">{errors.password}</p>
            )}
            </label>
            <br/>
            <button type = "submit">Submit</button>
            
        </Form>
        </div>
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
    
    handleSubmit(values, { setStatus, resetForm }) {
        console.log("Submitting", values);
        axiosWithAuth().post("/users/login", values)
            .then(response => {
                window.localStorage.setItem('token', response.data.token);
                console.log("VALUES", values);
                console.log("Success", response.data);
                setStatus(response.data);
               
                resetForm();
            })
            .catch(response => {
                console.log("Error posting data", response);
            });
    }
})(Login);

export default FormikLogin;