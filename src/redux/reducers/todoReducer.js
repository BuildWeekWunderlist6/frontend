
import {CREATE_TODO_START, CREATE_TODO_SUCCESS, GET_TODO_SUCCESS, DELETE_TODO_START, DELETE_TODO_SUCCESS, GET_TODO_START} from "../actions/index";


const initialState = {
id: "",
todos: [
   
   
],
completed: false


}

const listReducer = (state=initialState, action) => {
    switch(action.type){
        case CREATE_TODO_START:
            return{
                ...state,
                
            }
        
       
        case CREATE_TODO_SUCCESS:
            return{
                ...state,
               
                todos: action.payload

            }
         
         case GET_TODO_START:
             return{
                 ...state
             }
         
            case GET_TODO_SUCCESS:
            return{
                ...state,
             
                todos: action.payload
            }
        case DELETE_TODO_START:
            return{
                ...state,
            }

        case DELETE_TODO_SUCCESS:
            return{
                ...state,
                todos: [action.payload]
            }

        // case COMPLETED:
        //     return state.map(item =>
        //             item.id === action.id ? { ...item, completed: !item.completed } : item
        //         );
        default:
            return state;
    }
}

export default listReducer;