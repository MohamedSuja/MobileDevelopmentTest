import * as loginActions from "../constants/AuthConstants";

const initialState= {  
  firstName: '',
  lastName:'',
  email:''
}


export const DataReducer = (state = initialState, action: {
  type: string;
  payload: string;
}) => {
  switch (action.type) {
    case loginActions.USER_DATAS:
      return {
        loginStatus: action.payload ,
      };
    default:
      return state;
  }
}
