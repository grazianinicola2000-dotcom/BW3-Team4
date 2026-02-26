export const GET_POST = "GET_POST";
export const GET_POST_ERROR = "GET_POST_ERROR";
export const GET_POST_LOADING = "GET_POST_LOADING";
export const GET_COMMENTS = "GET_COMMENTS";
export const GET_COMMENTS_ERROR = "GET_COMMENTS_ERROR";
export const GET_COMMENTS_LOADING = "GET_COMMENTS_LOADING";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const getPost = function () {
  return async (dispatch) => {
    dispatch({ type: GET_POST_LOADING });
    const postEndpoint = "https://striveschool-api.herokuapp.com/api/posts?limit=20";
    const authorizationNG =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMTZkYTBiYzFkZTAwMTU3N2I3OWUiLCJpYXQiOjE3NzE4MzcxNTQsImV4cCI6MTc3MzA0Njc1NH0.8jsfM_MKpnxGw2osaDB_U2x4UZk7GfBUrJ1dx99sdGM";

    try {
      const response = await fetch(postEndpoint, {
        headers: {
          Authorization: `Bearer ${authorizationNG}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_POST,
          payload: data,
        });
      } else {
        dispatch({
          type: GET_POST_ERROR,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_POST_ERROR,
      });
      console.error(error);
    }
  };
};

export const getComments = function (postId) {
  return async (dispatch) => {
    dispatch({ type: GET_COMMENTS_LOADING });

    const commentsEndpoint = `https://striveschool-api.herokuapp.com/api/comments`;

    const authorizationNG =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMTZkYTBiYzFkZTAwMTU3N2I3OWUiLCJpYXQiOjE3NzE4MzcxNTQsImV4cCI6MTc3MzA0Njc1NH0.8jsfM_MKpnxGw2osaDB_U2x4UZk7GfBUrJ1dx99sdGM";

    try {
      const response = await fetch(commentsEndpoint, {
        headers: {
          Authorization: `Bearer ${authorizationNG}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error();

      if (response.ok) {
        const data = await response.json();

        dispatch({
          type: GET_COMMENTS,
          payload: data.filter((c) => c.elementId === postId),
          postId: postId,
        });
      } else {
        dispatch({ type: GET_COMMENTS_ERROR });
      }
    } catch (error) {
      dispatch({ type: GET_COMMENTS_ERROR });
      console.error(error);
    }
  };
};

export const addComment = (postId, commentText) => {
  return async (dispatch) => {
    const endpoint = "https://striveschool-api.herokuapp.com/api/comments/";
    const authorizationNG =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMTZkYTBiYzFkZTAwMTU3N2I3OWUiLCJpYXQiOjE3NzE4MzcxNTQsImV4cCI6MTc3MzA0Njc1NH0.8jsfM_MKpnxGw2osaDB_U2x4UZk7GfBUrJ1dx99sdGM";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authorizationNG}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: commentText,
          rate: 5,
          elementId: postId,
        }),
      });

      if (!response.ok) throw new Error();

      const data = await response.json();

      dispatch({
        type: ADD_COMMENT,
        payload: data,
        postId,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteComment = (commentId, postId) => {
  return async (dispatch) => {
    const endpoint = `https://striveschool-api.herokuapp.com/api/comments/${commentId}`;
    const authorizationNG =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMTZkYTBiYzFkZTAwMTU3N2I3OWUiLCJpYXQiOjE3NzE4MzcxNTQsImV4cCI6MTc3MzA0Njc1NH0.8jsfM_MKpnxGw2osaDB_U2x4UZk7GfBUrJ1dx99sdGM";

    try {
      const response = await fetch(endpoint, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${authorizationNG}`,
        },
      });

      if (!response.ok) throw new Error();

      dispatch({
        type: DELETE_COMMENT,
        commentId,
        postId,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
