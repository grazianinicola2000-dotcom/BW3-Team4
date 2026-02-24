import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import profileEditFormReducer from "../reducers/ProfileEditFormReducer";
import { experiencesReducer } from "../reducers/experienceReducer";
import experienceEditFormReducer from "../reducers/ExperienceEditFormReducer";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    modalState: profileEditFormReducer,
    experiences: experiencesReducer,
    expModalState: experienceEditFormReducer,
  },
});

export default store;
