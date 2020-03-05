import {combineReducers} from "redux";
import todoReducer from "./reducers/todoReducer";
import registerReducer from "./register/register.reducer";
import loginReducer from "./login/login.reducer";

export default combineReducers({
    todo: todoReducer, register: registerReducer, login: loginReducer
});