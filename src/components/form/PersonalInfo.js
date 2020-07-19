import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { FormGroup } from "reactstrap";
import {
	StyledInput,
	StyledTextarea,
} from "../styled/StyledComponents";
import { FormTitle, FormLabel } from "../styled/StyledText";

const validationSchema = yup.object({
	// fullName: yup.string().required('Name is required').max(20),
	// email: yup.string().email('INVALID EMAIL').required('Email is Reqired')
	// bio: yup.string().required('Description should be less than 240 words').max(240)
});

const PersonalInfo = ({ formRef, formData }) => {
	return (
		<Formik
			innerRef={formRef}
			initialValues={formData}
			validationSchema={validationSchema}
		>
			<Form>
				<FormTitle>Personal Information</FormTitle>

				<FormGroup>
					<FormLabel>Full Name</FormLabel>
					<Field
						type="text"
						name="fullName"
						as={StyledInput}
						placeholder="John Smith"
					></Field>
					<ErrorMessage name="fullName" />
				</FormGroup>

				<FormGroup>
					<FormLabel>Email</FormLabel>
					<Field
						type="email"
						name="email"
						as={StyledInput}
						placeholder="JSmith@g****.com"
					/>
					{/* <StyledInput type='email' name='email' as={StyledInput} placeholder="Enter Email" ></StyledInput> */}
					<ErrorMessage name="email" />
				</FormGroup>

				<FormGroup>
					<FormLabel>Bio</FormLabel>
					<Field
						rows="5"
						name="bio"
						as={StyledTextarea}
						type="textarea"
						placeholder="Super Hero, Saint, God himself"
					/>
					<ErrorMessage name="email" />
				</FormGroup>
			</Form>
		</Formik>
	);
};

export default PersonalInfo;
