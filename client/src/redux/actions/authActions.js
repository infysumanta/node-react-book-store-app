import * as api from "../../api";
import { authTypes } from "../types/authTypes";
import { toast, Toaster } from "react-hot-toast";
import { Constant } from "../../util/Constant";
export const authActions = (dispatch) => {
  return {
    login: (payload, history) => dispatch(login(payload, history)),
    register: (payload, history) => dispatch(register(payload, history)),
  };
};

const setUserDetails = (payload) => {
  return {
    type: authTypes.SET_USER_DETAILS,
    payload: payload,
  };
};

const login = (payload, history) => {
  return async (dispatch) => {
    const response = await api.login(payload);

    if (response?.data?.success) {
      toast.success(response?.data?.message);

      localStorage.setItem(
        Constant.ECOM_USER_DETAILS,
        JSON.stringify(response.data.data)
      );
      localStorage.setItem(
        Constant.ECOM_USER_TOKEN,
        JSON.stringify(response.data.data.token)
      );

      dispatch(setUserDetails(response.data.data));

      history.push("/");
    } else {
      toast.error(response?.error?.response?.data?.message);
    }
  };
};

const register = (payload, history) => {
  return async (dispatch) => {
    const response = await api.register(payload);

    if (response.statusText === "OK") {
      toast.success(response?.data?.message);

      localStorage.setItem(
        Constant.ECOM_USER_DETAILS,
        JSON.stringify(response.data.data)
      );
      localStorage.setItem(
        Constant.ECOM_USER_TOKEN,
        JSON.stringify(response.data.data.token)
      );

      dispatch(setUserDetails(response.data.data));

      history.push("/");
    } else {
      toast.error(response?.error?.response?.data?.message);
    }
  };
};
