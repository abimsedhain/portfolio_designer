import React from 'react';
import { Container} from 'reactstrap';

import { FooterButton } from "../styled/StyledComponents";
import {StyledFooter} from "../styled/StyledContainers"

function FormFooter({next, prev}) {
    return (
            <StyledFooter White Fixed>
                <Container fluid className="d-flex">
                                <FooterButton White Small Left onClick={prev}>
                                    Prev
                                </FooterButton>

                                <FooterButton White Small Right onClick={next}>
                                    Next 
                                </FooterButton>
                </Container>
            </StyledFooter>
    )
}

export default FormFooter
