import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
// ACTIONS
import { updateList, deleteList } from '../actions/index';
import {useSpring, animated} from "react-spring";

import axios from "axios";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import GetStatus from "./GetStatus";

const Dashboard = (props) => {
    const [data, setData] = useState([]);
    const [newTitleText, setNewTitleText] = useState({
        name: "",
    });
    const token = window.localStorage.getItem("token");
    const decoded = jwt_decode(token);
    const userID = decoded.sub;
    const userName = decoded.first_name;

    const [loadStatus, setLoadStatus] = useState(false);

    const springProps = useSpring({opacity: 1, from: {opacity: 0}, config: { mass: 5, tension: 250, friction: 80 }});

    //UPDATE FUNCTION
    const handleChanges = e => {
        setNewTitleText({[e.target.name]: e.target.value});
       
      };

    const updateTitle = (text, id) => {
        props.updateList(text, id);
    }

    //DELETE FUNCTION

    const deleteItem = id => {
        props.deleteList(id);
    }


    const { register, handleSubmit, watch, errors } = useForm();
    const onListSubmit = newList => { console.log("Submitted data", newList)};
    const onTaskSubmit = newTask => { console.log("Submitted data", newTask)};

    useEffect(() => {
        axios.get(`https://ls-wunderlist--production.herokuapp.com/api/users/${userID}/todo-lists`)
            .then(response => {
                setData(response.data);
                setLoadStatus(true);
            })
            .catch(error => {
                console.log("Error", error);
                setLoadStatus(false);
            })
    }, [data.id]);



    return (
    <div className = "dashboard">
        <animated.div style = {springProps}>
        <div className = "status">
        <GetStatus loaded = {loadStatus} username = {userName} />
        </div>
        </animated.div>
    <div className = "dashboardtitle">
        
        </div>
        <div className = "newcardform">
            <form onListSubmit = {handleSubmit(onListSubmit)} className = "newcard">
                <input name = "listname" placeholder = "Add new list" ref = {register({required : true})} />
                <input type = "submit" />
            </form>
        </div>
        <animated.div style = {springProps}>
        <div className = "allcards">

        {data.map(data => {
            const id = data.id;
            return (
            <div key={data.id} className = "card">
            <button onClick={() => {deleteItem(id)}}className = "delete" type = "button">Delete</button>
            <h2>{data.name}</h2>
            
            <input type="text"
            name="name"
            onChange={handleChanges}
             />

            <button onClick={() => {updateTitle(newTitleText, id)}}>Update</button>

            <div className = "list">
            <form onTaskSubmit = {handleSubmit(onTaskSubmit)} className = "newtask">
                <input name = "taskname" placeholder = "Add new task" ref = {register({required : true})} />
                <input type = "submit" />
            </form>
            <label>First Task
            <input name = "isCompleted" type = "checkbox" />
            <br/>
            </label>
            <label>Second Task
            <input name = "isCompleted" type = "checkbox" />
            <br/>
            </label>
            <label>Third Task
            <input name = "isCompleted" type = "checkbox" />
            <br/>
            </label>
            <label>Fourth Task
            <input name = "isCompleted" type = "checkbox" />
            <br/>
            </label>
            <label>Fifth Task
            <input name = "isCompleted" type = "checkbox" />
            <br/>
            </label>
            </div>
            </div>

            )
        })}

      
            </div>
            </animated.div>

            </div>
      
    );
 
}

const mapStateToProps = state => {
    return {
       
        isEditing: state.isEditing,
       
    }
};

export default connect(
    mapStateToProps,
    {updateList, deleteList}
)(Dashboard); 