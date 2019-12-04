const authorizationState = {
    authorization: false
};


export default function(state = authorizationState, action) {
    switch (action.type) {
        case "STATE_AUTHORIZATION": {
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