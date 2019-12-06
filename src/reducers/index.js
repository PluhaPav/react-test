import { combineReducers } from "redux";
import app from "./app";
import popup from "./popup";
import authorization from "./authorization";
import api from "./api";

const reducers = {
    app,
    popup,
    authorization,
    api
};

export default combineReducers(reducers);
