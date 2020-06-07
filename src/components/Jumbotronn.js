import React from 'react'
import '../App.css';
import { Jumbotron, Container, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-scroll';
import AppNavbar from '../Navbar/AppNavbar';

import mainlogo from '../assets/mainlogo.png';

function Jumbotronn() {
    return (
        <>
            <AppNavbar />
            <div id="main">
                <Jumbotron fluid>
                    <Container fluid>
                        <Row>
                            <Col >
                                <h1 className="display-3">Capos</h1>
                                <p className="lead">Build a simple and elegant Portfolio Website under 10 minutes.</p>
                                <Link to="instruction" spy={true} smooth={true} offset={0} duration={1000}>
                                    <Button className='mainBtn' size="lg">Let's Build a Portfolio &nbsp;
                                         <span>&#8595; </span>
                                    </Button>
                                </Link>
                            </Col>
                            <Col >
                                <img className="vectorLogo" src={mainlogo} alt="logo"/>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        </>
    )
}

export default Jumbotronn
