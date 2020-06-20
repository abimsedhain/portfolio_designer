import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import * as yup from 'yup';
import { ButtonGroup, Label, Input, FormGroup, InputGroup } from 'reactstrap';
import {NextButton, BackButton, AddButton, DelButton, HrLine} from '../styled/StyledComponents';

const validationSchema = yup.object({
	// pro1Title:yup.string().required('Title is required'),
	// pro1Description:yup.string().required('Description should be less than 240 words').max(240)

	// pro2Title:yup.string().required('Title is required'),
	// pro2Description:yup.string().required('Description should be less than 240 words').max(240)

	// pro3Title:yup.string().required('Title is required'),
	// pro3Description:yup.string().required('Description should be less than 240 words').max(240)
});


const Projects = ({ formData, setFormData, nextStep, prevStep,  setUserState}) => {
	return (
		<Formik
			initialValues={formData}
			onSubmit={values => {
				setFormData(values);
				setUserState(values)
				nextStep();
			}}
			validationSchema={validationSchema}
		>
			{({ values }) => (
				<Form>
					<h1>Projects</h1>

					<FieldArray name="projects" render={
						arrayHelpers => (
							<>
								{values.projects.map((project, index) => (
									<div key={index}>
										<FormGroup>
											<Label>Project Title</Label>
											{/* <ButtonGroup>
												<Button className="bg-danger" type="button"
													onClick={() => { values.projects.length > 1 && arrayHelpers.remove(index) }} >-</Button>
												<Button className="bg-info" type="button"
													onClick={() => arrayHelpers.insert(index, {
														Title: "",
														Description: "",
														SourceLink: "",
														DemoLink: "",
														Highlights: [""]
													})}>+</Button>
											</ButtonGroup> */}

											<Field type="text" name={`projects.${index}.Title`} as={Input} placeholder="Enter Project Title"></Field>

										</FormGroup>
										<FormGroup>
											<Label>Project Description</Label>
											<Field type="text" name={`projects.${index}.Description`} as={Input} placeholder="Enter Project Description"></Field>
										</FormGroup>
										<FormGroup>
											<Label>Highlights</Label>

											<FieldArray name={`projects.${index}.Highlights`} render={
												arrayHelpers => (
													<>
														{values.projects[index].Highlights.map((highlight, index2) => (
															<FormGroup key={index2}>
																<InputGroup>
																	<Field name={`projects.${index}.Highlights.${index2}`} type="input" as={Input} placeholder="Enter Highlight" />
																	<ButtonGroup>
																		{/* <Button
																			type="button"
																			onClick={() => { values.projects[index].Highlights.length > 1 && arrayHelpers.remove(index2) }} className="bg-danger"
																		>
																			-
                      											</Button>

																 
																		<Button
																			type="button"
																			onClick={() => arrayHelpers.insert(index2, '')} className="bg-success"
																		>+
                      											</Button> */}

																  <AddButton type="button"
																			onClick={() => arrayHelpers.insert(index2+1, '')} >
																  &#43;
																  </AddButton>
																  <DelButton type="button"
																			onClick={() => { values.projects[index].Highlights.length > 1 && arrayHelpers.remove(index2) }} >
																  &#8722;
																  </DelButton>
																	</ButtonGroup>
																</InputGroup>
															</FormGroup>
														))}
													</>
												)

											}>

											</FieldArray>

										</FormGroup>
										<FormGroup>
											<Label>Source Link</Label>
											<Field type="text" name={`projects.${index}.SourceLink`} as={Input} placeholder="Enter Project Source Link"></Field>
										</FormGroup>
										<FormGroup>
											<Label>Demo Link</Label>
											<Field type="text" name={`projects.${index}.DemoLink`} as={Input} placeholder="Enter Project Demo Link"></Field>
										</FormGroup>

										<ButtonGroup>
												<BackButton type="button" disabled={true}
													onClick={() => { values.projects.length > 1 && arrayHelpers.remove(index) }}>
													Delete Project
												</BackButton>

													<NextButton type="button"
													onClick={() => arrayHelpers.insert(index+1, {
														Title: "",
														Description: "",
														SourceLink: "",
														DemoLink: "",
														Highlights: [""]
													})}>
													Add Project
													</NextButton>
											</ButtonGroup>
									</div>

								))}
							</>
						)


					}>
					</FieldArray>
					<HrLine/>
					<ButtonGroup>
						{/* <Button onClick={prevStep}>BACK</Button> */}
						<BackButton onClick={prevStep}> BACK </BackButton>
						{/* <Button type="submit">NEXT</Button> */}
						<NextButton type="submit">NEXT</NextButton>
					</ButtonGroup>
				</Form>

			)}


		</Formik>


	)

}

export default Projects;