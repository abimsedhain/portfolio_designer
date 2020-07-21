import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Formik, Form, Field, FieldArray } from "formik";
import { FormGroup, ButtonGroup, InputGroup } from "reactstrap";
import * as yup from "yup";
import {
	NextButton,
	BackButton,
	StyledInput,
	AddButton,
	DelButton,
	AnimatedFormItem,
} from "../styled/StyledComponents";
import { FormTitle, FormLabel } from "../styled/StyledText";

const validationSchema = yup.object({
	// eduTitle:yup.string().required('Title is required'),
	// eduDescription:yup.string().required('Description should be less than 240 words').max(240)
});



const Education = ({ formRef, formData }) => {
	return (
		<Formik
			innerRef={formRef}
			initialValues={formData}
			validationSchema={validationSchema}
		>
			{({ values }) => (
				<Form>
					<FormTitle>Education</FormTitle>
					<FieldArray
						name="education"
						render={(arrayHelpers) => (
							<TransitionGroup component={null}>
								{values.education.map((edu, index) => (
									<CSSTransition
										key={index}
										timeout={{ enter: 300, exit: 200 }}
										classNames="field-item"
									>
										<AnimatedFormItem key={index}>
											<FormGroup>
												<FormLabel>
													Institution Name
												</FormLabel>
												<Field
													type="text"
													name={`education.${index}.InstituteName`}
													as={StyledInput}
													placeholder="Princeton University"
												></Field>
											</FormGroup>
											<FormGroup>
												<FormLabel>Degree</FormLabel>
												<Field
													type="text"
													name={`education.${index}.Degree`}
													as={StyledInput}
													placeholder="Computer Science"
												></Field>
											</FormGroup>
											<FormGroup>
												<FormLabel>
													Start Date
												</FormLabel>
												<Field
													type="text"
													name={`education.${index}.StartDate`}
													as={StyledInput}
													placeholder="Aug 2020"
												></Field>
											</FormGroup>
											<FormGroup>
												<FormLabel>End Date</FormLabel>
												<Field
													type="text"
													name={`education.${index}.EndDate`}
													as={StyledInput}
													placeholder="May 2024"
												></Field>
											</FormGroup>
											<FormGroup>
												<FormLabel>Courses</FormLabel>
												<FieldArray
													name={`education.${index}.Courses`}
													render={(arrayHelpers) => (
														<TransitionGroup>
															{values.education[
																index
															].Courses.map(
																(
																	highlight,
																	index2
																) => (
																	<CSSTransition
																		key={
																			index2
																		}
																		classNames="field-item"
																		timeout={{
																			enter: 300,
																			exit: 200,
																		}}
																	>
																		<AnimatedFormItem>
																			<FormGroup
																				key={
																					index2
																				}
																			>
																				<InputGroup>
																					<Field
																						name={`education.${index}.Courses.${index2}`}
																						type="input"
																						as={
																							StyledInput
																						}
																						placeholder="Machine Learning"
																						className="col-8 col-sm-9 col-md-8 col-lg-9 col-xl-10"
																					/>
																					<ButtonGroup>
																						<AddButton
																							type="button"
																							onClick={() =>
																								arrayHelpers.insert(
																									index2 +
																										1,
																									""
																								)
																							}
																						>
																							&#43;
																						</AddButton>

																						<DelButton
																							type="button"
																							disabled={values.education[index].Courses.length===1}
																							onClick={() => {
																								values
																									.education[
																									index
																								]
																									.Courses
																									.length >
																									1 &&
																									arrayHelpers.remove(
																										index2
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
																)
															)}
														</TransitionGroup>
													)}
												></FieldArray>
											</FormGroup>
										</AnimatedFormItem>
									</CSSTransition>
								))}
								<ButtonGroup className="d-flex justify-content-center">
									<BackButton 
										type="button"
										disabled={values.education.length === 1}
										onClick={() => {
											values.education.length > 1 &&
												arrayHelpers.remove(
													values.education.length - 1
												);
										}}
									>
										Delete Education
									</BackButton>

									<NextButton
										type="button"
										onClick={() =>
											arrayHelpers.push({
												InstituteName: "",
												StartDate: "",
												EndDate: "",
												Degree: "",
												Courses: [""],
											})
										}
									>
										Add Education
									</NextButton>
								</ButtonGroup>
							</TransitionGroup>
						)}
					></FieldArray>
				</Form>
			)}
		</Formik>
	);
};

export default Education;
