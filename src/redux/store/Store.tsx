import { createStore } from "redux";
import { reducers } from "../reducers";
import AuthReducer from "../reducers/AuthReducer";

const store: any = createStore(AuthReducer);

export default store;