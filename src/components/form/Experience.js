import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Formik, Form, Field, FieldArray } from "formik";
import { FormGroup, ButtonGroup, InputGroup } from "reactstrap";
import * as yup from "yup";
import {
	NextButton,
	BackButton,
	AddButton,
	DelButton,
	StyledInput,
	AnimatedFormItem,
} from "../styled/StyledComponents";
import { FormTitle, FormLabel } from "../styled/StyledText";

const validationSchema = yup.object({
	// exp1Title:yup.string().required('Title is required'),
	// exp1Description:yup.string().required('Description should be less than 240 words').max(240)
	// exp2Title:yup.string().required('Title is required'),
	// exp2Description:yup.string().required('Description should be less than 240 words').max(240)
});

const Experience = ({ formRef, formData }) => {
	return (
		<Formik
			innerRef={formRef}
			initialValues={formData}
			validationSchema={validationSchema}
		>
			{({ values }) => (
				<Form>
					<FormTitle>Experience</FormTitle>

					<FieldArray
						name="experiences"
						render={(arrayHelpers) => (
							<TransitionGroup>
								{values.experiences.map((experience, index) => (
									<CSSTransition
										key={index}
										classNames="field-item"
										timeout={{ enter: 300, exit: 200 }}
									>
										<AnimatedFormItem key={index}>
											<FormGroup>
												<FormLabel>
													Company Name
												</FormLabel>

												<Field
													type="text"
													name={`experiences.${index}.CompanyName`}
													as={StyledInput}
													placeholder="Facebook"
												></Field>
											</FormGroup>
											<FormGroup>
												<FormLabel>Position</FormLabel>
												<Field
													type="text"
													name={`experiences.${index}.Position`}
													as={StyledInput}
													placeholder="Software Engineer"
												></Field>
											</FormGroup>
											<FormGroup>
												<FormLabel>
													Highlights
												</FormLabel>
												<FieldArray
													name={`experiences.${index}.Highlights`}
													render={(arrayHelpers) => (
														<TransitionGroup>
															{values.experiences[
																index
															].Highlights.map(
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
																						name={`experiences.${index}.Highlights.${index2}`}
																						type="input"
																						as={
																							StyledInput
																						}
																						className="col-8 col-sm-9 col-md-8 col-lg-9 col-xl-10"
																						placeholder="Did really cool things using really cool technology"
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
																	disabled={values.experiences[index].Highlights.length===1}
																							onClick={() => {
																								values
																									.experiences[
																									index
																								]
																									.Highlights
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
											<FormGroup>
												<FormLabel>
													Start Date
												</FormLabel>
												<Field
													type="text"
													name={`experiences.${index}.StartDate`}
													as={StyledInput}
													placeholder="May 2020"
												></Field>
											</FormGroup>
											<FormGroup>
												<FormLabel>End Date</FormLabel>
												<Field
													type="text"
													name={`experiences.${index}.EndDate`}
													as={StyledInput}
													placeholder="Aug 2020"
												></Field>
											</FormGroup>
										</AnimatedFormItem>
									</CSSTransition>
								))}

								<ButtonGroup className="d-flex justify-content-center">
									<BackButton
										type="button"
										disabled={
											values.experiences.length === 1
										}
										onClick={() => {
											values.experiences.length > 1 &&
												arrayHelpers.remove(
													values.experiences.length -
														1
												);
										}}
									>
										Delete Experience
									</BackButton>

									<NextButton
										type="button"
										onClick={() =>
											arrayHelpers.push({
												CompanyName: "",
												Position: "",
												StartDate: "",
												EndDate: "",
												Highlights: [""],
											})
										}
									>
										Add Experience
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

export default Experience;
