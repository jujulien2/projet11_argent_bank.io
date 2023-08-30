import React from 'react';
import EditName from '../Components/EditName/EditName';
import Layout from '../Components/Layout/Layout';
import Transactions from '../Components/Transactions/Transactions';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserPage = () => {
    const user = useSelector((state) => state.SignInReducer.user)
    const navigate = useNavigate()
    if (!user) {
        navigate('/SignIn')
    }
    return (
        <Layout>
            <main className="main bg-dark">
                <EditName />
                <Transactions />
            </main>
        </Layout>
    );
};

export default UserPage;