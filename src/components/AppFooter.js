import React, { useState } from 'react'
import { Navbar, NavItem, NavbarBrand, NavbarText, Container, Row, Col } from 'reactstrap';

import { Link } from 'react-router-dom';

import fb from '../assets/facebook.svg'
import github from '../assets/github.svg'
import twitter from '../assets/twit.svg'
import linkedin from '../assets/linkedin.svg'
import mail from '../assets/email.svg'



function AppFooter() {

	return (
		<>
			<Container fluid>
				<Container>
					<Row>
						<Col>
							<h3>
								Feel free to reach out to us for feedback or any suggestions for new features, or just say hello!
							</h3>
						</Col>
					</Row>
					<Row className="justify-content-center">
						<Col className="col-1">
							<img className="img-fluid" height="100%" width="100%" src={fb} alt="github link" />
						</Col>
						<Col className="col-1">
							<img className="img-fluid" height="100%" width="100%" src={github} alt="github link" />
						</Col>
						<Col className="col-1">
							<img className="img-fluid" height="100%" width="100%" src={twitter} alt="twitter link" />
						</Col>
						<Col className="col-1">
							<img className="img-fluid" height="100%" width="100%" src={linkedin} alt="linkedin link" />
						</Col>
						<Col className="col-1">
							<img className="img-fluid" height="100%" width="100%" src={mail} alt="linkedin link" />
						</Col>
					</Row>
					<Row>
						<Col>
							<h3>
								Created with ♡ by ..
						</h3>

						</Col>
					</Row>
					<Row>
						<Col>
							<h3>
								&copy; 2020 Capos
						</h3>

						</Col>
					</Row>
				</Container>

			</Container>
		</>
	)
}

export default AppFooter
