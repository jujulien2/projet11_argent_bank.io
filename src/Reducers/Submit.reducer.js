import { SUBMIT_FORM_ERROR, SUBMIT_FORM_SUCCESS } from "../Actions/Submit.actions";

const initialState = {

};

// Ceci est un reducer
export default function SignInReducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_FORM_SUCCESS:
            return {
                ...state,
                // isAuthenticated: true,
                user: action.payload
            };
        case SUBMIT_FORM_ERROR:
            return alert("email ou mot de passe incorrect")


        default:
            return state;
    }
}