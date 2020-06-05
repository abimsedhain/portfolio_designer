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
      <Container fluid="md" style={{marginTop: '20px'}}>
        <h1>Experience</h1>
        <Form>
          <Row form>
            <Col xs={{ size: 12, offset: 0 }} sm={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }} xl={{ size: 8, offset: 2 }}>
              <FormGroup>
                <Label for="Experience 1">Experience 1</Label>
                <Input type="text" name="exp1Title" id="exp1Title" placeholder="Title"
                  onChange={handleChange('exp1Title')}
                  defaultValue={values.exp1Title} />
                <br />

                <Input type="textarea" rows="10" name="exp1Description" id="exp1Description" placeholder="Experience Description"
                  onChange={handleChange('exp1Description')}
                  defaultValue={values.exp1Description} />
                <br />
                <Label for="Experience 2">Experience 2</Label>
                <Input type="text" name="exp2Title" id="exp2Title" placeholder="Title"
                  onChange={handleChange('exp2Title')}
                  defaultValue={values.exp2Title} />
                <br />

                <Input type="textarea" rows="10" name="exp2Description" id="exp2Description" placeholder="Experience Description"
                  onChange={handleChange('exp2Description')}
                  defaultValue={values.exp2Description} />
                <br />

                <Button color="primary" style={{ marginTop: '200px', marginLeft: '-80px' }} onClick={this.continue}>Next</Button><br /><br />

                <Button color="danger" style={{ marginTop: '200px', marginLeft: '80px' }} onClick={this.back}>Back</Button>
                <br />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Container>
    )
  }
}

export default Experience
