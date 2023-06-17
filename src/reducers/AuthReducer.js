const authReducer = (state = { authData: null, loading: false, error: false, updateLoading: false },action) => {
  switch (action.type) {
    case "AUTH_START":
      return {...state, loading: true, error: false };
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({...action?.userData}));
  return {...state,  authData: action.userData, loading: false, error: false };

    case "AUTH_FAIL":
      return {...state, loading: false, error: true };

    case "UPDATING_START":
      return {...state, updateLoading: true , error: false}
    case "UPDATING_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({...action?.data}));
      return {...state, authData: action.userData, updateLoading: false, error: false}
     
    case "UPDATING_FAIL":
      return {...state, updateLoading: true, error: true}



    case "LOG_OUT":
      localStorage.clear();
      return {...state,  authData: null, loading: false, error: false, updateLoading: false }


      case "FOLLOW_USER":
        const { data } = action;
        const updatedUser = state.authData.user; // Fetch the current user object
        const updatedFollowing = [...updatedUser.following, data]; // Update the following array with the user object
        const updatedAuthData = {
          ...state.authData,
          user: {
            ...updatedUser,
            following: updatedFollowing
          }
        };
        return {
          ...state,
          authData: updatedAuthData
        };
      return {...state, authData: {...state.authData, user: {...state.authData.user, following: [...state.authData.user.following.filter((personId)=>personId!==action.userData)]} }}

      default:
      return state;
  }
};

export default authReducer;