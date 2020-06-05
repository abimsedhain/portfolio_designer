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
      <Container fluid="md" style={{ marginTop: '20px' }}>
        <h1>Education</h1>
        <Form>
          <Row form>
            <Col xs={{ size: 12, offset: 0 }} sm={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }} xl={{ size: 8, offset: 2 }}>
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
                <Button color="primary" style={{ marginTop: '60px', marginLeft: '-80px' }} onClick={this.continue}>Next</Button><br /><br />

                <Button color="danger" style={{ marginTop: '60px', marginLeft: '80px' }} onClick={this.back}>Back</Button>
                <br />
              </FormGroup>
            </Col>
          </Row>

        </Form>
      </Container>
    )
  }
}

export default Education
