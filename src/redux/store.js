import { configureStore } from "@reduxjs/toolkit";
import { default as authReducer } from "./authSlice";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers  } from "@reduxjs/toolkit";
const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2, // Xem thêm tại mục "Quá trình merge".
  serializableCheck: false,
};
const rootReducer = combineReducers({
  auth: authReducer,
});
const pReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: pReducer,
});
export const persistor = persistStore(store);

// const store = configureStore({
//   reducer: rootReducer,
// });


export default store;
