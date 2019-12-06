import * as actionTypes from "./types";
import { API_URL, METHOD_LIST } from "../constants/constants";

export const actionCreatorApi = () => dispatch => {
    // fetch(constants.API_URL)
    //     .then(response => response.json())
    //     .then(result => {
    //         dispatch({
    //             type: actionTypes.API_ACTION,
    //             payload: { value: result }
    //         });
    //     })
    //     .catch(e => console.error(e));

    (async () => {
        try {
            let response = await fetch(API_URL + METHOD_LIST);
            let result = await response.json();
            dispatch({
                type: actionTypes.API_ACTION,
                payload: { value: result }
            });
        } catch (err) {
            console.error(err);
        }
    })();
};
