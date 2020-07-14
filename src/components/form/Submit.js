import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

function Submit({ portfolioId }) {
	return (
		<Container fluid="md" style={{ marginTop: "20px" }}>
			<h1>
				YOUR INFORMATION HAS BEEN RECEIVED AND YOU WILL RECEIVE YOUR
				PORTFOLIO WEBSITE IN JUST A SECOND
			</h1>
			{portfolioId ? (
				<Link to={`/portfolio?id=${portfolioId}`}>
					<h3>{`capos.com/portfolio?id=${portfolioId}`}</h3>
				</Link>
			) : (
				<></>
			)}
		</Container>
	);
}

export default Submit;
