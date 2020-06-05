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
        <Container fluid="md" style={{marginTop: '20px'}}>
          <Form>
            <Row form>
              <Col xs={{ size: 12, offset: 0 }} sm={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }} xl={{ size: 8, offset: 2 }} >
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

                  <h1>Skills</h1>

                  <Label for="exampleEmail">Skills</Label>
                  <Input type="text" name="skills" id="exampleEmail" placeholder="List your skills"
                    onChange={handleChange('skills')}
                    defaultValue={values.skills} />

                  <Button color="primary" style={{marginTop: '150px', marginLeft:'-80px'}} onClick={this.continue}>Next</Button><br /><br />

                  <Button color="danger" style={{marginTop: '150px', marginLeft:'80px'}}onClick={this.back}>Back</Button>
                  <br />
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
