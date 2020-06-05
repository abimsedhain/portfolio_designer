import React, { Component } from 'react';
import { Container, Col, Button, Table } from 'reactstrap';

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
      <Container fluid="md" style={{ marginTop: '20px' }}>
        <h1>Confirm your Information</h1>
        <Col xs={{ size: 12, offset: 0 }} sm={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }} xl={{ size: 10, offset: 1 }} >
          <Table bordered responsive>
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
          <br /><br />

        </Col>
        <Col xs={{ size: 12, offset: 0 }} sm={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }} xl={{ size: 10, offset: 1 }} >
          <Button color="primary" style={{ marginTop:'-50px', marginLeft: '-80px' }} onClick={this.continue}>Next</Button><br /><br />
          <Button color="danger" style={{ marginTop:'-50px', marginLeft: '80px' }} onClick={this.back}>Back</Button> 
          <br />
        </Col>

      </Container>


    )
  }
}

export default Review
