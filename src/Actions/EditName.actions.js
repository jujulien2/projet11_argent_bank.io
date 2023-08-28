

export const SUBMIT_EDITNAME_SUCCESS = 'SUBMIT_EDITNAME_SUCCESS'

export const submitEditName = (userName) => {
    const token = localStorage.getItem('authToken');


    return (dispatch) => {
        return fetch(`http://localhost:3001/api/v1/user/profile`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                userName: userName
            })
        }).then(response => response.json())
            .then(data => {
                dispatch({ type: 'SUBMIT_EDITNAME_SUCCESS', payload: data.body });
                console.log(data);

            })

    };
};