import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import {Link} from "react-router-dom"
import AppNavbar from "./AppNavbar"
import mainlogo from '../assets/logo2.svg';
import {Header, Description, HomepageButton, FullSizeContainer} from "./styled/StyledComponents"

function Home() {
    return (
        <>
        <AppNavbar/>
		<FullSizeContainer>
			<Row className="py-5">
				<Col className="text-left col-12 col-sm-12 col-md-6 col-lg-7 order-md-0 order-sm-1 order-xs-1 order-1 pt-5 pt-md-0">
					<Header>Capos</Header>
				<Description>Build a simple and elegant Portfolio Website under 10 minutes.</Description>
		<Link to="/form">
				<HomepageButton White Small Block>Let's Build a Portfolio</HomepageButton>
		</Link>
				<HomepageButton White Small Block>Login/Signup</HomepageButton>
				</Col>
				<Col className="d-none d-sm-none d-md-block">
				<img src={mainlogo} alt="logo" className="img-fluid">
				</img>
				</Col>
			</Row>
		</FullSizeContainer>
        </>
    )
}

export default Home

