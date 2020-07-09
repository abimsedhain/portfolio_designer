import React from 'react';
import { Container, Navbar, Nav, NavItem } from 'reactstrap';

import { StyledFooter, FooterButton } from "./styled/StyledComponents";

function FormFooter() {
    return (
            <StyledFooter White Fixed>
                <Container fluid className="d-flex">
                                <FooterButton White Small Left>
                                    Prev
                                </FooterButton>

                                <FooterButton White Small Right>
                                    Next 
                                </FooterButton>
                </Container>
            </StyledFooter>
    )
}

export default FormFooter
