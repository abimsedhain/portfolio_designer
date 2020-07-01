import React, { useState, useContext } from "react";
import { userStateContext } from "../state management/userContext";
import { Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import mainlogo from "../assets/logo2.svg";
import {
	Header,
	Description,
	HomepageButton,
	GoogleSignInButton,
	FackbookSignInButton,
	FullSizeContainer,
} from "./styled/StyledComponents";

function Home() {
	const userState = useContext(userStateContext).userState;
	const history = useHistory();
	return (
		<>
			<AppNavbar />
			<FullSizeContainer>
				<Row className="mb-auto mt-5 m-md-auto">
					<Col className="text-left col-12 col-sm-12 col-md-6 col-lg-7 order-md-0 order-sm-1 order-xs-1 order-1 ">
						<Header>Capos</Header>
						<Description id="LoginCard">
							Build a simple and elegant Portfolio Website under
							10 minutes.
						</Description>
								<HomepageButton
									White
									Small
									Block
									onClick={() => history.push("/form")}
								>
									Let's Build a Portfolio
								</HomepageButton>
								{userState.name === "" ? (
							<>
								<GoogleSignInButton
									White
									Small
									Block
									onClick={() =>
										window.location.replace(
											process.env
												.REACT_APP_GOOGLE_AUTH_URL
										)
									}
								>
									Login with Google
								</GoogleSignInButton>
								<FackbookSignInButton White Small Block>
									Login with Facebook
								</FackbookSignInButton>
							</>
								) : (
									<HomepageButton White Small Block>
										Go to Dashboard
									</HomepageButton>
								)}
					</Col>
					<Col className="d-none d-sm-none d-md-block">
						<img
							src={mainlogo}
							alt="logo"
							className="img-fluid"
						></img>
					</Col>
				</Row>
			</FullSizeContainer>
		</>
	);
}

export default Home;
