/* eslint-disable import/no-named-default */
import { combineReducers } from "redux";
import { default as appReducer } from "./app";
import { default as popupReducer } from "./popup";
import { default as authorizationReducer } from "./authorization";

const reducers = {
    app: appReducer,
    popup: popupReducer,
    authorization: authorizationReducer
};

export default combineReducers(reducers);
