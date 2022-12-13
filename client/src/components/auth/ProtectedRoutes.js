import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Constant } from "../../util/Constant";
import { authVerifyUser, logout } from "../../api";
const ProtectedRoutes = ({ children }) => {
  useEffect(() => {
    const token = localStorage.getItem(Constant.ECOM_USER_TOKEN);
    console.log(token);
    if (!token) {
      logout();
    } else {
      authVerifyUser();
    }
  }, []);

  return children;
};

export default ProtectedRoutes;
