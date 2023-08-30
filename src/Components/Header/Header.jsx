import React from 'react';
import '../../Style/Header/Header.css'
import logo from '../../Assets/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetStore } from '../../Actions/LogOutUser.actions';


const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const storedToken = localStorage.getItem('authToken');
    const handleSignOut = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("persist:root");
        dispatch(resetStore())
        navigate('../SignIn')

    };
    const user = useSelector((state) => state.SignInReducer.user)

    return (

        <nav className="main-nav">
            <a className="main-nav-logo" href="./">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a className="main-nav-item" onClick={handleSignOut}>

                    {storedToken ? 'Sign Out' : 'Sign In'}
                    {storedToken ? <i className="fa fa-sign-out"></i> : <i className="fa fa-user-circle"></i>}
                </a>
                <a className="main-nav-item" href="../user" >
                    {storedToken ? <div className="main-nav-item">
                        {user && user.userName}
                        <i className="fa fa-user-circle"></i>
                    </div> : ''}
                </a>
            </div>
        </nav>

    );
};
export default Header;