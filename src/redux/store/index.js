import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import profileEditFormReducer from "../reducers/ProfileEditFormReducer";
import { experiencesReducer } from "../reducers/experienceReducer";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    modalState: profileEditFormReducer,
    experiences: experiencesReducer,
  },
});

export default store;
