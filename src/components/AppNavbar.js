import React from "react";
import {
	Navbar,
	NavbarBrand,
	Container,
} from "reactstrap";
import { Logo} from "./styled/StyledComponents";

function AppNavbar() {

	return (
		<Container fluid className="text-right">
			<Navbar light navbar-inverse="true" expand="md">
				<NavbarBrand href="/">
					<Logo>Capos</Logo>
				</NavbarBrand>
			</Navbar>
		</Container>
	);
}

export default AppNavbar;
