import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Input, FormGroup } from "reactstrap"
import { NextButton, StyledInput, FormTitle, FormLabel, HrLine, StyledTextarea} from '../styled/StyledComponents';

const validationSchema = yup.object({
	// fullName: yup.string().required('Name is required').max(20),
	// email: yup.string().email('INVALID EMAIL').required('Email is Reqired')
	// bio: yup.string().required('Description should be less than 240 words').max(240)
});


const PersonalInfo = ({ formData, setFormData, nextStep , setUserState}) => {
	return (
		<Formik
			initialValues={formData}
			onSubmit={values => {
				setFormData(values);
				setUserState(values)
				nextStep();
			}}
			validationSchema={validationSchema}>
			<Form>
				<FormTitle>Personal Information</FormTitle>

				<FormGroup>
					<FormLabel>Full Name</FormLabel>
					<Field type="text" name="fullName" as={StyledInput} placeholder="Enter Full Name"
					></Field>
					<ErrorMessage name='fullName' />
				</FormGroup>

				<FormGroup>
					<FormLabel>Email</FormLabel>
					<Field type='email' name='email' as={StyledInput} placeholder="Enter Email" />
					{/* <StyledInput type='email' name='email' as={StyledInput} placeholder="Enter Email" ></StyledInput> */}
					<ErrorMessage name='email' />
				</FormGroup>

				<FormGroup>
					<FormLabel>Bio</FormLabel>
					<Field rows='5' name='bio' as={StyledTextarea} type="textarea" placeholder="Enter your Bio Here..." />
					<ErrorMessage name='email' />
				</FormGroup>
				{/* 
				<FormGroup>
					<input type="input" class="form__field" placeholder="Enter Full Name" name="name" id='name' />
				</FormGroup> */}
				<HrLine/>
				<NextButton type='submit'> Continue </NextButton>
			</Form>
		</Formik>


	)

}

export default PersonalInfo;