export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";
export const GET_PROFILE_LOADING = "GET_PROFILE_LOADING";
export const OPEN_PROFILE_EDIT_FORM = "OPEN_PROFILE_EDIT_FORM";
export const CLOSE_PROFILE_EDIT_FORM = "CLOSE_PROFILE_EDIT_FORM";
export const EDIT_PROFILE = "EDIT_PROFILE";

export const openProfileEditForm = () => ({
  type: OPEN_PROFILE_EDIT_FORM,
});

export const closeProfileEditForm = () => ({
  type: CLOSE_PROFILE_EDIT_FORM,
});

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

export const editProfile = (updatedData) => {
  return async (dispatch) => {
    const profileEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";
    const authorizationNG =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMTZkYTBiYzFkZTAwMTU3N2I3OWUiLCJpYXQiOjE3NzE4MzcxNTQsImV4cCI6MTc3MzA0Njc1NH0.8jsfM_MKpnxGw2osaDB_U2x4UZk7GfBUrJ1dx99sdGM";
    try {
      const response = await fetch(profileEndpoint, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authorizationNG}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      console.log("RESPONSE STATUS", response.status);
      if (!response.ok) {
        throw new Error("Update profile Error");
      }
      const data = await response.json();

      dispatch({
        type: EDIT_PROFILE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const uploadProfilePicture = (userId, file) => {
  return async (dispatch) => {
    const endpoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`;
    const authorizationNG =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMTZkYTBiYzFkZTAwMTU3N2I3OWUiLCJpYXQiOjE3NzE4MzcxNTQsImV4cCI6MTc3MzA0Njc1NH0.8jsfM_MKpnxGw2osaDB_U2x4UZk7GfBUrJ1dx99sdGM";

    const formData = new FormData();
    formData.append("profile", file);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authorizationNG}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Errore upload immagine");
      }

      const data = await response.json();

      dispatch({
        type: EDIT_PROFILE,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
