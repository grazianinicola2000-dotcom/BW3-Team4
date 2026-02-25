import { OPEN_CONTACT_INFO_MODAL, CLOSE_CONTACT_INFO_MODAL } from "../actions";

const initialState = {
  modalState: false,
};

const contactInfoReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case OPEN_CONTACT_INFO_MODAL:
      return {
        ...currentState,
        modalState: true,
      };
    case CLOSE_CONTACT_INFO_MODAL:
      return {
        ...currentState,
        modalState: false,
      };
    default:
      return currentState;
  }
};

export default contactInfoReducer;
