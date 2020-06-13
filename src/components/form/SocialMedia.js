import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as yup from 'yup';
import { FormGroup, Label, Input, Button, ButtonGroup, InputGroup } from 'reactstrap';

const validationSchema = yup.object({
	// github:yup.string().required('Github Link is required'),
	// linkedin:yup.string().required('Linkedin Link is required'),
	// skills:yup.string().required('PLEASE TRY SOME COMMENTS').max(50)
});


const SocialMedia = ({ formData, setFormData, nextStep, prevStep }) => {
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
					<h1>Social Media</h1>

					<FormGroup>
						<Label>
							Github Link
					</Label>
						<Field type='text' id='github' name='github' placeholder="Enter GitHub Link" as={Input} />
						<ErrorMessage name='github' />
					</FormGroup>
					<FormGroup>
						<Label>Linkedin Link</Label>

						<Field type='text' id='linkedin' name='linkedin' as={Input} placeholder="Enter LinkedIn Link" />
						<ErrorMessage name='linkedin' />
					</FormGroup>
					<h1>Skills</h1>
						<FieldArray name="skills" render={
							arrayHelpers => (
								<>
									{
										values.skills.map((skill, index) => (
											<FormGroup key={index}>
												<InputGroup>
													<Field name={`skills.${index}`} type="input" as={Input} placeholder="Enter Skill" />
													<ButtonGroup>
														<Button
															type="button"
															onClick={() => { values.skills.length > 1 && arrayHelpers.remove(index) }} className="bg-danger"
														>
															-
                      											</Button>
														<Button
															type="button"
															onClick={() => arrayHelpers.insert(index, '')} className="bg-success"
														>+
                      											</Button>
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
						<Button onClick={prevStep}>BACK</Button>
						<Button type="submit">NEXT</Button>
					</ButtonGroup>


				</Form>

			)}
		</Formik>
	)

}

export default SocialMedia;