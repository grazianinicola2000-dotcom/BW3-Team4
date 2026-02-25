import { OPEN_EXPERIENCE_EDIT_FORM, CLOSE_EXPERIENCE_EDIT_FORM } from "../actions";

const initialState = {
  modalState: false,
  modalMode: "add",
  selectedExperience: null,
};

const experienceEditFormReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case CLOSE_EXPERIENCE_EDIT_FORM:
      return {
        ...currentState,
        modalState: false,
        modalMode: "add",
        selectedExperience: null,
      };
    case OPEN_EXPERIENCE_EDIT_FORM:
      return {
        ...currentState,
        modalState: true,
        modalMode: action.payload.mode,
        selectedExperience: action.payload.experience,
      };
    default:
      return currentState;
  }
};

export default experienceEditFormReducer;
