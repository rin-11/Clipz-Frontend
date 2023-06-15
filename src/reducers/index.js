import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import inventoryReducer from './InventoryReducer'

const rootReducer = combineReducers({
  authReducer,
  inventoryReducer,
});

export default rootReducer;