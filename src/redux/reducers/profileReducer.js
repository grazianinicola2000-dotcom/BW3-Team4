import { GET_PROFILE, GET_PROFILE_ERROR, GET_PROFILE_LOADING } from "../actions";

const initialState = {
  profileDetails: [],
  error: false,
  loading: false,
};

const profileReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_LOADING:
      return {
        ...currentState,
        loading: true,
        error: false,
      };
    case GET_PROFILE:
      return {
        ...currentState,
        profileDetails: action.payload,
        loading: false,
      };
    case GET_PROFILE_ERROR:
      return {
        ...currentState,
        error: true,
      };
    default:
      return profileReducer;
  }
};

export default profileReducer;
