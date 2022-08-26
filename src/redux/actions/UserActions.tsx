import * as loginActions from "../constants/authConstants";


export const LoginForm = (useremail: string, password: string) => {
  return {
    type: loginActions.LOGIN_STATUS,
    loginStatus:
      useremail.toLowerCase() === "a" && password === "a"
        ? "SUCCESS"
        : "FAILED",
  };
};

export const LogOut = () => {
  return {
    type: loginActions.LOGIN_STATUS,
    loginStatus:"LogOut",
  };
};