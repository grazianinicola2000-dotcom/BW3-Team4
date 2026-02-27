import {
  GET_POST,
  GET_POST_ERROR,
  GET_POST_LOADING,
  CREATE_POST,
  CREATE_POST_ERROR,
  CREATE_POST_LOADING,
  EDIT_POST,
  DELETE_POST,
} from "../actions/post"

const initialState = {
  postDetails: [],
  error: false,
  loading: false,
}

const postReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_POST_LOADING:
    case CREATE_POST_LOADING:
      return {
        ...currentState,
        loading: true,
        error: false,
      }
    case GET_POST:
      return {
        ...currentState,
        postDetails: action.payload,
        loading: false,
      }
    case CREATE_POST:
      return {
        ...currentState,
        loading: false,
        postDetails: [action.payload, ...currentState.postDetails],
      }
    case EDIT_POST:
      return {
        ...currentState,
        postDetails: currentState.postDetails.map((post) =>
          post._id === action.payload._id ? action.payload : post,
        ),
      }
    case DELETE_POST:
      return {
        ...currentState,
        loading: false,
        postDetails: currentState.postDetails.filter(
          (p) => p._id !== action.payload,
        ),
      }
    case GET_POST_ERROR:
    case CREATE_POST_ERROR:
      return {
        ...currentState,
        error: true,
      }

    default:
      return currentState
  }
}

export default postReducer
