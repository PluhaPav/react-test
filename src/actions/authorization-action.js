import * as actionTypes from "./types";

export const actionCreatorAuthorization = value => ({
    type: actionTypes.AUTHORIZATION_ACTION,
    payload: { value }
});
