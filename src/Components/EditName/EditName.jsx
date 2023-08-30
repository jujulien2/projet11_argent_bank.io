import React, { useState } from 'react';
import '../../Style/EditName/EditName.css'
import { useDispatch, useSelector } from 'react-redux';
import { submitEditName } from '../../Actions/EditName.actions';

const EditName = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.SignInReducer.user)
    const [isEditing, setIsEditing] = useState(false); // Nouvel état

    const handleEditButtonClick = () => {
        setIsEditing((prevState) => !prevState);

    };
    const handleSubmitUserName = (e) => {
        e.preventDefault()
        dispatch(submitEditName(e.target.username.value));
        // setIsEditing à false pour ouvrir et fermer au clique du bouton edit Name
        setIsEditing(false)

    }
    return (
        <div className="Edit">
            <h1>Welcome back<br />{user && user.firstName} {user && user.lastName}</h1>
            <button className="edit-button" onClick={handleEditButtonClick}>Edit Name</button>

            <div className='FormEditName'>
                <form className={isEditing === true ? 'displayForm' : 'hideForm'} onSubmit={handleSubmitUserName}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="FirstName">FirstName</label>
                        <input type="text" id="firstName" name="FirstName" value={user && user.firstName} readOnly />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="LastName">LastName</label>
                        <input type="text" id="lastName" name="LastName" value={user && user.lastName} readOnly />
                        <button className='sendEdit-button' >edit</button>
                    </div>
                </form>

            </div>
        </div>

    );
};

export default EditName;