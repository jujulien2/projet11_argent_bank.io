import React from 'react';
import Layout from '../Components/Layout/Layout';
import SignIn from '../Components/SignIn/SignIn';

const UserSign = () => {
    return (
        <Layout isUserLoggedIn={false}>
            <SignIn />
        </Layout>
    );
};

export default UserSign;