import { GET_EXPERIENCES, GET_EXPERIENCES_ERROR, GET_EXPERIENCES_LOADING, ADD_EXPERIENCE, DELETE_EXPERIENCE, EDIT_EXPERIENCE } from "../actions";

const initialState = {
  experiences: [],
  loading: false,
  error: false,
};

export const experiencesReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCES_LOADING:
      return { ...currentState, loading: true };

    case GET_EXPERIENCES:
      return {
        ...currentState,
        experiences: action.payload,
        loading: false,
      };

    case GET_EXPERIENCES_ERROR:
      return { ...currentState, error: true, loading: false };

    case ADD_EXPERIENCE:
      return {
        ...currentState,
        experiences: [...currentState.experiences, action.payload],
      };

    case EDIT_EXPERIENCE:
      return {
        ...currentState,
        experiences: currentState.experiences.map((exp) => (exp._id === action.payload._id ? action.payload : exp)),
      };

    case DELETE_EXPERIENCE:
      return {
        ...currentState,
        experiences: currentState.experiences.filter((exp) => exp._id !== action.payload),
      };

    default:
      return currentState;
  }
};
