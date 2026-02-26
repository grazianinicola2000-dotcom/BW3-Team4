export const GET_POST = "GET_POST"
export const GET_POST_ERROR = "GET_POST_ERROR"
export const GET_POST_LOADING = "GET_POST_LOADING"
export const GET_COMMENTS = "GET_COMMENTS"
export const GET_COMMENTS_ERROR = "GET_COMMENTS_ERROR"
export const GET_COMMENTS_LOADING = "GET_COMMENTS_LOADING"
export const CREATE_POST = "CREATE_POST"
export const CREATE_POST_ERROR = "CREATE_POST_ERROR"
export const CREATE_POST_LOADING = "CREATE_POST_LOADING"

export const getPost = function () {
  return async (dispatch) => {
    dispatch({ type: GET_POST_LOADING })
    const postEndpoint =
      "https://striveschool-api.herokuapp.com/api/posts?limit=20"
    const authorizationNG =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMTZkYTBiYzFkZTAwMTU3N2I3OWUiLCJpYXQiOjE3NzE4MzcxNTQsImV4cCI6MTc3MzA0Njc1NH0.8jsfM_MKpnxGw2osaDB_U2x4UZk7GfBUrJ1dx99sdGM"

    try {
      const response = await fetch(postEndpoint, {
        headers: {
          Authorization: `Bearer ${authorizationNG}`,
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        const data = await response.json()
        dispatch({
          type: GET_POST,
          payload: data,
        })
      } else {
        dispatch({
          type: GET_POST_ERROR,
        })
      }
    } catch (error) {
      dispatch({
        type: GET_POST_ERROR,
      })
      console.error(error)
    }
  }
}

export const getComments = function () {
  return async (dispatch) => {
    dispatch({ type: GET_COMMENTS_LOADING })

    const commentsEndpoint = `https://striveschool-api.herokuapp.com/api/comments`

    const authorizationNG =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTg5ZWRkMDI4NzNjYjAwMTUwZjAyODgiLCJpYXQiOjE3NzIwMTc4OTQsImV4cCI6MTc3MzIyNzQ5NH0.SV4PDp05twcUBUiYqDSYChr74fftMcxgxElENcYWEDs"

    try {
      const response = await fetch(commentsEndpoint, {
        headers: {
          Authorization: `Bearer ${authorizationNG}`,
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        const data = await response.json()

        dispatch({
          type: GET_COMMENTS,
          payload: data,
        })
      } else {
        dispatch({ type: GET_COMMENTS_ERROR })
      }
    } catch (error) {
      dispatch({ type: GET_COMMENTS_ERROR })
      console.error(error)
    }
  }
}

export const createPost = function (postBody) {
  return async (dispatch) => {
    dispatch({ type: CREATE_POST_LOADING })

    const postEndpoint = "https://striveschool-api.herokuapp.com/api/posts"

    const authorizationNG =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMTZkYTBiYzFkZTAwMTU3N2I3OWUiLCJpYXQiOjE3NzE4MzcxNTQsImV4cCI6MTc3MzA0Njc1NH0.8jsfM_MKpnxGw2osaDB_U2x4UZk7GfBUrJ1dx99sdGM"

    try {
      const response = await fetch(postEndpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authorizationNG}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postBody),
      })

      if (response.ok) {
        const data = await response.json()

        dispatch({
          type: CREATE_POST,
          payload: data,
        })
      } else {
        dispatch({ type: CREATE_POST_ERROR })
      }
    } catch (error) {
      dispatch({ type: CREATE_POST_ERROR })
      console.error(error)
    }
  }
}
