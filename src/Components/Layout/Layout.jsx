import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header.jsx';

const Layout = (props) => {
    return (
        <>
            <Header isUserLoggedIn={props.isUserLoggedIn} />
            {props.children}
            <Footer />

        </>

    );
};

export default Layout;