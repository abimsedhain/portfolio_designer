import React, { Component } from 'react';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class PersonalInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <Container fluid="md" style={{marginTop: '20px'}}>
        <Form>
          <h1>Personal Information</h1>
          <Row form>
            <Col xs={{ size: 12, offset: 0 }} sm={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }} xl={{ size: 8, offset: 2 }}>
              <FormGroup>
                <Label for="fullName">Full Name</Label>
                <Input type="text" name="fullName" id="fullName" placeholder="Full Name"
                  onChange={handleChange('fullName')}
                  defaultValue={values.fullName} />
                <span>{values.errorMsg}</span>

                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Email"
                  onChange={handleChange('email')}
                  defaultValue={values.email} />

                <Label for="bio">Bio</Label>
                <Input type="textarea" rows="10" name="bio" id="bio" placeholder="Enter your Bio"
                  onChange={handleChange('bio')}
                  defaultValue={values.bio} />
                <Button style={{marginTop: '180px'}} color="primary" onClick={this.continue}>Next</Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Container>
    )
  }
}

export default PersonalInfo
