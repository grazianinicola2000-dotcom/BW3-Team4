import { GET_POST, GET_POST_ERROR, GET_POST_LOADING } from "../actions/post"

const initialState = {
  postDetails: [],
  error: false,
  loading: false,
}

const postReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_POST_LOADING:
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
    case GET_POST_ERROR:
      return {
        ...currentState,
        error: true,
      }

    default:
      return currentState
  }
}

export default postReducer
