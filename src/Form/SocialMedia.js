import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormGroup, Label, Input, Button, ButtonGroup } from 'reactstrap';

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

					<Field type='text' id='linkedin' name='linkedin' as={Input} placeholder="Enter LinkedIn Link"/>
					<ErrorMessage name='linkedin' />
				</FormGroup>
				<h1>Skills</h1>
				<FormGroup>
					<Label>Skills</Label>

					<Field type='text' id='skills' name='skills' as={Input} placeholder="Enter Skills"/>
					<ErrorMessage name='skills' />
				</FormGroup>
				<ButtonGroup>
					<Button onClick={prevStep}>BACK</Button>
					<Button type="submit">NEXT</Button>
				</ButtonGroup>


			</Form>
		</Formik>
	)

}

export default SocialMedia;