import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from "react-router-dom"
import Lostpic from '../assets/404.svg';
import { Header, Description, HomepageButton, FullSizeContainer } from "./styled/StyledComponents"

function Lost() {
    return (
        <>
            <FullSizeContainer>
                <Row className="py-5">
                    <Col className="text-left col-12 col-sm-12 col-md-6 col-lg-7 order-md-0 order-sm-1 order-xs-1 order-1 pt-5 pt-md-0">
                        <img src={Lostpic} alt="404_Lost_Logo" className="img-fluid">
                        </img>
                    </Col>

                    <Col className="d-none d-sm-none d-md-block">
                        <Header>404</Header>
                        <Header >UH OH! You're Lost.</Header>
                        <Description DescriptionSize>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage. </Description>

                        <Link to="/">
                            <HomepageButton White >HOME</HomepageButton>
                        </Link>
                    </Col>
                </Row>
            </FullSizeContainer>
        </>
    )
}

export default Lost

