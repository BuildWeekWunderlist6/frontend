import {FETCH_DATA_START, FETCH_DATA_SUCCESS, UPDATE_LIST_SUCCESS} from "../actions/index";


const initialState = {

lists : [],
id: "",
name: "",
created_at: "",
user_id: "",
todo_list_id: "",
owner: true,
isFetching: false
}


export const todoReducer = (state=initialState, action) => {
    switch(action.type){
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

            }
        
        
        
        
        
        
        case UPDATE_LIST_SUCCESS:
            return{
                ...state,
                name: action.payload
            }
        
        
        
        
        default:
            return state;
    }
}