
import {CREATE_TODO_START, CREATE_TODO_SUCCESS, GET_TODO_SUCCESS} from "../actions/index";


const initialState = {

todos: [{
    todo: "welcome to your todos"
}]


}

const listReducer = (state=initialState, action) => {
    switch(action.type){
        case CREATE_TODO_START:
            return{
                ...state,
                todos: [action.payload]
            }
        
        
        
        case GET_TODO_SUCCESS:
            return{
                ...state,
                todos: action.payload
            }
        
        
        

        case CREATE_TODO_SUCCESS:
            return{
                ...state,
                todos: action.payload
            }
        default:
            return state;
    }
}

export default listReducer;