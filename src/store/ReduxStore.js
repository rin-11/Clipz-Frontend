import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../reducers/AuthReducer';
import inventoryReducer from '../reducers/InventoryReducer';

// combine all reducers used (I will need a reducer for uploading)
const rootReducer = combineReducers({
  auth: authReducer,
  inventory: inventoryReducer
});

const persistConfig = {
  key: 'root',
  storage,
}; // This line defines the configuration object for persisting the Redux store. It specifies a key of 'root' and uses the 'storage' object for storing the persisted state.

// This line creates a persisted reducer by passing the persistConfig and rootReducer to the persistReducer function. It wraps the rootReducer with the persistence logic.
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

// This line creates the Redux store using the configureStore function from Redux Toolkit. It takes an object with the 'reducer' property set to the persistedReducer, and the 'middleware' property is a function that returns the default middleware with the serializableCheck option disabled. It also includes the 'thunk' middleware for handling asynchronous actions.
const persistor = persistStore(store);

export { store, persistor };