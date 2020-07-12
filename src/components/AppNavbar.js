import React from "react";
import {Link} from "react-router-dom"
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
				<NavbarBrand >
		<Link to="/">
					<Logo>Capos</Logo>
		</Link>
				</NavbarBrand>
			</Navbar>
		</Container>
	);
}

export default AppNavbar;
