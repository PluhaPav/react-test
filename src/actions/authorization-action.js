import { AUTHORIZATION_ACTION } from "./types";

export const actionCreatorAuthorization = value => ({
    type: AUTHORIZATION_ACTION,
    payload: { value }
});
