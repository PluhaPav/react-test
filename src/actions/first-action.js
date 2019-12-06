import { MY_FIRST_ACTION } from "./types";

const actionCreator = () => (dispatch, getState) => {
    setTimeout(() => {
        const state = getState();

        dispatch({
            type: MY_FIRST_ACTION,
            payload: { value: state.app.propB + 1 }
        });
    }, 1000);
};

export default actionCreator;
