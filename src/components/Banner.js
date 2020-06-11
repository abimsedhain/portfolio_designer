import React from 'react';
import './banner.css';
import { Container, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-scroll';
import AppNavbar from '../Navbar/AppNavbar';

import mainlogo from '../assets/mainlogo2.png';

function Banner() {
    return (
        <>
        <AppNavbar/>
        <Container className='mainBanner'>
            <Row>
                <Col id="colText" xs={{ span: 12, order: 2 }} sm={{ span: 6, order: 2 }} md={{ span: 6, order: 2}} lg={{ span: 6, order: 1}} xl={6} >
                    <h1 className="display-3">Capos</h1>
                    <p className="lead">Build a simple and elegant Portfolio Website under 10 minutes.</p>
                    <Link to="instruction" spy={true} smooth={true} offset={0} duration={1000}>
                        <Button className='mainBtn' size="lg">Let's Build a Portfolio &nbsp;
                                         <span>&#8595; </span>
                        </Button>
                    </Link>
                </Col>
                <Col id="colImg" xs={{ span: 12, order: 1 }} sm={{ span: 6, order: 1 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 2}} xl={6}>
                    <img className="vectorLogo" src={mainlogo} alt="logo" />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Banner
