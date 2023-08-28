import { combineReducers } from "@reduxjs/toolkit";
import SignInReducer from "./Submit.reducer";
import EditSubmitReducer from "./EditName.reducer";

export default combineReducers({
    SignInReducer,
    EditSubmitReducer
});