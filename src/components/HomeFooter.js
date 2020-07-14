import React from "react";
import { Container, Navbar, Nav, NavItem } from "reactstrap";

import {StyledFooter} from "./styled/StyledContainers"
import {  FormLabel } from "./styled/StyledText";

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
							<FormLabel FooterWeight FooterSize Header Grey>
								&copy; 2020 Capos
							</FormLabel>
						</NavItem>
					</Nav>

					<Nav className="ml-auto" navbar>
						<NavItem>
							<FormLabel FooterWeight FooterSize Header Grey>
								About
							</FormLabel>
						</NavItem>
						<NavItem>
							<FormLabel FooterWeight FooterSize Header Grey>
								Contact
							</FormLabel>
						</NavItem>
						<NavItem>
							<FormLabel FooterWeight FooterSize Header Grey>
								Donate
							</FormLabel>
						</NavItem>
					</Nav>
				</Navbar>
			</Container>
		</StyledFooter>
	);
}

export default HomeFooter;
