import { combineReducers } from "redux";

import AuthReducer from "./AuthReducer";


// combine all of the reducers used
const rootReducer = combineReducers({
  userData: AuthReducer,
});

export default rootReducer;