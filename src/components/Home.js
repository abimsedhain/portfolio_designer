import React, { useContext } from "react";
import { userStateContext } from "../state management/userContext";
import { Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";
import HomeFooter from "./HomeFooter";
import mainlogo from "../assets/logo2.svg";
import {
	HomepageButton,
	GoogleSignInButton,
	FacebookSignInButton,
} from "./styled/StyledComponents";
import {
	HomeContainer,
	HomepageContain,
	ClipPathBackground,
} from "./styled/StyledContainers";
import { Header, Description, BoldSpan, StyledLogo } from "./styled/StyledText";

function Home() {
	const userState = useContext(userStateContext).userState;
	const history = useHistory();
	return (
		<HomeContainer>
			{/** Adding the clip background **/}
			<ClipPathBackground Primary Index="-2" Opacity="15%" />
			<ClipPathBackground Mask Index="-1" Opacity="100%" />
			<StyledLogo onClick={()=>history.push("/")}>Capos</StyledLogo>
			<HomepageContain>
				<Row className="mb-auto mt-5 m-md-auto">
					<Col className="text-left col-12 col-sm-12 col-md-6 col-lg-7 order-md-0 order-sm-1 order-xs-1 order-1 ">
						<Header>Capos</Header>
						<Description Lighter id="LoginCard">
							Build a simple and elegant{" "}
							<BoldSpan>Portfolio Website</BoldSpan> under 10
							minutes.
						</Description>
						<HomepageButton
							White
							Small
							Block
							onClick={() => history.push("/form")}
						>
							Let's Build a Portfolio
						</HomepageButton>
						{/** Show login button if the user is not login, else shows dashboard button**/}
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
								<FacebookSignInButton White Small Block>
									Login with Facebook
								</FacebookSignInButton>
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
			</HomepageContain>
			<HomeFooter />
		</HomeContainer>
	);
}

export default Home;
