import * as AuthApi from '../api/AuthRequest'

export const loginUser = (formData) => async(dispatch) => {
    dispatch({type: "AUTH_START"})
    try{
        const {userData} = await AuthApi.loginUser(formData)
        dispatch({type: "AUTH_SUCCESS", userData: userData})
    }
    catch (error) {
        console.log(error)
        dispatch({type: "AUTH_FAILURE"})
    }
}

export const registerUser = (formData) => async(dispatch) => {
    dispatch({type: "AUTH_START"})
    try{
        const {userData} = await AuthApi.registerUser(formData)
        dispatch({type: "AUTH_SUCCESS", userData: userData})
    }
    catch (error) {
        console.log(error)
        dispatch({type: "AUTH_FAILURE"})
    }
}