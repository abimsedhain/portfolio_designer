import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import '../App.css';
import logo from '../assets/capos.png'

function Jumbotronn() {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Portfolio Builder</h1>
                    <img className="logo" src={logo} alt="logo"/>
                    <p className="lead">Build a simple and elegant Portfolio Website under 10 minutes.</p>
                    <Button className="getStarted" variant="primary">Get Started</Button>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Jumbotronn
