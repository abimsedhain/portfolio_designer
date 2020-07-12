import React, { useRef, useContext, useState} from 'react';
import { Row, Col } from "reactstrap";
import { Route, useHistory } from 'react-router-dom';
import PersonalInfo from './PersonalInfo';
import Projects from './Projects';
import Review from './Review';
import SocialMedia from './SocialMedia';
import Experience from './Experience';
import Education from './Education';
import Submit from './Submit';
import AppNavbar from "../AppNavbar"
import Template from '../templates/Template';
import FormFooter from "../FormFooter";

import { FormContainer } from '../styled/StyledComponents';

import initialFormData from './initialFormState';
import { userDispatchContext, userStateContext } from '../../state management/userContext';
import types from "../../state management/types";


function UserDetails({ match }) {
	const history = useHistory()
	const [formData, setFormData] = useState(initialFormData);
	const dispatch = useContext(userDispatchContext)
	const formRef = useRef()
	const [formId, setFormId] = useState(0)
	const formState = useContext(userStateContext).templateState
	const [portfolioId, setPortfolioId] = useState("")


	// Creating an array for the components and react element array. then returning the selected array
	const FormComponents = useRef([PersonalInfo, Education, SocialMedia, Experience, Projects, Review, Submit])


	return (
		<>
			<AppNavbar />
			<FormContainer fluid={true} >
				<Row>
					<Col className="mx-auto col-12 col-sm-12 col-md-6 border-right border-secondary">
						<FormContainer >
							<Route path={`${match.path}/:formId?`} render={(props) => {
								const matchInner = props.match
								const id = parseInt(matchInner.params.formId) || 0
								setFormId(id)
								return React.createElement(FormComponents.current[id], {formRef, formData, portfolioId})
							}} />
						</FormContainer>
					</Col>

					<Col className="mx-auto d-none d-sm-none d-md-block d-lg-block col-12 col-sm-8 col-md-6">
						<FormContainer>
							<Template />
						</FormContainer>
					</Col>
				</Row>
			</FormContainer>
			<FormFooter next={async() => {
				if (formRef.current) {
					setFormData(formRef.current.values)
					dispatch({type: types.PREVIEW, payload: formRef.current.values})
					history.push(`${match.path}/${formId+1}`)
					console.log(FormComponents.current.length)
					if(formId===FormComponents.current.length-2){
						let data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/portfolio`, {method: "POST", body: JSON.stringify(formState)})
						data = data.status===200 && await data.json()
						setPortfolioId(data.id)
						console.log(portfolioId)
					}
				}
			}} prev={history.goBack}/>
		</>
	)
}

export default UserDetails;
