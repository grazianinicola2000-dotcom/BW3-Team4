export const GET_POST = "GET_POST"
export const GET_POST_ERROR = "GET_POST_ERROR"
export const GET_POST_LOADING = "GET_POST_LOADING"

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
