/* eslint-disable import/no-named-default */
import { combineReducers } from "redux";
import { default as appReducer } from "./app";

const reducers = {
    app: appReducer
};

export default combineReducers(reducers);
