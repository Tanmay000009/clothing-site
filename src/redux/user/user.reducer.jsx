import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // here this stacking means for either case
    // same thing to do
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        e: null,
      };
    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        e: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
