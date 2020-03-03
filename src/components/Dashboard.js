import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";

const Dashboard = () => {
    const [data, setData] = useState([]);
    const token = window.localStorage.getItem("token");
    const decoded = jwt_decode(token);
    const userID = decoded.sub;
    const userName = decoded.first_name;
    
   

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = newList => { console.log("Submitted data", newList)};

    useEffect(() => {
        axios.get(`https://ls-wunderlist--production.herokuapp.com/api/users/${userID}/todo-lists`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log("Error", error);
            })
    }, [data]);

    return (
    <div className = "dashboard">
    <div className = "dashboardtitle">
        <h2>Welcome, {userName}. You can see all of your lists here!</h2> 
        
        </div>
        <div className = "newcardform">
            <form onSubmit = {handleSubmit(onSubmit)} className = "newcard">
                <input name = "name" placeholder = "Add new list" ref = {register({required : true})} />
                <input type = "submit" />
            </form>
        </div>
        <div className = "allcards">

        {data.map(data => {
            return (

                <div className = "card">
            <h2>{data.name}</h2>
            <div className = "list">
            <p> Task </p>
            <p> Task </p>
            <p> Task </p>
            </div>
            </div>

            )
        })}

      
            </div>

            </div>
      
    );
 
}

export default Dashboard;