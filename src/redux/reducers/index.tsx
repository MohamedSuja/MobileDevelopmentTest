import { combineReducers } from "redux";
import { authReducer } from "./authReducer";




export const reducers = combineReducers({
    authUser : authReducer
})
