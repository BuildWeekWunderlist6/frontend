import jwt from "jsonwebtoken";
import {FETCH_DATA_START, FETCH_DATA_SUCCESS, UPDATE_LIST_START, UPDATE_LIST_SUCCESS, SET_USER, DELETE_LIST_START, DELETE_LIST_SUCCESS} from "../actions/index";


const initialState = {
user: jwt.decode(localStorage.getItem("token")),
lists : [],
list: {},
isFetching: false
}

const listReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_USER:
            return{
                ...state,
                user: action.payload
            };
        
        
        
        case FETCH_DATA_START:
            return{
                ...state,
                isFetching: true
            };
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
               lists: action.payload,
               isFetching: false

            };
        case UPDATE_LIST_START:
            return{
                ...state,
                
            }
        
        
        case UPDATE_LIST_SUCCESS:
            return{
                ...state,
                lists: action.payload.lists,
                isFetching: false
            }
        case DELETE_LIST_START:
            return{
                ...state,

            }
        case DELETE_LIST_SUCCESS:
            return{
                ...state,
            }
        
        
        
        default:
            return state;
    }
}

export default listReducer;