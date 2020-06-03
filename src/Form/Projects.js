import React, { Component } from 'react';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class Projects extends Component {
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
         <h1>Projects</h1>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="Project 1">Project 1</Label>
                <Input type="text" name="pro1Title" id="pro1Title" placeholder="Project Title"
                  onChange={handleChange('pro1Title')}
                  defaultValue={values.pro1Title} />
                <br />

                <Input type="textarea" rows="10" name="pro1Description" id="pro1Description" placeholder="Description about the project"
                  onChange={handleChange('pro1Description')}
                  defaultValue={values.pro1Description} />
                <br />
                <Label for="Project 3">Project 3</Label>
                <Input type="text" name="pro3Title" id="pro3Title" placeholder="Project Title"
                  onChange={handleChange('pro3Title')}
                  defaultValue={values.pro3Title} />
                <br />

                <Input type="textarea" rows="10" name="pro3Description" id="pro3Description" placeholder="Description about the project"
                  onChange={handleChange('pro3Description')}
                  defaultValue={values.pro3Description} />
                <br />

               
              </FormGroup>
            </Col>

            <Col md={6}>
            <FormGroup>
              
                <Label for="Project 2">Project 2</Label>
                <Input type="text" name="pro2Title" id="pro2Title" placeholder="Project Title"
                  onChange={handleChange('pro2Title')}
                  defaultValue={values.pro2Title} />
                <br />
                <Input type="textarea" rows="10" name="pro2Description" id="pro2Description" placeholder="Description about the project"
                  onChange={handleChange('pro2Description')}
                  defaultValue={values.pro2Description} />
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

export default Projects
