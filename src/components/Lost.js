import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Lostpic from "../assets/404.svg";
import { HomepageButton } from "./styled/StyledComponents";
import { Header, Description } from "./styled/StyledText";
import { FullSizeContainer } from "./styled/StyledContainers";

//404 page
function Lost() {
	return (
		<>
			<FullSizeContainer>
				<Row className="py-5">
					<Col className="pt-5 d-none d-sm-none d-md-block">
						<img
							src={Lostpic}
							alt="404_Lost_Logo"
							className="img-fluid"
						></img>
					</Col>

					<Col className=" text-center">
						<Header Large className="py-5 text-center">
							404
						</Header>
						<Header Small className="text-md-left text-center">
							UH OH! You're Lost.
						</Header>
						<Description Small className="text-md-left text-center">
							The page you are looking for does not exist. How you
							got here is a mystery. But you can click the button
							below to go back to the homepage.{" "}
						</Description>

						<Link to="/">
							<HomepageButton White>HOME</HomepageButton>
						</Link>
					</Col>
				</Row>
			</FullSizeContainer>
		</>
	);
}

export default Lost;
