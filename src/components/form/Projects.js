import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as yup from 'yup';
import { ButtonGroup, Button, Label, Input, FormGroup, InputGroup } from 'reactstrap';

const validationSchema = yup.object({
	// pro1Title:yup.string().required('Title is required'),
	// pro1Description:yup.string().required('Description should be less than 240 words').max(240)

	// pro2Title:yup.string().required('Title is required'),
	// pro2Description:yup.string().required('Description should be less than 240 words').max(240)

	// pro3Title:yup.string().required('Title is required'),
	// pro3Description:yup.string().required('Description should be less than 240 words').max(240)
});


const Projects = ({ formData, setFormData, nextStep, prevStep }) => {
	return (
		<Formik
			initialValues={formData}
			onSubmit={values => {
				setFormData(values);
				nextStep();
				console.log(values);
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
											<ButtonGroup>
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
											</ButtonGroup>

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
																		<Button
																			type="button"
																			onClick={() => { values.projects[index].Highlights.length > 1 && arrayHelpers.remove(index2) }} className="bg-danger"
																		>
																			-
                      											</Button>
																		<Button
																			type="button"
																			onClick={() => arrayHelpers.insert(index2, '')} className="bg-success"
																		>+
                      											</Button>
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
									</div>

								))}
							</>
						)


					}>
					</FieldArray>
					<ButtonGroup>
						<Button onClick={prevStep}>BACK</Button>
						<Button type="submit">NEXT</Button>
					</ButtonGroup>
				</Form>

			)}


		</Formik>


	)

}

export default Projects;