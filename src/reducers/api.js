const list = [];

export default function(state = list, action) {
    switch (action.type) {
        case "STATE_API": {
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
