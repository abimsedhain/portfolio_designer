import React from 'react'
import { Container, Col, Table, ButtonGroup} from 'reactstrap';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import {NextButton, BackButton} from '../styled/StyledComponents';


const Review = ({ formData, setFormData, nextStep, prevStep }) => {
	const history = useHistory()
	const { fullName, email, bio, github, linkedin, skills,
		pro1Title, pro1Description,
		pro2Title, pro2Description,
		pro3Title, pro3Description,
		exp1Title, exp1Description,
		exp2Title, exp2Description,
		eduTitle, eduDescription } = formData
	return (
		<Formik
			initialValues={formData}
			onSubmit={values => {
				// nextStep();


				// going to templates route
				history.push("../template")
				// remove this later
			}}>

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


				<Form>
					{/* <Col>
						<div style={{ marginTop: '-50px' }}>
							<button type='submit'>NEXT</button>
						</div>
						<div style={{ marginTop: '-30px', marginLeft: '150px' }}>
							<button onClick={prevStep}> BACK</button>
						</div>
					</Col> */}

					<ButtonGroup>
						{/* <Button onClick={prevStep}>BACK</Button> */}
						<BackButton onClick={prevStep} type="button"> BACK </BackButton>
						{/* <Button type="submit">NEXT</Button> */}
						<NextButton type="submit">NEXT</NextButton>
					</ButtonGroup>
				</Form>

			</Container>
		</Formik>
	)
}

export default Review;