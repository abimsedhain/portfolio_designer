import React from 'react'
import Jumbotronn from './Jumbotronn';
import Instruction from './Instruction';
import About from './About';
import TestFooter from '../Navbar/TestFooter';
import '../App.css'

function Home() {
    return (
        <React.Fragment>
            <Jumbotronn/>
            <Instruction/>
            {/* <About/> */}
            <TestFooter/>
        </React.Fragment>
    )
}

export default Home

