import { SUBMIT_FORM_ERROR, SUBMIT_FORM_SUCCESS, USER_PROFILE_SUCCESS } from "../Actions/Submit.actions";

const initialState = {
    user: null
};

// Ceci est un reducer
export default function SignInReducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_FORM_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };
        case SUBMIT_FORM_ERROR:
            return {
                ...state,
                user: null,
            };
        case USER_PROFILE_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };

        default:
            return state;

    }
}