import { API_ACTION } from "./types";
import { API_URL, METHOD_LIST } from "../constants/constants";
// import { list } from "../constants/list";

export const actionCreatorApi = () => async dispatch => {
    try {
        const response = await fetch(API_URL + METHOD_LIST);
        const result = await response.json();
        dispatch({
            type: API_ACTION,
            payload: { value: result }
        });
    } catch (err) {
        console.error(err);
    }
};
