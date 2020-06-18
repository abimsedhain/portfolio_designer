import React from 'react'
import {  Container, Row, Col } from 'reactstrap';
import styled from "styled-components";
import {Description} from "./styled/StyledComponents"

import fb from '../assets/facebook.svg'
import github from '../assets/github.svg'
import twitter from '../assets/twit.svg'
import linkedin from '../assets/linkedin.svg'
import mail from '../assets/email.svg'



function AppFooter() {
const StyledContainer = styled.div`
	background-color: ${props=> props.theme.Dark}
	`
	return (
		<StyledContainer>
			<Container fluid className="pt-5" id="contact">
				<Container>
					<Row className="py-1">
						<Col>
							<Description White Small>
								Feel free to reach out to us for feedback or any suggestions for new features, or just say hello!
							</Description>
						</Col>
					</Row>
					<Row className="justify-content-center py-1">
						<Col className="col-2 col-sm-1 ">
							<img className="img-fluid" height="100%" width="100%" src={fb} alt="github link" />
						</Col>
						<Col className="col-2 col-sm-1 ">
							<img className="img-fluid" height="100%" width="100%" src={github} alt="github link" />
						</Col>
						<Col className="col-2 col-sm-1 ">
							<img className="img-fluid" height="100%" width="100%" src={twitter} alt="twitter link" />
						</Col>
						<Col className="col-2 col-sm-1 ">
							<img className="img-fluid" height="100%" width="100%" src={linkedin} alt="linkedin link" />
						</Col>
						<Col className="col-2 col-sm-1 ">
							<img className="img-fluid" height="100%" width="100%" src={mail} alt="linkedin link" />
						</Col>
					</Row>
					<Row className="py-2">
						<Col>
							<Description White Small>
								Created with ♡ by ..
						</Description>

						</Col>
					</Row>
					<Row>
						<Col>
							<Description White Small>
								&copy; 2020 Capos
						</Description>

						</Col>
					</Row>
				</Container>

			</Container>
		</StyledContainer>
	)
}

export default AppFooter
