import { SUBMIT_EDITNAME_SUCCESS } from "../Actions/EditName.actions";


const initialState = {
    username: ""
};


export default function EditSubmitReducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_EDITNAME_SUCCESS:
            return {
                ...state,
                username: action.payload.username
            }
                ;

        default:
            return state;

    }
}