import jwt from "jsonwebtoken";
import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL} from "./login.action";

const initialState = {
loggingInUser: false,
loggedInUser: false,
token: localStorage.getItem("token"),
user: null,
error: "",

}


export const loginReducer = (state=initialState, action) => {
    switch(action.type){
        case LOGIN_START:
            return{
                ...state,
                loggingInUser: true,
                loggedInUser: false,
                error: "",
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                loggingInUser: false,
                loggedInUser: true,
                user: jwt.decode(localStorage.getItem("token")),
                token: action.payload.token,
                error: "",
            }
        case LOGIN_FAIL:
            return{
                ...state,
                loggingInUser: false,
                loggedInUser: false,
                error: action.payload
            }
        
        default: 
        return state;
    }
}

export default loginReducer;