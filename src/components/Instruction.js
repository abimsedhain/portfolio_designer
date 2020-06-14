import React from 'react'
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from "styled-components"
import login from '../assets/login.svg';
import signup from '../assets/signup.svg';
import type from '../assets/typing.svg';
import {Header, Description, Button} from "./styled/StyledComponents"


function Instruction() {
	const StyledContainer = styled.div`
	background-color: ${props=> props.theme.Primary}
	`



	return (
		<StyledContainer>

			<Container fluid className="py-5" id="instruction">
				<Row className="">
					<Col>
						<Header Small White>Instructions</Header>
					</Col>
				</Row>
				<Row className="py-2">
					<Col className="col-sm-12 col-12 col-md-4 pb-5 p-sm-5 p-md-0">
						<Row className="py-2">
							<Col className="col-5 col-sm-3 col-md-5 col-lg-5 col-xl-4 mx-auto">
								<img className="img-fluid" src={signup} alt="step"></img>
							</Col>
						</Row>
						<Row>
							<Col>
								<Description White Small>Step 1</Description>
							</Col>
						</Row>
						<Row>
							<Col>
								<Description White Small>Login/Sign Up</Description>
							</Col>
						</Row>
					</Col>
					<Col className="col-sm-12 col-12 col-md-4 pb-5 p-sm-5 p-md-0">
						<Row className="py-2">
							<Col className="col-5 col-sm-3 col-md-5 col-lg-5 col-xl-4 mx-auto">
								<img className="img-fluid" src={type} alt="step2" /><br />
							</Col>
						</Row>
						<Row>
							<Col>
								<Description White Small>Step 2</Description>
							</Col>
						</Row>
						<Row>
							<Col>
								<Description White Small>Enter your Information</Description>
							</Col>
						</Row>
					</Col>

					<Col className="col-sm-12 col-12 col-md-4 p-md-0">
						<Row className="py-2">
							<Col className="col-5 col-sm-3 col-md-5 col-lg-5 col-xl-4 mx-auto">
								<img className="img-fluid" src={login} alt="step2" /><br />
							</Col>
						</Row>
						<Row>
							<Col>
								<Description White Small>Step 3</Description>
							</Col>
						</Row>
						<Row>
							<Col>
								<Description White Small>Get your new Portfolio</Description>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col>
						<Link to='/form'>
							<Button Secondary >Login&nbsp;
                <span>/ Signup &#8594;  </span>
							</Button>
						</Link>
					</Col>
				</Row>
			</Container>
		</StyledContainer>
	)
}

export default Instruction
