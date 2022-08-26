import * as loginActions from "../constants/AuthConstants";


export const LoginForm = (useremail: string, password: string, token: string) => {
  return {
    type: loginActions.LOGIN_STATUS,
    loginStatus:
      /* useremail.toLowerCase() === "a" && password === "a" */
      token
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


export const UserForm = (firstName: string, lastName: string, email: string, company: any[]) => {
  return {
    type: loginActions.USER_DATAS,
    payload:{
      firstName:firstName,
      lastName:lastName,
      email:email,
      company:company
    }
  };
};