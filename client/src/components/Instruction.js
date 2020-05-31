import React from 'react'
import '../App.css';
import { Container, Button, Row, Col } from 'reactstrap';

import login from '../assets/login.svg';
import signup from '../assets/signup.svg';
import type from '../assets/typing.svg';


function Instruction() {
    return (
        <React.Fragment>
            <Container className="infoo" fluid="lg">
                <Row>
                    <Col className="info" sm={{ size: 6, order: 2, offset: 1 }}>INSTRUCTION</Col>
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

                <Row className="yooo">
                    <Col>
                        <Button color="primary" size="lg">Login&nbsp;
                <span>/ Signup &#8594;  </span>
                        </Button></Col>
                </Row>

            </Container>

           

        </React.Fragment>
    )
}

export default Instruction
