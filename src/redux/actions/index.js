export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";
export const GET_PROFILE_LOADING = "GET_PROFILE_LOADING";

export const getProfile = function () {
  return async (dispatch) => {
    dispatch({ type: GET_PROFILE_LOADING });
    const profileEndpoint = "https://striveschool-api.herokuapp.com/api/profile/me";
    const authorizationNG =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMTZkYTBiYzFkZTAwMTU3N2I3OWUiLCJpYXQiOjE3NzE4MzcxNTQsImV4cCI6MTc3MzA0Njc1NH0.8jsfM_MKpnxGw2osaDB_U2x4UZk7GfBUrJ1dx99sdGM";

    try {
      const response = await fetch(profileEndpoint, {
        headers: {
          Authorization: `Bearer ${authorizationNG}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_PROFILE,
          payload: data,
        });
      } else {
        dispatch({
          type: GET_PROFILE_ERROR,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_PROFILE_ERROR,
      });
      console.error(error);
    }
  };
};

export default getProfile;
