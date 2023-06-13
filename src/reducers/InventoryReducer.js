const inventoryReducer = (

    // reducer function takes two parameters: state and action 
        // state param = current state of the inventory 
        // action param = information about the action dispatched

        state = { inventory: [], loading: false, error: false, uploading: false },
        action
      ) => {
        switch (action.type) {
          case "UPLOAD_START":
            return { ...state, error: false, uploading: true };
          case "UPLOAD_SUCCESS":
            return {
              ...state,
              inventory: [action.data, ...state.inventory],
              uploading: false,
              error: false
            };
          case "UPLOAD_FAIL":
            return { ...state, uploading: false, error: true };
          case "RETREIVING_START":
            return { ...state, loading: true, error: false };
          case "RETREIVING_SUCCESS":
            return { ...state, inventory: action.data, loading: false, error: false };
          case "RETREIVING_FAIL":
            return { ...state, loading: false, error: true };
          default:
            return state;
        }
      };
      
      export default inventoryReducer;