import React from 'react';
import EditName from '../Components/EditName/EditName';
import Layout from '../Components/Layout/Layout';
import Transactions from '../Components/Transactions/Transactions';

const UserPage = () => {
    return (
        <Layout isUserLoggedIn={false}>
            <main className="main bg-dark">
                <EditName />
                <Transactions />
            </main>
        </Layout>
    );
};

export default UserPage;