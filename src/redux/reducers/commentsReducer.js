import {
  GET_COMMENTS,
  GET_COMMENTS_ERROR,
  GET_COMMENTS_LOADING,
} from "../actions/post"

const initialState = {
  comments: [],
  error: false,
  loading: false,
}

const commentsReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS_LOADING:
      return {
        ...currentState,
        loading: true,
        error: false,
      }
    case GET_COMMENTS:
      return {
        ...currentState,
        comments: action.payload,
        loading: false,
      }
    case GET_COMMENTS_ERROR:
      return {
        ...currentState,
        error: true,
      }

    default:
      return currentState
  }
}

export default commentsReducer
