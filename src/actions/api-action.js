import { API_ACTION } from "./types";
import { API_URL, METHOD_LIST } from "../constants/constants";

export const actionCreatorApi = () => async dispatch => {
    try {
        const response = await fetch(API_URL + METHOD_LIST);
        dispatch({
            type: API_ACTION,
            payload: { value: await response.json() }
        });
    } catch (err) {
        console.error(err);
    }
};
