import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as yup from 'yup';
import { FormGroup, ButtonGroup, InputGroup } from 'reactstrap';
import { NextButton, BackButton, AddButton, DelButton, StyledInput, FormTitle, FormLabel } from '../styled/StyledComponents';

const validationSchema = yup.object({
	// github:yup.string().required('Github Link is required'),
	// linkedin:yup.string().required('Linkedin Link is required'),
	// skills:yup.string().required('PLEASE TRY SOME COMMENTS').max(50)
});


const SocialMedia = ({ formData, setFormData, nextStep, prevStep, setUserState }) => {
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
					<FormTitle>Social Media</FormTitle>

					<FormGroup>
						<FormLabel>Github Link</FormLabel>
						<Field type='text' id='github' name='github' placeholder="Enter GitHub Link" as={StyledInput} />
						<ErrorMessage name='github' />
					</FormGroup>
					<FormGroup>
						<FormLabel>Linkedin Link</FormLabel>
						<Field type='text' id='linkedin' name='linkedin' as={StyledInput} placeholder="Enter LinkedIn Link" />
						<ErrorMessage name='linkedin' />
					</FormGroup>
					<FormTitle>Skills</FormTitle>
					<FieldArray name="skills" render={
						arrayHelpers => (
							<>
								{
									values.skills.map((skill, index) => (
										<FormGroup key={index}>
											<InputGroup>
												<Field name={`skills.${index}`} type="input" as={StyledInput} style={{width:'86%'}} placeholder="Enter Skill" />
												<ButtonGroup>
													{/* <Button
															type="button"
															onClick={() => { values.skills.length > 1 && arrayHelpers.remove(index) }} className="bg-danger"
														>
															-
                      											</Button>
														<Button
															type="button"
															onClick={() => arrayHelpers.insert(index, '')} className="bg-success"
														>+
                      											</Button> */}

																	<AddButton type="button"
															onClick={() => arrayHelpers.insert(index+1, '')}>
																	&#43;
																  </AddButton>

																  <DelButton type="button"
															onClick={() => { values.skills.length > 1 && arrayHelpers.remove(index) }} >
																	&#8722;
																  </DelButton>

												</ButtonGroup>
											</InputGroup>
										</FormGroup>
									))
								}
							</>

						)

					}>

					</FieldArray>
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

export default SocialMedia;