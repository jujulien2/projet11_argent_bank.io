import React from 'react';
import Layout from '../Components/Layout/Layout';
import Presentation from '../Components/HomeImagePresentation/Presentation';
import DescriptionAdvantages from '../Components/HomeAdvantages/DescriptionAdvantages';


const Home = () => {
    return (
        <Layout isUserLogginIn={true}>
            <Presentation />
            <DescriptionAdvantages />
        </Layout>
    );
};

export default Home;