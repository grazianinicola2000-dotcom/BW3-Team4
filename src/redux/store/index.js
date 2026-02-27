import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import profileEditFormReducer from "../reducers/ProfileEditFormReducer";
import { experiencesReducer } from "../reducers/experienceReducer";
import postReducer from "../reducers/postReducer";
import experienceEditFormReducer from "../reducers/ExperienceEditFormReducer";
import commentsReducer from "../reducers/commentsReducer";
import jobSearchReducer from "../reducers/jobSearchReducer";
import contactInfoReducer from "../reducers/contactInfoReducer";
import authReducer from "../reducers/authReducer";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    modalState: profileEditFormReducer,
    experiences: experiencesReducer,
    post: postReducer,
    expModalState: experienceEditFormReducer,
    contactModalState: contactInfoReducer,
    searched: jobSearchReducer,
    comments: commentsReducer,
    auth: authReducer,
  },
});

export default store;
