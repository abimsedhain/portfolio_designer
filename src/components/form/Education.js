import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import { FormGroup, ButtonGroup, InputGroup } from "reactstrap"
import * as yup from 'yup';
import { NextButton, BackButton, HrLine, StyledInput, FormTitle, FormLabel, AddButton, DelButton } from '../styled/StyledComponents';

const validationSchema = yup.object({
	// eduTitle:yup.string().required('Title is required'),
	// eduDescription:yup.string().required('Description should be less than 240 words').max(240)
});


const Education = ({ formData, setFormData, nextStep, prevStep, setUserState }) => {
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
					<FormTitle>Education</FormTitle>

					<FieldArray name="education"  render={
						arrayHelpers => (
							<>
								{values.education.map((edu, index) => (
									<div key={index}>
										<FormGroup>
											<FormLabel>Institution Name</FormLabel>
											{/* <ButtonGroup>
												<Button className="bg-danger" type="button"
													onClick={() => { values.education.length > 1 && arrayHelpers.remove(index) }} >-</Button>
												<Button className="bg-info" type="button"
													onClick={() => arrayHelpers.insert(index, {
														InstituteName: "",
														StartDate: "",
														EndDate: "",
														Degree: ""
													})}>+</Button>
											</ButtonGroup> */}

											<Field type="text" name={`education.${index}.InstituteName`} as={StyledInput} placeholder="Enter Institution Name"></Field>

										</FormGroup>
										<FormGroup>
											<FormLabel>Degree</FormLabel>
											<Field type="text" name={`education.${index}.Degree`} as={StyledInput} placeholder="Enter Degree"></Field>
										</FormGroup>
										<FormGroup>
											<FormLabel>Start Date</FormLabel>
											<Field type="text" name={`education.${index}.StartDate`} as={StyledInput} placeholder="Enter Start Date"></Field>
										</FormGroup>
										<FormGroup>
											<FormLabel>End Date</FormLabel>
											<Field type="text" name={`education.${index}.EndDate`} as={StyledInput} placeholder="Enter End Date"></Field>
										</FormGroup>
										<FormGroup>
											<FormLabel>Courses</FormLabel>
											<FieldArray name={`education.${index}.Courses`} render={
												arrayHelpers => (
													<>
														{values.education[index].Courses.map((highlight, index2) => (
															<FormGroup key={index2}>
																<InputGroup>
																	<Field name={`education.${index}.Courses.${index2}`} type="input" as={StyledInput} placeholder="Enter Courses" className="col-8 col-sm-9 col-md-8 col-lg-9 col-xl-10"/>
																	<ButtonGroup>
																		<AddButton type="button" 
																			onClick={() => arrayHelpers.insert(index2 + 1, '')} >
																			&#43;
																  </AddButton>

																		<DelButton type="button"
																			onClick={() => { values.education[index].Courses.length > 1 && arrayHelpers.remove(index2) }}>
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

										<ButtonGroup className="d-flex justify-content-center">
											<BackButton type="button"
												onClick={() => { values.education.length > 1 && arrayHelpers.remove(index) }} >
												Delete Education
													</BackButton>

											<NextButton type="button"
												onClick={() => arrayHelpers.insert(index + 1, {
													InstituteName: "",
													StartDate: "",
													EndDate: "",
													Degree: ""
												})}>
												Add Education
													</NextButton>
										</ButtonGroup>
									</div>

								))}
							</>
						)


					}>
					</FieldArray>
					<HrLine />
					<ButtonGroup>
						{/* <Button onClick={prevStep}>BACK</Button> */}
						<BackButton onClick={prevStep} type="button"> BACK </BackButton>
						{/* <Button type="submit">NEXT</Button> */}
						<NextButton type="submit">NEXT</NextButton>
					</ButtonGroup>
				</Form>

			)}
		</Formik>

	)
}

export default Education;