import React, { useRef, useContext, useState } from "react";
import { StyledLogo } from "./styled/StyledText";
import { FooterButton } from "./styled/StyledComponents";
import {StyledGrid, StyledGridElement, StyledFormFooter} from "./styled/StyledContainers";
import { Route, useHistory } from "react-router-dom";
import PersonalInfo from "./form/PersonalInfo";
import Projects from "./form/Projects";
import Review from "./form/Review";
import SocialMedia from "./form/SocialMedia";
import Experience from "./form/Experience";
import Education from "./form/Education";
import Submit from "./form/Submit";
import Template from "./templates/Template";


import initialFormData from "./form/initialFormState";
import {
	userDispatchContext,
	userStateContext,
} from "../state management/userContext";
import types from "../state management/types";







const Form = ({ match }) => {
	const history = useHistory();
	const [formData, setFormData] = useState(initialFormData);
	const dispatch = useContext(userDispatchContext);
	const formRef = useRef();
	const [formId, setFormId] = useState(0);
	const formState = useContext(userStateContext).templateState;
	const [portfolioId, setPortfolioId] = useState("");

	
	const onNext = async () => {
		if (formRef.current) {
			setFormData(formRef.current.values);
			dispatch({
				type: types.PREVIEW,
				payload: formRef.current.values,
			});
			history.push(`${match.path}/${formId + 1}`);
			if (formId === FormComponents.current.length - 2) {
				let data = await fetch(
					`${process.env.REACT_APP_BACKEND_URL}/portfolio`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(formState),
					}
				);
				if (data.status === 200) {
					data = await data.json();
					setPortfolioId(data.id);
				}
			}
		}
	};
	// Creating an array for the components and react element array. then returning the selected array
	const FormComponents = useRef([
		PersonalInfo,
		Education,
		SocialMedia,
		Experience,
		Projects,
		Review,
		Submit,
	]);

	return (
		<StyledGrid>
			<StyledGridElement columnSpan={2}>
				<StyledLogo>Capos</StyledLogo>
			</StyledGridElement>
			<StyledGridElement overflow="scroll" smSize="2" padding="2em">
				<Route
					path={`${match.path}/:formId?`}
					render={(props) => {
						const matchInner = props.match;
						const id = parseInt(matchInner.params.formId) || 0;
						setFormId(id);
						return React.createElement(FormComponents.current[id], {
							formRef,
							formData,
							portfolioId,
						});
					}}
				/>
			</StyledGridElement>
			<StyledGridElement overflow="scroll" smDisplay="none">
				<Template />
			</StyledGridElement>
			<StyledFormFooter columnSpan={2}>
				<FooterButton White Small onClick={history.goBack}>
					Prev
				</FooterButton>
				<FooterButton White Small onClick={onNext}>
					Next
				</FooterButton>
			</StyledFormFooter>
		</StyledGrid>
	);
};

export default Form;
