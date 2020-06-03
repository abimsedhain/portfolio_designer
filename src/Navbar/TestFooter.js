import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './footerStyle.css';
import '../App.css';

import github from '../assets/github.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'

function TestFooter() {
    return (
        <React.Fragment>
            <Container className="test" fluid="lg" id="contact">
                <Row>
                    <Col className="footerMain">
                        Feel free to reach out to us for feedback or any suggestions for new features, or just say hello!
                     </Col>
                </Row>

                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>.
                         <a target="_blank" rel="noopener noreferrer" href="https://www.google.com"><img src={github} alt="github link" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.google.com"><img src={twitter} alt="twitter link" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.google.com"><img src={linkedin} alt="linkedin link" /></a>
                    </Col>
                </Row>
                <Row>
                    <Col className="creators">
                        Created with ♡ by ...
                 </Col>
                </Row>
                <Row>
                    <Col className="endCredit">
                        &copy; 2020 CAPOS
                 </Col>
                </Row>
            </Container>
            <Container>
            </Container>
        </React.Fragment>
    )
}

export default TestFooter
