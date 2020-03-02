import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";



const SignUp = ({values, handleChange, touched, errors, status},{...props}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log("Status has changed", status);
        status && setUsers(users => [...users, status]);
    }, [status]);
    
   
    
    
    return (
        <div className = "form">
            <h2>Sign Up</h2>
           
        <Form>
            <label htmlFor = "first_name"> First Name
            <Field id = "first_name" type = "text" name = "first_name" placeholder = "First Name" />
            {touched.first_name && errors.first_name && (
                <p className = "error">{errors.first_name}</p>
            )}
            </label>
            <br/>
            <label htmlFor = "last_name"> Last Name
            <Field id = "last_name" type = "text" name = "last_name" placeholder = "Last Name" />
            {touched.last_name && errors.last_name && (
                <p className = "error">{errors.last_name}</p>
            )}
            </label>
            <br/>
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

const FormikSignUp = withFormik({
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
    
    handleSubmit(values, { setStatus, resetForm }) {
        console.log("Submitting", values);
        axiosWithAuth().post("/users/register", values)
            .then(response => {
                window.localStorage.setItem('token', response.data.payload);
                console.log("VALUES", values);
                console.log("Success", response.data);
                setStatus(response.data);
               
                resetForm();
            })
            .catch(response => {
                console.log("Error posting data", response);
            });
    }
})(SignUp);

export default FormikSignUp;