import { combineReducers } from "redux";

import AuthReducer from "./AuthReducer";

const rootReducer = combineReducers({
  authData: AuthReducer,
});

export default rootReducer;