import React from 'react';
import '../../Style/Header/Header.css'
import logo from '../../Assets/argentBankLogo.png'

const Header = (props) => {
    const { isUserLoggedIn } = props;
    return (

        <nav className="main-nav">
            <a className="main-nav-logo" href="./index.html">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a className="main-nav-item" href="../SignIn">
                    <i className="fa fa-user-circle"></i>
                    {isUserLoggedIn ? 'Sign Out' : 'Sign In'}
                </a>
            </div>
        </nav>

    );
};

export default Header;