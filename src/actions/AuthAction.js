import * as AuthApi from '../api/AuthRequest'

// Contain Redux actions related to authentication (loginUser & registerUser) 
// Actions make API calls & dispatch actions to the Redux store with a payload containing the userData

export const loginUser = (formData) => async(dispatch) => {
    dispatch({type: "AUTH_START"})
    try{
        const {userData} = await AuthApi.loginUser(formData)
        dispatch({type: "AUTH_SUCCESS", userData: userData})
        console.log("Log In Successful");
    }
    catch (error) {
        console.log(error)
        dispatch({type: "AUTH_FAILURE"})
        console.log("Log In Unsuccessful");
    }
}

export const registerUser = (formData) => async(dispatch) => {
    dispatch({type: "AUTH_START"})
    try{
        const {userData} = await AuthApi.registerUser(formData)
        dispatch({type: "AUTH_SUCCESS", userData: userData})
        console.log("Register User Successful");
    }
    catch (error) {
        console.log(error)
        dispatch({type: "AUTH_FAILURE"})
        console.log("Register User Unsuccessful");
    }
}