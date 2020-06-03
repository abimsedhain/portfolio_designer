import React, { Component } from 'react';
import { Container, Col, Row, Button, FormGroup, Table } from 'reactstrap';

export class Review extends Component {
  continue = e => {
    e.preventDefault();
    //This is where we handle data transfer to database 
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const { values: { fullName, email, bio,
      github, linkedin,
      skills,
      pro1Title, pro1Description,
      pro2Title, pro2Description,
      pro3Title, pro3Description,
      exp1Title, exp1Description,
      exp2Title, exp2Description,
      eduTitle, eduDescription } } = this.props;

    return (
       <Container fluid="md">
        <h1>Confirm your Information</h1>
        <Table bordered>
          <thead>
            <tr>
              <th scope="row">Fields</th>
              <th scope="row">Information</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Full Name</td>
              <td>{fullName}</td>

            </tr>
            <tr>
              <td>Email</td>
              <td>{email}</td>

            </tr>
            <tr>
              <td>Bio</td>
              <td>{bio}</td>

            </tr>
            <tr>
              <td>Github Link</td>
              <td>{github}</td>
            </tr>
            <tr>
              <td>Linkedin Link</td>
              <td>{linkedin}</td>
            </tr>
            <tr>
              <td>Skills</td>
              <td>{skills}</td>
            </tr>
            <tr>
              <td>Project 1 Title</td>
              <td>{pro1Title}</td>
            </tr>
            <tr>
              <td>Project 1 Description</td>
              <td>{pro1Description}</td>
            </tr>

            <tr>
              <td>Project 2 Title</td>
              <td>{pro2Title}</td>
            </tr>

            <tr>
              <td>Project 2 Description</td>
              <td>{pro2Description}</td>
            </tr>
            <tr>
              <td>Project 3 Title</td>
              <td>{pro3Title}</td>
            </tr>
            <tr>
              <td>Project 3 Description</td>
              <td>{pro3Description}</td>
            </tr>

            <tr>
              <td>Experience 1 </td>
              <td>{exp1Title}</td>
            </tr>
            <tr>
              <td>Experience 1 Description</td>
              <td>{exp1Description}</td>
            </tr>
            <tr>
              <td>Experience 2 </td>
              <td>{exp2Title}</td>
            </tr>
            <tr>
              <td>Experience 2 Description</td>
              <td>{exp2Description}</td>
            </tr>

            <tr>
              <td>Education Institution </td>
              <td>{eduTitle}</td>
            </tr>
            <tr>
              <td>Education Description</td>
              <td>{eduDescription}</td>
            </tr>
          </tbody>
        </Table>
        <Row form>
          <Col xs={4} sm={4} md={4} lg={6} xl={6}>
            <FormGroup>
              <Button color="success" onClick={this.continue}>Confirm</Button>
            </FormGroup>
          </Col>
          <Col xs={4} sm={4} md={4} lg={6} xl={6}>
            <FormGroup>
              <Button color="danger" onClick={this.back}>Back</Button>
            </FormGroup>
          </Col>
        </Row>



      </Container>

       
    )
  }
}

export default Review
