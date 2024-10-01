import { combineReducers } from "redux";
import loginReducer from "./loginSlice";

export const rootReducer = combineReducers({
    user: loginReducer,
})
