import React, { useState } from 'react';
import {
	Collapse,
	NavbarToggler,
	Nav,
	NavItem,

} from 'reactstrap';
import { Link } from "react-scroll"
import { StyledNavbar, StyledNavLink } from "../styled/StyledComponents"


const TemplateNavbar = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<StyledNavbar color="light" light expand="md" className="bg-white text-right pt-2 pb-0 pb-md-5">
			<NavbarToggler onClick={toggle} className="mr-2 ml-auto" />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="mr-auto" navbar>
					<NavItem>
						<StyledNavLink White>
							<Link to="education" spy={true} smooth={true} offset={50} duration={500}>
								education
							</Link>
						</StyledNavLink>
					</NavItem>
					<NavItem>
						<StyledNavLink White>

							<Link to="skills" spy={true} smooth={true} offset={50} duration={500}>skills</Link>
							</StyledNavLink>
					</NavItem>
					<NavItem>
						<StyledNavLink White>

							<Link to="experiences" spy={true} smooth={true} offset={50} duration={500}>experiences</Link>
							</StyledNavLink>
					</NavItem>
					<NavItem>
						<StyledNavLink White>
							<Link to="projects" spy={true} smooth={true} offset={50} duration={500}>projects</Link>
						</StyledNavLink>
					</NavItem>
					<NavItem>
						<StyledNavLink White>

							<Link to="contact" spy={true} smooth={true} offset={50} duration={500}>contact</Link>
							</StyledNavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</StyledNavbar>
	);
}

export default TemplateNavbar;