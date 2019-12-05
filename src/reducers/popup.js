import * as actionTypes from "../actions/types";

const popupState = {
    popup: false
};

export default function(state = popupState, action) {
    switch (action.type) {
        case actionTypes.POPUP_ACTION: {
            const { value = false } = action.payload;

            return {
                ...state,
                popup: value
            };
        }
        default:
            return state;
    }
}
