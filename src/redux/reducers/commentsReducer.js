import { ADD_COMMENT, GET_COMMENTS, GET_COMMENTS_ERROR, GET_COMMENTS_LOADING } from "../actions/post";

const initialState = {
  comments: {},
  error: false,
  loading: false,
};

const commentsReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS_LOADING:
      return {
        ...currentState,
        loading: true,
        error: false,
      };
    case GET_COMMENTS:
      return {
        ...currentState,
        comments: {
          ...currentState.comments,
          [action.postId]: action.payload,
        },
        loading: false,
      };
    case GET_COMMENTS_ERROR:
      return {
        ...currentState,
        error: true,
      };
    case ADD_COMMENT:
      return {
        ...currentState,
        comments: {
          ...currentState.comments,
          [action.postId]: [...(currentState.comments[action.postId] || []), action.payload],
        },
      };
    default:
      return currentState;
  }
};

export default commentsReducer;
