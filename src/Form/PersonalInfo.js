import React, { Component } from 'react';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class PersonalInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const {values, handleChange} = this.props;
       return (
      <Container fluid="md">
       <Form>
         <h1>Personal Information</h1>
       <Row form>
         <Col md={6}>
           <FormGroup>
             <Label for="exampleEmail">Full Name</Label>
             <Input type="text" name="email" id="exampleEmail" placeholder="Full Name" 
             onChange={handleChange('firstName')}
             defaultValue={values.fullName}/>
             <span>{values.errorMsg}</span>
           </FormGroup>
         </Col>
         <Col md={6}>
           <FormGroup>
             <Label for="examplePassword">Email</Label>
             <Input type="email" name="password" id="examplePassword" placeholder="Email" 
             onChange={handleChange('lastName')}
             defaultValue={values.email}/>
           </FormGroup>
         </Col>
       </Row>
       <FormGroup>
         <Label for="exampleAddress">Bio</Label>
         <Input type="textarea" rows="10" name="address" id="exampleAddress" placeholder="Enter your Bio" 
         onChange={handleChange('email')}
         defaultValue={values.bio}/>
         <Button color="primary" onClick={this.continue}>Next</Button>
       </FormGroup>
       </Form>
       </Container>
    )
  }
}

export default PersonalInfo
