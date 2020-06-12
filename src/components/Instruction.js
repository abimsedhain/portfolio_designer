import React from 'react'
import '../App.css';
import { Container, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import login from '../assets/login.svg';
import signup from '../assets/signup.svg';
import type from '../assets/typing.svg';

function Instruction() {
	return (
		<React.Fragment>
			{/* <Container className="insPage" fluid={true} id="instruction">
                <Row>
                    <Col className="insTitle">Instructions</Col>

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
                    <Link to='/form'>
                    <Button className="infoBtn" size="lg" >Login&nbsp;
                <span>/ Signup &#8594;  </span>
                        </Button>
                    </Link>
                     </Col>
                </Row>
            </Container> */}
			<Container fluid>
				<Row>
					<Col>
						<h2>Intructions</h2>
					</Col>
				</Row>
				<Row >
					<Col className="col-sm-12 col-12 col-md-4">
						<Row >
							<Col className="col-5 col-sm-3 col-md-5 col-lg-5 col-xl-4 mx-auto">
								<img className="img-fluid" src={signup} alt="step"></img>
							</Col>
						</Row>
						<Row>
							<Col>
								<h3>Step 1</h3>
							</Col>
						</Row>
						<Row>
							<Col>
								<h5>Login/Sign Up</h5>
							</Col>
						</Row>
					</Col>
					<Col className="col-sm-12 col-12 col-md-4">
						<Row>
							<Col className="col-5 col-sm-3 col-md-5 col-lg-5 col-xl-4 mx-auto">
								<img className="img-fluid" src={type} alt="step2" /><br />
							</Col>
						</Row>
						<Row>
							<Col>
								<h3>Step 2</h3>
							</Col>
						</Row>
						<Row>
							<Col>
								<h5>Enter your Information</h5>
							</Col>
						</Row>
					</Col>

					<Col className="col-sm-12 col-12 col-md-4">
						<Row>
							<Col className="col-5 col-sm-3 col-md-5 col-lg-5 col-xl-4 mx-auto">
								<img className="img-fluid" src={login} alt="step2" /><br />
							</Col>
						</Row>
						<Row>
							<Col>
								<h3>Step 3</h3>
							</Col>
						</Row>
						<Row>
							<Col>
								<h5>Get your new Portfolio</h5>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col>
						<Link to='/form'>
							<Button className="infoBtn" size="lg" >Login&nbsp;
                <span>/ Signup &#8594;  </span>
							</Button>
						</Link>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	)
}

export default Instruction
