import React from 'react'
import { Container, Row, Col } from 'reactstrap';


function About() {
    return (
        <React.Fragment>
            <Container className="aboutPage" fluid={true} id="about">
                <Row>
                    <Col className="aboutTitle">About Capos</Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md="12" className="aboutDetails">A great portfolio can attract the eyes of many recruiters.
                    It can get you an interview and also allow you to show off your skills and project.
                    But for people whose work involves mostly non-design technical jobs,
                    it is hard to create an appealing portfolio website. This is where COPAS comes in handy.
                     <br /><br />

                     COPAS is a simple portfolio builder. Just enter the required information and get your portfolio
                     generated. COPAS features minimal and flat design. And it takes less than 10 mintues. <br /><br />

                     You will receive a portfolio link that can be shared across multiple of social medias. Similarly,
                     you will be provided with HTML, CSS and JavaScript for fast and secure experience which you can host
                     yourself.

                     </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default About
