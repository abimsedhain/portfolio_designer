import React from 'react'
import '../App.css';
import { Container, Button, Row, Col } from 'reactstrap';

import login from '../assets/login.svg';
import signup from '../assets/signup.svg';
import type from '../assets/typing.svg';


function Instruction() {
    return (
        <React.Fragment>
            <Container className="insPage" fluid="lg">
                <Row>
                    <Col className="insTitle">INSTRUCTION</Col>
                </Row>
                <Row xs="1" sm="1" md="3">
                    <Col>
                        <img className="step" src={signup} alt="step1" /><br />
                        <span><h3> Step 1</h3></span><br />
                        <h5> Login/Sign Up</h5>
                    </Col>
                    <Col>
                        <img className="step" src={type} alt="step2" /><br />
                        <span><h3> Step 2</h3></span><br />
                        <h5>Enter your Informations </h5>
                    </Col>
                    <Col>
                        <img className="step" src={login} alt="step3" /><br />
                        <span><h3> Step 3</h3></span><br />
                        <h5>Get your New Portfolio </h5>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button className="infoBtn" color="primary" size="lg">Login&nbsp;
                <span>/ Signup &#8594;  </span>
                        </Button></Col>
                </Row>
            </Container>

            <Container className="aboutPage" fluid="lg">
                <Row>
                    <Col className="aboutTitle">ABOUT CAPOS</Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md="12" className="aboutDetails">A great portfolio can attract the eyes of many recruiters.
                    It can get you an interview and also allow you to show off your skills and project.
                    But for people whose work involves mostly non-design technical jobs,
                    it is hard to create an appealing portfolio website. This is where COPAS comes in handy.
                     <br /><br />

                     COPAS is a simple portfolio builder. Just enter the required information and get your portfolio
                     generated. COPAS features minimal and flat design. And it takes less than 10 mintues. <br /><br />

                     You will receive a portfolio link that can be shared across multiple of social medias. Similarly,
                     you will be provided with HTML, CSS and JavaScript for fast and secure experience which you can host
                     yourself.

                     </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Instruction
