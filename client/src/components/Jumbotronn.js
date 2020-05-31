import React from 'react'
import '../App.css';
import logo from '../assets/capos.png';
import { Jumbotron, Container, Button, Row, Col } from 'reactstrap';

function Jumbotronn() {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <Row>
                        <Col >
                        <img className="logo" src={logo} alt="logo" />
                            </Col>
                    </Row>

                    
                    <Row>
                        <Col >
                        <h1 className="display-3">Portfolio Builder</h1>
                            </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="lead">Build a simple and elegant Portfolio Website under 10 minutes.</p>
                        </Col>
                    </Row>

                </Container>
                <Button color="primary" size="lg">Let's Build&nbsp;
                <span>a Portfolio &#8594;  </span>
                </Button>


            </Jumbotron>
        </div>
    )
}

export default Jumbotronn
