import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import profileEditFormReducer from "../reducers/ProfileEditFormReducer";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    modalState: profileEditFormReducer,
  },
});

export default store;
