import {combineReducers} from "redux";
import listReducer from "./reducers/listReducer";
import registerReducer from "./register/register.reducer";
import loginReducer from "./login/login.reducer";
import todoReducer from "./reducers/todoReducer";

export default combineReducers({
    list: listReducer, register: registerReducer, login: loginReducer, todo: todoReducer
});