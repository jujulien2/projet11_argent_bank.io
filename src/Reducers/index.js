import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user.reducer";
import SignInReducer from "./Submit.reducer";

export default combineReducers({
    userReducer,
    SignInReducer,
});