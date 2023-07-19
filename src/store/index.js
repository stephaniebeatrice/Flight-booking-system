import { configureStore } from "@reduxjs/toolkit";
import { persistCombineReducers, persistStore } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { bookingReducer } from "./bookingSlice";
import authReducer from "./authSlice";

const persistConfig = { key: "root", version: 1, storage: localStorage };
const rootReducer = {
  bookingReducer,
  authReducer,
};
const persistedCombineReducers = persistCombineReducers(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedCombineReducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
});

export const persistor = persistStore(store);
export default store;
