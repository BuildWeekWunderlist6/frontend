import axios from "axios";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";


const loginUser = (user, props) => dispatch =>{
dispatch({type: LOGIN_START});
axios
    .post(`https://ls-wunderlist--production.herokuapp.com/api/users/login`, user)
    .then(response => {
        const token = response.data.token;
        window.localStorage.setItem("token", token);
        dispatch({ type: LOGIN_SUCCESS, payload: response.data})
        console.log("this is from inside the action creator", response.data);
        props.history.push('/dashboard');
        console.log(response.data);
    })
    .catch(error => {
        dispatch({type: LOGIN_FAIL, payload: error.repsonse})
        console.log("Error", error);
        
    })

}

export default loginUser;