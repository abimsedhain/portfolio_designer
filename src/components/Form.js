import React, { useRef, useContext, useState } from "react";
import {CSSTransition} from "react-transition-group"
import { StyledLogo } from "./styled/StyledText";
import { FooterButton } from "./styled/StyledComponents";
import {
	StyledFormFooterContainer,
	StyledFormGrid,
	StyledFormGridElement,
	StyledFormFooter,
} from "./styled/StyledContainers";
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


import styled from "styled-components";

const StyledFormInputContainer = styled.div`
	background-color: ${props=> props.theme.White};
	padding: 1em;
	border: 1px solid;
	border-color: ${props=>props.theme.Grey};

	border-radius: 10px;

`

const Form = ({ match }) => {
	const history = useHistory();
	const [formData, setFormData] = useState(initialFormData);
	const dispatch = useContext(userDispatchContext);
	const formRef = useRef();
	const [formId, setFormId] = useState(0);
	const formState = useContext(userStateContext).templateState;
	const [portfolioId, setPortfolioId] = useState("");
	const [isBeingPreviewed, setIsBeingPreviewed] = useState(false);

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
		<>
			<StyledFormGrid isBeingPreviewed={isBeingPreviewed}>
				<StyledFormGridElement navbar primary>
					<StyledLogo Black shadow>
						<span onClick={() => history.push("/")}>Capos</span>
					</StyledLogo>
				</StyledFormGridElement>
				<CSSTransition in={!isBeingPreviewed} timeout={500} classNames="form-section">
				<StyledFormGridElement
					overflow="scroll"
					isBeingPreviewed={isBeingPreviewed}	
					padding="1em"
					input
				>
		
		<StyledFormInputContainer>
					<Route
						path={`${match.path}/:formId?`}
						render={(props) => {
							const matchInner = props.match;
							const id = parseInt(matchInner.params.formId) || 0;
							setFormId(id);
							return React.createElement(
								FormComponents.current[id],
								{
									formRef,
									formData,
									portfolioId,
								}
							);
						}}
					/>
		</StyledFormInputContainer>
				</StyledFormGridElement>
		</CSSTransition>

				<CSSTransition in={isBeingPreviewed} timeout={500} classNames="template-section">
				<StyledFormGridElement
					overflow="scroll"
					isBeingPreviewed={!isBeingPreviewed}	
					preview
				>
					<Template />
				</StyledFormGridElement>
		</CSSTransition>
			</StyledFormGrid>
			<StyledFormFooterContainer>
				<StyledFormFooter>
					<FooterButton
						Secondary
						Small
						onClick={() => {
							history.goBack();
							setIsBeingPreviewed(false);
						}}
					>
						← Prev
					</FooterButton>
					<FooterButton
						Secondary
						Small
						mdDisplay="none"
						smDisplay="inline-block"
						onClick={() => {
							!isBeingPreviewed &&
								dispatch({
									type: types.PREVIEW,
									payload: formRef.current.values,
								});

							setIsBeingPreviewed(!isBeingPreviewed);
						}}
					>
						{isBeingPreviewed ? <>Go Back</> : <>Preview</>}
					</FooterButton>
					<FooterButton
						Secondary
						Small
						onClick={() => {
							onNext();
							setIsBeingPreviewed(false);
						}}
					>
						Next →
					</FooterButton>
				</StyledFormFooter>
			</StyledFormFooterContainer>
		</>
	);
};

export default Form;
