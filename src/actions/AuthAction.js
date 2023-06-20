//import all exports from AuthRequests
import * as AuthRequest from '../api/AuthRequest'


// Export the 'loginUser' action creator with an async function that takes the form data and dispatches as parameters:
export const loginUser = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    // make an API call to the loginUser endpoint using form data -- destructure to extract the 'data' property from response
    const { data } = await AuthRequest.loginUser(formData);

    // notify the reducer to update the state with the user data
    dispatch({ type: "AUTH_SUCCESS", userData: data });
    console.log("Log In Successful");
    return data;  
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
    console.log("Log In Error");
  }
};

// Export the 'registerUser' action creator with an async function that takes the form data and dispatches as parameters:
export const registerUser = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    // make an API call to the loginUser endpoint using form data -- destructure to extract the 'data' property from response
    const { data } = await AuthRequest.registerUser(formData);
  // notify the reducer to update the state with the user data
    dispatch({ type: "AUTH_SUCCESS", userData: data });
    console.log("Register User Successful");
    return data; 
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
    console.log("Register Error");
  }
};

// clear userdata to logout
export const logoutUser = ()=> async(dispatch)=> {
  dispatch({type: "LOG_OUT"})
}
