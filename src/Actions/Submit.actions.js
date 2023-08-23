
export const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS'
export const SUBMIT_FORM_ERROR = 'SUBMIT_FORM_ERROR'


export const submitSignIn = (userName, userPassword) => {

    return (dispatch) => {
        return fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userName,
                password: userPassword
            })

        }).then(response => response.json())
            .then(data => {
                dispatch({ type: 'SUBMIT_FORM_SUCCESS', payload: data.body });

            })
            .catch(error => {
                dispatch({ type: 'SUBMIT_FORM_ERROR', payload: error });
            });
    }
}