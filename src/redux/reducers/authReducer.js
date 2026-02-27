const savedAuth = localStorage.getItem("auth");

const initialState = savedAuth
  ? JSON.parse(savedAuth)
  : {
      user: null,
      token: null,
    };

const authReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_USER":
      localStorage.setItem("auth", JSON.stringify(action.payload));
      return {
        ...currentState,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "LOGOUT":
      localStorage.removeItem("auth");
      return {
        user: null,
        token: null,
      };

    default:
      return currentState;
  }
};

export default authReducer;
