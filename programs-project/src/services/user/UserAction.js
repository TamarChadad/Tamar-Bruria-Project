import { userActionTypes } from './UserActionTypes';
import { userService } from './UserApi';

export const userActions = {
    getAll
};

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll();
            // .then(
            //     users => dispatch(success(users)),
            //     error => dispatch(failure(error.toString()))
            // );
    };

    function request() { return { type: userActionTypes.GETALL_REQUEST } }
}