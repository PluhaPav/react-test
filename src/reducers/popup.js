const popupState = {
    popup: false
};

export default function(state = popupState, action) {
    switch (action.type) {
        case "STATE_POPUP": {
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
