import * as actionTypes from "./types";

export const actionCreatorPopup = value => ({
    type: actionTypes.POPUP_ACTION,
    payload: { value }
});