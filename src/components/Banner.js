import React from 'react';
import { Container, Button, Row, Col} from 'reactstrap';
import { Link } from 'react-scroll';
import AppNavbar from "./AppNavbar"
import mainlogo from '../assets/mainlogo2.png';


function Banner() {
    return (
        <>
        <AppNavbar/>
		<Container>
			<Row className="pt-3 pb-5">
				<Col className="text-left col-12 col-sm-12 col-md-6 col-lg-7 order-md-0 order-sm-1 order-xs-1 order-1 pt-5 pt-md-0">
				<h1>Capos</h1>
				<h3>Build a simple and elegant Portfolio Website under 10 minutes.</h3>
				<Button>Let's Build a Portfolio</Button>
				</Col>
				<Col>
				<img src={mainlogo} className="img-fluid">
				</img>
				</Col>
			</Row>
		</Container>
        </>
    )
}

export default Banner
