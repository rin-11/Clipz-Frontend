// Reducer function related to Auth. 
// Takes the current state & an action (action.type) & manipulates the state/returns new state

// Reducer function for updating the authentication-related state:
const AuthReducer = (state = { authData: null, loading: false, error: false, updateLoading: false },action) => {
    // switch statement checks the value of action type (from the authAction.js), which represents the action being dispatched
    switch(action.type)
    {
        case "AUTH_START":
            return{...state, loading: true, error: false}
        case "AUTH_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({...action?.userData})) // store in local storage
            return{...state, authData: action.userData, loading: false, error: false} // the data received from the successful authentication
        case "AUTH_FAILURE":
            return{...state, loading: false, error: true}
        default:
                return state
    }
}

export default AuthReducer