const AuthReducer = (state = { authData: null, error: false }, action) => {
    const actionHandlers = {
      AUTH_START: { ...state, error: false },
      AUTH_SUCCESS: {
        ...state,
        authData: action.userData,
        error: false,
      },
      AUTH_FAILURE: { ...state, error: true },
    };
  
    return actionHandlers[action.type] || state;
  };
  
  export default AuthReducer;