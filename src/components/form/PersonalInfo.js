import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Input, FormGroup } from "reactstrap"
import {NextButton} from '../styled/StyledComponents';


const validationSchema = yup.object({
	// fullName: yup.string().required('Name is required').max(20),
	// email: yup.string().email('INVALID EMAIL').required('Email is Reqired')
	// bio: yup.string().required('Description should be less than 240 words').max(240)
});

const PersonalInfo = ({ formData, setFormData, nextStep }) => {
	return (
		<Formik
			initialValues={formData}
			onSubmit={values => {
				setFormData(values);
				nextStep();
				console.log(values);
			}}
			validationSchema={validationSchema}>
			<Form>
				<h1>Personal Information</h1>

				<FormGroup>
					{/* <Label>Full Name</Label> */}
					<Field type="text" id="fullName" name="fullName" as={Input} placeholder="Enter Full Name"
						></Field>
					<ErrorMessage name='fullName' />
				</FormGroup>

				<FormGroup>
					{/* <Label>Email</Label> */}
					<Field type='email' id='email' name='email' as={Input} placeholder="Enter Email"/>
					<ErrorMessage name='email' />
				</FormGroup>

				<FormGroup>
					{/* <Label>Bio</Label> */}
					<Field rows='7' id='bio' name='bio' as={Input} type="textarea"  placeholder="Enter your Bio Here..."/>
					<ErrorMessage name='email' />
				</FormGroup>
				{/* 
				<FormGroup>
					<input type="input" class="form__field" placeholder="Enter Full Name" name="name" id='name' />
				</FormGroup> */}
				<NextButton type='submit'> Continue </NextButton>
			</Form>
		</Formik>


	)

}

export default PersonalInfo;