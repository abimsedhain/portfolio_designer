import React from 'react'
import { Formik, Form, Field,FieldArray} from 'formik';
import {Label, Input, FormGroup,ButtonGroup} from "reactstrap"
import * as yup from 'yup';
import {NextButton, BackButton, HrLine} from '../styled/StyledComponents';

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
					<h1>Education</h1>



					<FieldArray name="education" render={
						arrayHelpers => (
							<>
								{values.education.map((edu, index) => (
									<div key={index}>
										<FormGroup>
											<Label>Institution Name</Label>
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

											<Field type="text" name={`education.${index}.InstituteName`} as={Input} placeholder="Enter Institution Name"></Field>

										</FormGroup>
										<FormGroup>
											<Label>Degree</Label>
											<Field type="text" name={`education.${index}.Degree`} as={Input} placeholder="Enter Degree"></Field>
										</FormGroup>
										<FormGroup>
											<Label>Start Date</Label>
											<Field type="text" name={`education.${index}.StartDate`} as={Input} placeholder="Enter Start Date"></Field>
										</FormGroup>
										<FormGroup>
											<Label>End Date</Label>
											<Field type="text" name={`education.${index}.EndDate`} as={Input} placeholder="Enter End Date"></Field>
										</FormGroup>

										<ButtonGroup>
													<BackButton type="button"
													onClick={() => { values.education.length > 1 && arrayHelpers.remove(index) }} >
													Delete Education
													</BackButton>

													<NextButton type="button"
													onClick={() => arrayHelpers.insert(index+1, {
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

export default Education;