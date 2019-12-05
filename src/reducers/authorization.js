import * as actionTypes from "../actions/types";

const authorizationState = {
    authorization: false
};

export default function(state = authorizationState, action) {
    switch (action.type) {
        case actionTypes.AUTHORIZATION_ACTION: {
            const { value = false } = action.payload;

            return {
                ...state,
                authorization: value
            };
        }
        default:
            return state;
    }
}
