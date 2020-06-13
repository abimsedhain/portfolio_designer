import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import { Label, Input, FormGroup, Button, ButtonGroup, InputGroup } from "reactstrap"
import * as yup from 'yup';

const validationSchema = yup.object({
	// exp1Title:yup.string().required('Title is required'),
	// exp1Description:yup.string().required('Description should be less than 240 words').max(240)

	// exp2Title:yup.string().required('Title is required'),
	// exp2Description:yup.string().required('Description should be less than 240 words').max(240)
});


const Experience = ({ formData, setFormData, nextStep, prevStep }) => {
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
					<h1>Experience</h1>



					<FieldArray name="experiences" render={
						arrayHelpers => (
							<>
								{values.experiences.map((experience, index) => (
									<div key={index}>
										<FormGroup>
											<Label>Company Name</Label>
											<ButtonGroup>
												<Button className="bg-danger" type="button"
													onClick={() => { values.experiences.length > 1 && arrayHelpers.remove(index) }} >-</Button>
												<Button className="bg-info" type="button"
													onClick={() => arrayHelpers.insert(index, {
														CompanyName: "",
														Position: "",
														StartDate: "",
														EndDate: "",
														Highlights: [""]
													})}>+</Button>
											</ButtonGroup>

											<Field type="text" name={`experiences.${index}.CompanyName`} as={Input} placeholder="Enter Company Name"></Field>

										</FormGroup>
										<FormGroup>
											<Label>Position</Label>
											<Field type="text" name={`experiences.${index}.Position`} as={Input} placeholder="Enter Position"></Field>
										</FormGroup>
										<FormGroup>
											<Label>Highlights</Label>

											<FieldArray name={`experiences.${index}.Highlights`} render={
												arrayHelpers => (
													<>
														{values.experiences[index].Highlights.map((highlight, index2) => (
															<FormGroup key={index2}>
																<InputGroup>
																	<Field name={`experiences.${index}.Highlights.${index2}`} type="input" as={Input} placeholder="Enter Highlight" />
																	<ButtonGroup>
																		<Button
																			type="button"
																			onClick={() => { values.experiences[index].Highlights.length > 1 && arrayHelpers.remove(index2) }} className="bg-danger"
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
											<Label>Start Date</Label>
											<Field type="text" name={`experiences.${index}.StartDate`} as={Input} placeholder="Enter Start Date"></Field>
										</FormGroup>
										<FormGroup>
											<Label>End Date</Label>
											<Field type="text" name={`experiences.${index}.EndDate`} as={Input} placeholder="Enter End Date"></Field>
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

export default Experience;