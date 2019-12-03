import * as actionTypes from "./types";

const actionCreator = () => (dispatch, getState) => {
    setTimeout(() => {
        const state = getState();

        dispatch({
            type: actionTypes.MY_FIRST_ACTION,
            payload: { value: state.app.propB + 1 }
        });
    }, 1000);
};

export default actionCreator;
