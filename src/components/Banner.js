import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import {Link} from "react-scroll";
import AppNavbar from "./AppNavbar"
import mainlogo from '../assets/mainlogo2.png';
import {Header, Description, Button} from "./styled/StyledComponents"

function Banner() {
    return (
        <>
        <AppNavbar/>
		<Container>
			<Row className="py-5">
				<Col className="text-left col-12 col-sm-12 col-md-6 col-lg-7 order-md-0 order-sm-1 order-xs-1 order-1 pt-5 pt-md-0">
					<Header>Capos</Header>
				<Description>Build a simple and elegant Portfolio Website under 10 minutes.</Description>
				<Link to="instruction" spy={true} smooth={true} offset={0} duration={1000}>
				<Button White>Let's Build a Portfolio</Button>
				</Link>
				</Col>
				<Col>
				<img src={mainlogo} alt="Logo" className="img-fluid">
				</img>
				</Col>
			</Row>
		</Container>
        </>
    )
}

export default Banner
