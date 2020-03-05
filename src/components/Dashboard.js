import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import Todos from "./Todos";
// ACTIONS
import { updateList, deleteList, getLists, setUser, getTodos } from '../redux/actions/index';

import { animated } from "react-spring";
import SpringProps from "./Animations";

import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import GetStatus from "./GetStatus";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

const Dashboard = (props) => {
    
    console.log("this is id", props.id)
    const [data, setData] = useState([]);
    const [newTitleText, setNewTitleText] = useState({
        name: "",
    });
    
   
    const [loadStatus, setLoadStatus] = useState(false);

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
        // setLoadStatus(true);
        props.getLists(props.user);
        
        
        // setLoadStatus(false);     
        }, []);


    return (
    <div className = "dashboard">
        <animated.div style = {SpringProps()}>
        <div className = "status">
    
        </div>
        </animated.div>
    <div className = "dashboardtitle">
        
        </div>
        <div className = "newcardform">
            <form onListSubmit = {handleSubmit(onListSubmit)} className = "newcard">
            
            </form>
        </div>
        <animated.div style = {SpringProps()}>
        <div className = "allcards">
  


        {props.lists.map(data => {
           const id = data.id;
            return (
            <div key={data.id} className = "card">
            <DeleteIcon color="secondary" fontSize = "large" onClick={() => {deleteItem(id)}}className = "delete" type = "contained"></DeleteIcon>
            <h2>{data.name}</h2>
            <div className = "update"> 
             <TextField name = "name" placeholder = "New name" onInput = {handleChanges}></TextField>

            <Button size = "small" variant = "contained" color = "primary" onClick={() => {updateTitle(newTitleText, id)}}>Update</Button>
            </div>
           
            <p>{data.created_at}</p>
                <Todos id={id}/>
            </div>

            )
            
    

         
            
        
        })
        }

      
            </div>
            </animated.div>

            </div>
      
    );
 
}

const mapStateToProps = state => {
    return {
       lists: state.list.lists,
    //    isFetching: state.isFetching,
       user: state.list.user,
       token: state.login.token,
      
        }
};



export default connect(
    mapStateToProps,
    {setUser, getLists, updateList, deleteList, getTodos}
)(Dashboard); 