import React, { Component } from 'react';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class Experience extends Component {
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
        <h1>Experience</h1>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="Experience 1">Experience 1</Label>
                <Input type="text" name="exp1Title" id="exp1Title" placeholder="Project Title"
                  onChange={handleChange('exp1Title')}
                  defaultValue={values.exp1Title} />
                <br />

                <Input type="textarea" rows="10" name="exp1Description" id="exp1Description" placeholder="Description about the project"
                  onChange={handleChange('exp1Description')}
                  defaultValue={values.exp1Description} />
                <br />


              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label for="Experience 2">Experience 2</Label>
                <Input type="text" name="exp2Title" id="exp2Title" placeholder="Project Title"
                  onChange={handleChange('exp2Title')}
                  defaultValue={values.exp2Title} />
                <br />

                <Input type="textarea" rows="10" name="exp2Description" id="exp2Description" placeholder="Description about the project"
                  onChange={handleChange('exp2Description')}
                  defaultValue={values.exp2Description} />
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

export default Experience
