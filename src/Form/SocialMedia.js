import React, { Component } from 'react';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class SocialMedia extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Container fluid="md">
          <Form>
            <Row form>
              <Col md={6}>
                <h1>Social Media</h1>
                <FormGroup>
                  <Label for="exampleEmail">Github</Label>
                  <Input type="text" name="email" id="exampleEmail" placeholder="Github Link"
                    onChange={handleChange('github')}
                    defaultValue={values.github} />
                  <br />

                  <Label for="examplePassword">Linkedin</Label>
                  <Input type="text" name="password" id="examplePassword" placeholder="Linkedin Link"
                    onChange={handleChange('linkedin')}
                    defaultValue={values.linkedin} /><br />
                </FormGroup>
              </Col>

              <Col md={6}>
                <h1>Skills</h1>
                <FormGroup>
                  <Label for="exampleEmail">Skills</Label>
                  <Input type="text" name="skills" id="exampleEmail" placeholder="List your skills"
                    onChange={handleChange('skills')}
                    defaultValue={values.skills} />
                  <br />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col xs={4} sm={4} md={4} lg={6} xl={6}>
                <FormGroup>
                  <Button color="primary" onClick={this.continue}>Next</Button>
                </FormGroup>

              </Col>
              <Col xs={4} sm={4} md={4} lg={6} xl={6}>
                <FormGroup>
                  <Button color="danger" onClick={this.back}>Back</Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Container>
        
      </>
    )
  }
}

export default SocialMedia
