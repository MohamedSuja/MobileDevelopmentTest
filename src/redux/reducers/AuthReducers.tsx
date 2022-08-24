import * as loginActions from "../constants/UserConstants";

export default function reducer(
  state = { loginStatus: "PENDING" },
  action: {
    type: string;
    loginStatus: string;
  }
): { loginStatus: string } {
  switch (action.type) {
    case loginActions.LOGIN_STATUS:
      return {
        ...state,
        loginStatus: action.loginStatus,
      };
    default:
      return state;
  }
}