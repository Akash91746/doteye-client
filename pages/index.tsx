import React from 'react';
import HomeScreen from '../src/HomeScreen';
import { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => {
    return <React.Fragment>
        <Head>
            <title>dotEye</title>
        </Head>
        <HomeScreen />
    </React.Fragment>


}

export default HomePage;