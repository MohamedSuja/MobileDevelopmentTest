import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { DataReducer } from "./DataReducer";




export const reducers = combineReducers({
    authUser : AuthReducer,
    dataUser : DataReducer
})
