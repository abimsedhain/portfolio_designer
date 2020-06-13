import React from 'react';
import {
	Navbar,
	NavbarBrand,
	Container
} from 'reactstrap';

function AppNavbar() {
const navStyle = {
	position: 'absolute',
	left: '50%',
	transform: 'translateX(-50%)',
	top:'10px',
	width:'100%',
	background:'pink'
}
	return (
		<Container fluid>
			<Navbar light expand="md">
				<NavbarBrand href="/" style={navStyle}>
					<h1>Capos</h1>
				</NavbarBrand>
				
			</Navbar>
		</Container>
        
	)
}

export default AppNavbar
