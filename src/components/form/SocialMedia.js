import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";
import { FormGroup, ButtonGroup, InputGroup } from "reactstrap";
import {
	AddButton,
	DelButton,
	StyledInput,
	AnimatedFormItem,
} from "../styled/StyledComponents";
import { FormTitle, FormLabel } from "../styled/StyledText";

const validationSchema = yup.object({
	// github:yup.string().required('Github Link is required'),
	// linkedin:yup.string().required('Linkedin Link is required'),
	// skills:yup.string().required('PLEASE TRY SOME COMMENTS').max(50)
});

const SocialMedia = ({ formRef, formData }) => {
	return (
		<Formik
			innerRef={formRef}
			initialValues={formData}
			validationSchema={validationSchema}
		>
			{({ values }) => (
				<Form>
					<FormTitle>Social Media</FormTitle>

					<FormGroup>
						<FormLabel>Github Link</FormLabel>
						<Field
							type="text"
							id="github"
							name="github"
							placeholder="Enter GitHub Link"
							as={StyledInput}
						/>
						<ErrorMessage name="github" />
					</FormGroup>
					<FormGroup>
						<FormLabel>Linkedin Link</FormLabel>
						<Field
							type="text"
							id="linkedin"
							name="linkedin"
							as={StyledInput}
							placeholder="Enter LinkedIn Link"
						/>
						<ErrorMessage name="linkedin" />
					</FormGroup>
					<FormTitle>Skills</FormTitle>
					<FieldArray
						name="skills"
						render={(arrayHelpers) => (
							<TransitionGroup>
								{values.skills.map((skill, index) => (
									<CSSTransition
										key={index}
										classNames="field-item"
										timeout={{ enter: 300, exit: 200 }}
									>
										<AnimatedFormItem>
											<FormGroup key={index}>
												<InputGroup>
													<Field
														name={`skills.${index}`}
														type="input"
														as={StyledInput}
														className="col-8 col-sm-9 col-md-8 col-lg-9 col-xl-10"
														placeholder="Enter Skill"
													/>
													<ButtonGroup>
														<AddButton
															type="button"
															onClick={() =>
																arrayHelpers.insert(
																	index + 1,
																	""
																)
															}
														>
															&#43;
														</AddButton>

														<DelButton
															type="button"
															disabled={values.skills.length===1}
															onClick={() => {
																values.skills
																	.length >
																	1 &&
																	arrayHelpers.remove(
																		index
																	);
															}}
														>
															&#8722;
														</DelButton>
													</ButtonGroup>
												</InputGroup>
											</FormGroup>
										</AnimatedFormItem>
									</CSSTransition>
								))}
							</TransitionGroup>
						)}
					></FieldArray>
				</Form>
			)}
		</Formik>
	);
};

export default SocialMedia;
