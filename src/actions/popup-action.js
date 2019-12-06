import { POPUP_ACTION } from "./types";

export const actionCreatorPopup = value => ({
    type: POPUP_ACTION,
    payload: { value }
});
