import React, { Component } from 'react';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class Education extends Component {
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
      <Container fluid="md">
        <h1>Education</h1>
        <Form>
          <Row form>
            <Col md={12}>
              <FormGroup>
                <Label for="Education 1">Education</Label>
                <Input type="text" name="eduTitle" id="eduTitle" placeholder="Institution Name"
                  onChange={handleChange('eduTitle')}
                  defaultValue={values.eduTitle} />
                <br />
                <Input type="textarea" rows="5" name="eduDescription" id="eduDescription" placeholder="Education Description"
                  onChange={handleChange('eduDescription')}
                  defaultValue={values.eduDescription} />
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
    )
  }
}

export default Education
