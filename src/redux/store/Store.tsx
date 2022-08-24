import { createStore } from "redux";
import reducer from "../reducers/AuthReducers";

const store: any = createStore(reducer);

export default store;