import React, { useState, useRef } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Route, useHistory } from 'react-router-dom';
import PersonalInfo from './PersonalInfo';
import Projects from './Projects';
import Review from './Review';
import SocialMedia from './SocialMedia';
import Experience from './Experience';
import Education from './Education';
import Submit from './Submit';
import LogoBar from '../LogoBar';
import Template from '../templates/Template';

function UserDetails({ match }) {
	const history = useHistory()
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		bio: '',

		github: '',
		linkedin: '',

		skills: [""],

		projects: [{
			Title: "",
			Description: "",
			SourceLink: "",
			DemoLink: "",
			Highlights: [""]
		}],
		experiences: [{
			CompanyName: "",
			Position: "",
			StartDate: "",
			EndDate: "",
			Highlights: [""]
		}],
		education: [{
			InstituteName: "",
			StartDate: "",
			EndDate: "",
			Degree: ""
		}],
		errorMsg: ''
	});
	// Creating an array for the components and react element array. then returning the selected array
	const FormComponents = useRef([PersonalInfo, SocialMedia, Projects, Experience, Education, Review, Submit])


	return (
		<>
			<LogoBar />
			<div style={{ display: 'block', height: '100%', overflow: 'hidden' }}>
				<Row>
					<Col className="mx-auto col-12 col-sm-8 col-md-6">
						<div style={{ display: 'block', height: '100%', overflow: 'scroll' }}>
							<Route path={`${match.path}/:formId?`} render={(props) => {
								const matchInner = props.match
								const id = parseInt(matchInner.params.formId) || 0
								return React.createElement(FormComponents.current[id], { formData, setFormData, nextStep: () => history.push(`${match.url}/${id + 1}`), prevStep: () => history.goBack() })
							}} />
						</div>

					</Col>

					<Col className="mx-auto col-12 col-sm-8 col-md-6">
						<div style={{ display: 'block', height: '97vh', overflow: 'scroll' }}>
							<Template />
						</div>


					</Col>
				</Row>
			</div>
		</>
	)
}

export default UserDetails;
