import React from 'react';
import MultistepForm from './MultistepForm';
import { Container, Row, Col } from "reactstrap";

function UserDetails() {
	return (
		<Container>
			<Row>
				<Col className = "mx-auto col-12 col-sm-8 col-md-6">
					<MultistepForm />
				</Col>
			</Row>
		</Container>
	)
}

export default UserDetails;
