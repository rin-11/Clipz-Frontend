import { combineReducers } from "redux";

import AuthReducer from "./AuthReducer";
import InventoryReducer from './InventoryReducer'


// combine all of the reducers used
const rootReducer = combineReducers({
  userData: AuthReducer,
  inventoryData: InventoryReducer,
});

export default rootReducer;