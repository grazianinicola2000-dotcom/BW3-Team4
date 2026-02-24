import { CLOSE_PROFILE_EDIT_FORM, OPEN_PROFILE_EDIT_FORM } from "../actions";

const initialState = {
  modalState: false,
};

const profileEditFormReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case OPEN_PROFILE_EDIT_FORM:
      return {
        ...currentState,
        modalState: true,
      };
    case CLOSE_PROFILE_EDIT_FORM:
      return {
        ...currentState,
        modalState: false,
      };
    default:
      return currentState;
  }
};

export default profileEditFormReducer;
