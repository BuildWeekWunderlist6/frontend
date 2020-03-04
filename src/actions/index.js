import {axiosWithAuth} from "../utils/axiosWithAuth";
import jwt_decode from "jwt-decode";

export const ADD_LIST = "ADD_LIST";
export const UPDATE_LIST_START = "UPDATE_LIST_START";
export const UPDATE_LIST_SUCCESS = "UPDATE_LIST_SUCCESS";
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";


const token = window.localStorage.getItem("token");
const decoded = jwt_decode(token);
const userID = decoded.sub;
const userName = decoded.first_name;



export const getData = payload => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axiosWithAuth()
    .get(`https://ls-wunderlist--production.herokuapp.com/api/users/${userID}/todo-lists`)
    .then(response => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data})
        console.log("this is from inside the action creator", response.data);
       
        console.log(response.data);
    })
    .catch(error => {
        console.log("Error", error);
        
    })


}


export const addList = list => dispatch => {
    dispatch({ type: ADD_LIST });
    
    axiosWithAuth()
        .post(`https://ls-wunderlist--production.herokuapp.com/api/todo-lists`, list)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        });
}; 

export const updateList = (payload, id) => dispatch => {
    console.log("This is the payload", payload.name);
    const newId = id.toString();
    console.log("this is dynamic id", newId);
    dispatch({ type: UPDATE_LIST_START });
    axiosWithAuth()
    .put(`https://ls-wunderlist--production.herokuapp.com/api/todo-lists/${newId}`, payload)
    .then(res => {
        dispatch ({ type: UPDATE_LIST_SUCCESS, payload: payload })
        console.log(res);
    })
    .catch(err => {
        console.log(err)
    })
}


export const deleteList = (id) => dispatch => {
    console.log(id);
axiosWithAuth()
    .delete(`https://ls-wunderlist--production.herokuapp.com/api/todo-lists/${id}`)
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err));
}