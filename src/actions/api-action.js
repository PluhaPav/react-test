import * as actionTypes from "./types";

export const actionCreatorApi = () => dispatch => {
    fetch("http://localhost:9999/api/list")
        .then(response => response.json())
        .then(result => {
            dispatch({
                type: actionTypes.API_ACTION,
                payload: { value: result }
            });
        })
        .catch(e => console.log(e));
};
