import { GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOADING, SET_SEARCH } from "../actions";

const initialState = {
  jobs: [],
  error: false,
  searched: "",
  loading: false,
};

const jobSearchReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...currentState,
        searched: action.payload,
      };
    case GET_JOBS_LOADING:
      return {
        ...currentState,
        loading: true,
      };
    case GET_JOBS:
      return {
        ...currentState,
        jobs: action.payload,
        loading: false,
      };
    case GET_JOBS_ERROR:
      return {
        ...currentState,
        error: true,
      };
    default:
      return currentState;
  }
};

export default jobSearchReducer;
