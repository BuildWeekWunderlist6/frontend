import axios from "axios";
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";


const registerUser = user => dispatch =>{
dispatch({type: REGISTER_START});
axios
    .post(`https://ls-wunderlist--production.herokuapp.com/api/users/register`, user)
    .then(response => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        dispatch({ type: REGISTER_SUCCESS, payload: response.data})
        console.log("this is from inside the action creator", response.data);
      
        console.log(response.data);
    })
    .catch(error => {
        dispatch({type: REGISTER_FAIL, payload: error.repsonse})
        console.log("Error", error);
        
    })

}

export default registerUser;