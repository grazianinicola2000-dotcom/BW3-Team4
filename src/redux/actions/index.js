export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";
export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const GET_PROFILE_LOADING = "GET_PROFILE_LOADING";
export const OPEN_PROFILE_EDIT_FORM = "OPEN_PROFILE_EDIT_FORM";
export const CLOSE_PROFILE_EDIT_FORM = "CLOSE_PROFILE_EDIT_FORM";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const GET_ALL_PROFILES = "GET_ALL_PROFILES";

export const openProfileEditForm = () => ({
  type: OPEN_PROFILE_EDIT_FORM,
});

export const closeProfileEditForm = () => ({
  type: CLOSE_PROFILE_EDIT_FORM,
});

export const getAllProfiles = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMTZkYTBiYzFkZTAwMTU3N2I3OWUiLCJpYXQiOjE3NzE4MzcxNTQsImV4cCI6MTc3MzA0Njc1NH0.8jsfM_MKpnxGw2osaDB_U2x4UZk7GfBUrJ1dx99sdGM`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();

        dispatch({
          type: GET_ALL_PROFILES,
          payload: data,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const getProfile = function (userId) {
  return async (dispatch, getState) => {
    dispatch({ type: GET_PROFILE_LOADING });
    const token = getState().auth.token;

    const isMe = !userId || userId === "me";
    const target = isMe ? "me" : userId;
    const profileEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${target}`;

    try {
      const response = await fetch(profileEndpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: isMe ? GET_MY_PROFILE : GET_PROFILE,
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

export const editProfile = (updatedData, userId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const target = userId && userId !== "me" ? userId : "";
    const profileEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${target}`;

    try {
      const response = await fetch(profileEndpoint, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: EDIT_PROFILE,
          payload: data,
        });
      } else {
        dispatch({
          type: EDIT_PROFILE,
          payload: { ...updatedData, _id: userId },
        });
      }
    } catch (error) {
      dispatch({
        type: EDIT_PROFILE,
        payload: { ...updatedData, _id: userId },
      });
      console.log(error);
    }
  };
};

export const uploadProfilePicture = (userId, file) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const endpoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`;

    const formData = new FormData();
    formData.append("profile", file);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: EDIT_PROFILE,
          payload: data,
        });
      } else {
        const localImageUrl = URL.createObjectURL(file);
        dispatch({
          type: EDIT_PROFILE,
          payload: { image: localImageUrl, _id: userId },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
};

// EXPERIENCE
export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const GET_EXPERIENCES_LOADING = "GET_EXPERIENCES_LOADING";
export const GET_EXPERIENCES_ERROR = "GET_EXPERIENCES_ERROR";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const EDIT_EXPERIENCE = "UPDATE_EXPERIENCE";
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE";
export const OPEN_EXPERIENCE_EDIT_FORM = "OPEN_EXPERIENCE_EDIT_FORM";
export const CLOSE_EXPERIENCE_EDIT_FORM = "CLOSE_EXPERIENCE_EDIT_FORM";

export const openExperienceEditForm = (payload) => ({
  type: OPEN_EXPERIENCE_EDIT_FORM,
  payload,
});

export const closeExperienceEditForm = () => ({
  type: CLOSE_EXPERIENCE_EDIT_FORM,
});

export const getExperiences = (userId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const endpoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;

    dispatch({ type: GET_EXPERIENCES_LOADING });

    try {
      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error();

      const data = await response.json();

      dispatch({
        type: GET_EXPERIENCES,
        payload: data,
      });
    } catch {
      dispatch({ type: GET_EXPERIENCES_ERROR });
    }
  };
};

export const addExperience = (userId, expData) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const endpoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expData),
      });
      if (!response.ok) throw new Error();
      const data = await response.json();

      dispatch({
        type: ADD_EXPERIENCE,
        payload: data,
      });

      return data;
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateExperience = (userId, expId, expData) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const endpoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`;

    try {
      const response = await fetch(endpoint, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expData),
      });
      if (!response.ok) throw new Error();
      const data = await response.json();

      dispatch({
        type: EDIT_EXPERIENCE,
        payload: data,
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteExperience = (userId, expId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const endpoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`;

    try {
      const response = await fetch(endpoint, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error();

      dispatch({
        type: DELETE_EXPERIENCE,
        payload: expId,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const uploadExperiencePicture = (userId, expId, file) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const endpoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`;

    const formData = new FormData();
    formData.append("experience", file);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Errore upload immagine");
      }

      const data = await response.json();

      dispatch({
        type: EDIT_EXPERIENCE,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

// CONTACT INFO

export const OPEN_CONTACT_INFO_MODAL = "OPEN_CONTACT_INFO_MODAL";
export const CLOSE_CONTACT_INFO_MODAL = "CLOSE_CONTACT_INFO_MODAL";

export const openContactInfoModal = () => ({
  type: OPEN_CONTACT_INFO_MODAL,
});

export const closeContactInfoModal = () => ({
  type: CLOSE_CONTACT_INFO_MODAL,
});

// JOBS PAGE

export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";
export const SET_SEARCH = "SET_SEARCH";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";

export const addToCartAction = (data) => ({
  type: ADD_TO_FAVOURITE,
  payload: data,
});

export const removeFromCartAction = (i) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: i,
});

export const setSearchInput = (formValue) => ({
  type: SET_SEARCH,
  payload: formValue,
});

export const getJobs = (query) => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  return async (dispatch) => {
    dispatch({
      type: GET_JOBS_LOADING,
    });

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      } else {
        dispatch({
          type: GET_JOBS_ERROR,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_JOBS_ERROR,
      });
    }
  };
};

// AUTH SECTION

export const setActiveUser = (user) => {
  return {
    type: "SET_ACTIVE_USER",
    payload: user,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
