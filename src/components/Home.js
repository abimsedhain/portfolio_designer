import React, { useContext } from "react";
import { userStateContext } from "../state management/userContext";
import { Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import HomeFooter from "./HomeFooter";
import mainlogo from "../assets/logo2.svg";
import {
	Header,
	Description,
	HomepageButton,
	GoogleSignInButton,
	FackbookSignInButton,
	HomepageContainer,
	HomeContainer,
	ClipPathBackground,
	BoldSpan
} from "./styled/StyledComponents";



function Home() {
	const userState = useContext(userStateContext).userState;
	const history = useHistory();
	return (
		<HomeContainer>
			{/** Adding the clip background **/}
			<ClipPathBackground Primary Index="-2" Opacity="15%" />
			<ClipPathBackground Mask Index="-1" Opacity="100%" />
			<AppNavbar />
			<HomepageContainer>
				<Row className="mb-auto mt-5 m-md-auto">
					<Col className="text-left col-12 col-sm-12 col-md-6 col-lg-7 order-md-0 order-sm-1 order-xs-1 order-1 ">
						<Header>Capos</Header>
						<Description Lighter id="LoginCard">
							Build a simple and elegant <BoldSpan>Portfolio Website</BoldSpan> under 10 minutes.
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
			</HomepageContainer>
			<HomeFooter />
		</HomeContainer>
	);
}

export default Home;
