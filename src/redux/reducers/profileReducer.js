import { GET_MY_PROFILE, GET_PROFILE_ERROR, GET_PROFILE_LOADING, EDIT_PROFILE, GET_ALL_PROFILES, GET_PROFILE } from "../actions";

const initialState = {
  profileDetails: null,
  myProfile: null,
  profiles: {},
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
    case GET_ALL_PROFILES: {
      const profilesMap = {};

      action.payload.forEach((profile) => {
        if (profile.username) {
          profilesMap[profile.username] = profile;
        }

        if (profile.email) {
          profilesMap[profile.email] = profile;
        }
      });

      return {
        ...currentState,
        profiles: profilesMap,
      };
    }
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
        profileDetails: {
          ...currentState.profileDetails,
          ...action.payload,
        },
        myProfile: {
          ...currentState.myProfile,
          ...action.payload,
        },
      };
    default:
      return currentState;
  }
};

export default profileReducer;
