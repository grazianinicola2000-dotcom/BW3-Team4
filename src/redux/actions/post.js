export const GET_POST = "GET_POST";
export const GET_POST_ERROR = "GET_POST_ERROR";
export const GET_POST_LOADING = "GET_POST_LOADING";
export const GET_COMMENTS = "GET_COMMENTS";
export const GET_COMMENTS_ERROR = "GET_COMMENTS_ERROR";
export const GET_COMMENTS_LOADING = "GET_COMMENTS_LOADING";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const CREATE_POST = "CREATE_POST";
export const CREATE_POST_ERROR = "CREATE_POST_ERROR";
export const CREATE_POST_LOADING = "CREATE_POST_LOADING";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";

export const getPost = function () {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    dispatch({ type: GET_POST_LOADING });
    const postEndpoint = "https://striveschool-api.herokuapp.com/api/posts?limit=20";

    try {
      const response = await fetch(postEndpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
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
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    dispatch({ type: GET_COMMENTS_LOADING });

    const commentsEndpoint = `https://striveschool-api.herokuapp.com/api/comments`;

    try {
      const response = await fetch(commentsEndpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
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

export const createPost = function (postBody, imageFile) {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    dispatch({ type: CREATE_POST_LOADING });

    const postEndpoint = "https://striveschool-api.herokuapp.com/api/posts";

    try {
      const response = await fetch(postEndpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postBody),
      });

      if (!response.ok) throw new Error("Errore creazione post");

      const newPost = await response.json();

      if (imageFile) {
        const formData = new FormData();
        formData.append("post", imageFile);

        const imageResponse = await fetch(`${postEndpoint}/${newPost._id}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        if (!imageResponse.ok) {
          throw new Error("Errore upload immagine");
        }

        const updatedPost = await imageResponse.json();

        dispatch({
          type: CREATE_POST,
          payload: updatedPost,
        });
      } else {
        dispatch({
          type: CREATE_POST,
          payload: newPost,
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: CREATE_POST_ERROR });
    }
  };
};

export const addComment = (postId, commentText) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const endpoint = "https://striveschool-api.herokuapp.com/api/comments/";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
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
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const endpoint = `https://striveschool-api.herokuapp.com/api/comments/${commentId}`;

    try {
      const response = await fetch(endpoint, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
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

export const editPost = (postId, postData) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const endpoint = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;

    try {
      const response = await fetch(endpoint, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) throw new Error();

      const data = await response.json();

      dispatch({
        type: EDIT_POST,
        payload: data,
      });

      return data;
    } catch (error) {
      console.error(error);
    }
  };
};

export const deletePost = (postId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const endpoint = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;

    try {
      const response = await fetch(endpoint, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Errore nel delete");

      dispatch({
        type: DELETE_POST,
        payload: postId,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
