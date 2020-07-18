import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Formik, Form, Field, FieldArray } from "formik";
import * as yup from "yup";
import { ButtonGroup, FormGroup, InputGroup } from "reactstrap";
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
	// pro1Title:yup.string().required('Title is required'),
	// pro1Description:yup.string().required('Description should be less than 240 words').max(240)
	// pro2Title:yup.string().required('Title is required'),
	// pro2Description:yup.string().required('Description should be less than 240 words').max(240)
	// pro3Title:yup.string().required('Title is required'),
	// pro3Description:yup.string().required('Description should be less than 240 words').max(240)
});

const Projects = ({ formRef, formData }) => {
	return (
		<Formik
			innerRef={formRef}
			initialValues={formData}
			validationSchema={validationSchema}
		>
			{({ values }) => (
				<Form>
					<FormTitle>Projects</FormTitle>

					<FieldArray
						name="projects"
						render={(arrayHelpers) => (
							<TransitionGroup>
								{values.projects.map((project, index) => (
									<CSSTransition
										key={index}
										classNames="field-item"
										timeout={{ enter: 300, exit: 200 }}
									>
										<AnimatedFormItem key={index}>
											<FormGroup>
												<FormLabel>
													Project Title
												</FormLabel>
												{/* <ButtonGroup>
												<Button className="bg-danger" type="button"
													onClick={() => { values.projects.length > 1 && arrayHelpers.remove(index) }} >-</Button>
												<Button className="bg-info" type="button"
													onClick={() => arrayHelpers.insert(index, {
														Title: "",
														Description: "",
														SourceLink: "",
														DemoLink: "",
														Highlights: [""]
													})}>+</Button>
											</ButtonGroup> */}

												<Field
													type="text"
													name={`projects.${index}.Title`}
													as={StyledInput}
													placeholder="Enter Project Title"
												></Field>
											</FormGroup>
											<FormGroup>
												<FormLabel>
													Project Description
												</FormLabel>
												<Field
													type="text"
													name={`projects.${index}.Description`}
													as={StyledInput}
													placeholder="Enter Project Description"
												></Field>
											</FormGroup>
											<FormGroup>
												<FormLabel>
													Highlights
												</FormLabel>

												<FieldArray
													name={`projects.${index}.Highlights`}
													render={(arrayHelpers) => (
														<TransitionGroup>
															{values.projects[
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
																						name={`projects.${index}.Highlights.${index2}`}
																						type="input"
																						as={
																							StyledInput
																						}
																						className="col-8 col-sm-9 col-md-8 col-lg-9 col-xl-10"
																						placeholder="Enter Highlight"
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
																							disabled={values.projects[index].Highlights.length===1}
																							onClick={() => {
																								values
																									.projects[
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
													Source Link
												</FormLabel>
												<Field
													type="text"
													name={`projects.${index}.SourceLink`}
													as={StyledInput}
													placeholder="Enter Project Source Link"
												></Field>
											</FormGroup>
											<FormGroup>
												<FormLabel>Demo Link</FormLabel>
												<Field
													type="text"
													name={`projects.${index}.DemoLink`}
													as={StyledInput}
													placeholder="Enter Project Demo Link"
												></Field>
											</FormGroup>
										</AnimatedFormItem>
									</CSSTransition>
								))}
								<ButtonGroup className="d-flex justify-content-center">
									<BackButton
										type="button"
										disabled={values.projects.length === 1}
										onClick={() => {
											values.projects.length > 1 &&
												arrayHelpers.remove(
													values.projects.length - 1
												);
										}}
									>
										Delete Project
									</BackButton>

									<NextButton
										type="button"
										onClick={() =>
											arrayHelpers.push({
												Title: "",
												Description: "",
												SourceLink: "",
												DemoLink: "",
												Highlights: [""],
											})
										}
									>
										Add Project
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

export default Projects;
