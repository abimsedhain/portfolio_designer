import React from 'react'

import Banner from './Banner';

import Instruction from './Instruction';
import About from './About';
// import TestFooter from '../Navbar/TestFooter';
import AppFooter from "./AppFooter"

function Home() {
    return (
        <React.Fragment>
            <Banner />
            <Instruction/>
            <About/>
            <AppFooter/>
        </React.Fragment>
    )
}

export default Home

