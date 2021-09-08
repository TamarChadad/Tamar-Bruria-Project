import { userActionTypes } from './UserActionTypes';

export function users(state = {}, action) {
    switch (action.type) {
        case userActionTypes.GETALL_REQUEST:
            return {
                loading: true
            };
        default:
            return state
    }
}