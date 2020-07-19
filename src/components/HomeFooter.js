import React from "react";
import { Container, Navbar, Nav, NavItem } from "reactstrap";

import {StyledFooter} from "./styled/StyledContainers"
import {  SmallSpan } from "./styled/StyledText";

//Footer for Home page
function HomeFooter() {
	return (
		<StyledFooter>
			<Container fluid className="text-right">
				<Navbar
					light
					navbar-inverse="true"
					expand="xs"
					style={{ padding: "0px" }}
				>
					<Nav className="ml-left" navbar>
						<NavItem>
							<SmallSpan>
								&copy; 2020 Capos
							</SmallSpan>
						</NavItem>
					</Nav>

					<Nav className="ml-auto" navbar>
						<NavItem>
							<SmallSpan>
								About
							</SmallSpan>
						</NavItem>
						<NavItem>
							<SmallSpan>
								Contact
							</SmallSpan>
						</NavItem>
						<NavItem>
							<SmallSpan>
								Donate
							</SmallSpan>
						</NavItem>
					</Nav>
				</Navbar>
			</Container>
		</StyledFooter>
	);
}

export default HomeFooter;
