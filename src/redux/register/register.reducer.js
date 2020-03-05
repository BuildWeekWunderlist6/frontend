import jwt from "jsonwebtoken";
import {REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL} from "./register.action";

const initialState = {
addingUser: false,
addedUser: false,
user: jwt.decode(localStorage.getItem("token")),
token: "",
error: "",

}


export const registerReducer = (state=initialState, action) => {
    switch(action.type){
        case REGISTER_START:
            return{
                ...state,
                addingUser: true,
                addedUser: false,
                error: "",
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                addingUser: false,
                addedUser: true,
                user: action.payload.user,
                error: "",
            }
        case REGISTER_FAIL:
            return{
                ...state,
                addedUser: false,
                error: action.payload
            }
        
        default: 
        return state;
    }
}

export default registerReducer;