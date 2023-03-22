import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Testmonial from '../Testmonial/Testmonial';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
            <Testmonial></Testmonial>
        </div>
    );
};

export default Home;