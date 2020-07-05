import React from 'react';
import { Container, Navbar, Nav, NavItem } from 'reactstrap';

import { StyledFooter, NavbarButton } from "./styled/StyledComponents";

function FormFooter() {
    return (
            <StyledFooter White>
                <Container fluid className="text-right" >
                    <Navbar light navbar-inverse="true" expand="xs" style={{ padding: '0px' }} >
                        <Nav className="ml-left" navbar>
                            <NavItem>
                                <NavbarButton White >
                                    &#8592; Prev
                                </NavbarButton>
                            </NavItem>
                        </Nav>

                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavbarButton White >
                                    Next &#8594;
                                </NavbarButton>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </Container>
            </StyledFooter>
    )
}

export default FormFooter
