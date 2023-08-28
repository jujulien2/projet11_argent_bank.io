
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
                const token = data.body.token;
                localStorage.setItem('authToken', token);

                // Fetch user profile immediately after signing in
                return fetch('http://localhost:3001/api/v1/user/profile', {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
            })
            .then(response => response.json())
            .then(data => {
                dispatch({ type: 'SUBMIT_FORM_SUCCESS', payload: data });
                dispatch(userProfileSuccess(data));

            })
            .catch(error => {
                dispatch({ type: 'SUBMIT_FORM_ERROR', payload: error });
            });
    };
};
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS';

export const userProfileSuccess = (user) => {
    return {
        type: USER_PROFILE_SUCCESS,
        payload: user.body,
    };
};