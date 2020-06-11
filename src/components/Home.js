import React from 'react'
import Jumbotronn from './Jumbotronn';

import Banner from './Banner';

import Instruction from './Instruction';
import About from './About';
import TestFooter from '../Navbar/TestFooter';

import '../App.css'

function Home() {
    return (
        <React.Fragment>
            {/* <Jumbotronn/> */}
            <Banner />
            <Instruction/>
            <About/>
            <TestFooter/>
        </React.Fragment>
    )
}

export default Home

