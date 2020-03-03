import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from 'jwt-decode';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const token = window.localStorage.getItem("token");
    const decoded = jwt_decode(token);
    const userID = decoded.sub;
    const userEmail = decoded.email;

    useEffect(() => {
        axios.get(`https://ls-wunderlist--production.herokuapp.com/api/users/${userID}/todo-lists`)
            .then(response => {
                console.log("Pulling in data from API with userID", response.data);
                console.log("Token", token)
                console.log("decoded", decoded)
                console.log("userID", userID)
                console.log("Email", userEmail)
                setData(response.data);
            })
            .catch(error => {
                console.log("Error", error)
                console.log("Token", token)
                console.log("decoded", decoded)
                console.log("userID", userID)
                console.log("Email", userEmail)
            })
    }, []);

    return (
    <div className = "dashboard">
    <div className = "dashboardtitle">
        <h2>Welcome to the dashboard! You can see all of your lists here!</h2>
        </div>
        <div className = "allcards">

        {data.map(data => {
            return (

                <div className = "card">
            <h2>{data.name}</h2>
            <div className = "list">
            <ul>
                <li>Task #1</li>
                <li>Task #2</li>
                <li>Task #3</li>
            </ul>
            </div>
            </div>

            )
        })}

      
            </div>

            </div>
      
    );
 
}

export default Dashboard;