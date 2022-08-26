import * as loginActions from "../constants/authConstants";

const initialState= {
  loginStatus: "PENDING"
}


export const authReducer = (state = initialState, action: {
  type: string;
  loginStatus: string;
}) => {
  switch (action.type) {
    case loginActions.LOGIN_STATUS:
      return {
        ...state,
        loginStatus: action.loginStatus ,
      };
    default:
      return state;
  }
}
