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
      <Container fluid="md" style={{marginTop: '20px'}}>
        <h1>Projects</h1>
        <Form>
          <Row form>
            <Col  xs={{ size: 12, offset: 0 }} sm={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }} xl={{ size: 8, offset: 2 }} >
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

                <Label for="Project 2">Project 2</Label>
                <Input type="text" name="pro2Title" id="pro2Title" placeholder="Project Title"
                  onChange={handleChange('pro2Title')}
                  defaultValue={values.pro2Title} />
                <br />
                <Input type="textarea" rows="10" name="pro2Description" id="pro2Description" placeholder="Description about the project"
                  onChange={handleChange('pro2Description')}
                  defaultValue={values.pro2Description} />
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

                <Button color="primary" style={{ marginTop: '320px', marginLeft: '-80px' }} onClick={this.continue}>Next</Button><br /><br />

                <Button color="danger" style={{ marginTop: '320px', marginLeft: '80px' }} onClick={this.back}>Back</Button>

              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Container>
    )
  }
}

export default Projects
