import {axiosWithAuth} from "../utils/axiosWithAuth";

export const ADD_LIST = "ADD_LIST";


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

