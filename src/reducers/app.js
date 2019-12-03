const initialState = {
    propA: 1,
    propB: 2
};

export default function (state = initialState, action){
    switch(action.type) {
        case 'MY_FIRST_ACTION': {
            const { value = 34 } =action.payload;

            return ({
                ...state,
                propB: value
            })
        }
        default: return state;
    }
};
