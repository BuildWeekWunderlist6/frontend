import {axiosWithAuth} from "../../utils/axiosWithAuth";


export const ADD_LIST = "ADD_LIST";
export const UPDATE_LIST_START = "UPDATE_LIST_START";
export const UPDATE_LIST_SUCCESS = "UPDATE_LIST_SUCCESS";
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const SET_USER = "SET_USER";
export const DELETE_LIST_START = "DELETE_LIST";
export const DELETE_LIST_SUCCESS = "DELETE_SUCCESS"
export const CREATE_TODO_START = "CREATE_TODO_START";
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS";
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
export const GET_TODO_START = "GET_TODO_START";




export const setUser = user =>({
 type: SET_USER, payload: user
})

export const getLists = payload => dispatch => {
    dispatch({ type: FETCH_DATA_START, GET_TODO_START });
    const user = payload.sub;

    console.log("this is a payload from inside getLists", payload);
    axiosWithAuth()
    .get(`https://ls-wunderlist--production.herokuapp.com/api/users/${user}/todo-lists`)
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
        
        dispatch ({ type: UPDATE_LIST_SUCCESS, type: FETCH_DATA_START, payload: res.data })
        
        console.log("response from update list", res.data);
    })
    .catch(err => {
        console.log(err)
    })
}


export const deleteList = (id) => dispatch => {
    dispatch({type: DELETE_LIST_START})
    
    console.log(id);
axiosWithAuth()
    .delete(`https://ls-wunderlist--production.herokuapp.com/api/todo-lists/${id}`)
    .then(res => {
        console.log(res);
        dispatch({type:FETCH_DATA_START, type: DELETE_LIST_SUCCESS, payload: res.data})
    })
    .catch(err => console.log(err));
}


export const createTodo = (text, id) => dispatch => {

dispatch({type: CREATE_TODO_START});
    axiosWithAuth()
    .post(`https://ls-wunderlist--production.herokuapp.com/api/todo-lists/${id}/todo-items`, text)
    .then(res => {
        console.log(res.data);
        dispatch({type: CREATE_TODO_SUCCESS, payload: res.data})
        getTodos(id);
    })
}


export const getTodos = (todo_list_id) => dispatch => {
    dispatch({type: GET_TODO_START})
    axiosWithAuth()
    .get(`https://ls-wunderlist--production.herokuapp.com/api/todo-items?todo_list_id=${todo_list_id}`)
    .then(res => {
        console.log("this is get Todos", res.data);
        
          dispatch({type: GET_TODO_SUCCESS, payload: res.data})   
      
        
       

    })
}