import { authTypes } from "../types/authTypes";

const initialState = {
  user: null,
};

export const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case authTypes.SET_USER_DETAILS:
      return {
        ...state,
        user: action.payload,
      };
    case authTypes.REMOVE_USER_DETAILS: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};
