import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import styled from "styled-components"
import { Header, Description } from "./styled/StyledComponents"


function About() {

	const StyledContainer = styled.div`
	background-color: ${props => props.theme.Secondary}
	`

	return (
		<StyledContainer>
			<Container className="py-5" fluid={true} id="about">
				<Row className="pb-3">
					<Col>
						<Header Small>

							About Capos
						</Header>
					</Col>
				</Row>
				<Row>
					<Col xs="12" sm="12" md="12">
						<Description Small>
						A great portfolio can attract the eyes of many recruiters.
					It can get you an interview and also allow you to show off your skills and project.
					But for people whose work involves mostly non-design technical jobs,
					it is hard to create an appealing portfolio website. This is where COPAS comes in handy.
                     <br /><br />

                     COPAS is a simple portfolio builder. Just enter the required information and get your portfolio
                     generated. COPAS features minimal and flat design. And it takes less than 10 mintues. <br /><br />

                     You will receive a portfolio link that can be shared across multiple of social medias. Similarly,
                     you will be provided with HTML, CSS and JavaScript for fast and secure experience which you can host
                     yourself.

						</Description>
                     </Col>
				</Row>
			</Container>
		</StyledContainer>
	)
}

export default About
