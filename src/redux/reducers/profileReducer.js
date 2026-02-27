import { GET_PROFILE, GET_MY_PROFILE, GET_PROFILE_ERROR, GET_PROFILE_LOADING, EDIT_PROFILE } from "../actions";

const initialState = {
  profileDetails: null,
  myProfile: null,      
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
    case GET_MY_PROFILE:
      return {
        ...currentState,
        myProfile: action.payload,
        loading: false,
      };
    case GET_PROFILE_ERROR:
      return {
        ...currentState,
        error: true,
        loading: false,
      };
    case EDIT_PROFILE:
      return {
        ...currentState,
        profileDetails: action.payload,
        myProfile: currentState.myProfile?._id === action.payload._id 
          ? action.payload 
          : currentState.myProfile,
        loading: false,
      };
    default:
      return currentState;
  }
};

export default profileReducer;