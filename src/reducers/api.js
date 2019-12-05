import * as actionTypes from "../actions/types";

const list = [];

export default function(state = list, action) {
    switch (action.type) {
        case actionTypes.API_ACTION: {
            const { value = [] } = action.payload;
            return {
                ...state,
                list: value
            };
        }
        default:
            return state;
    }
}
