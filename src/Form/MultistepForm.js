import React, { useState, useRef } from 'react'
import PersonalInfo from './PersonalInfo';
import Projects from './Projects';
import Review from './Review';
import SocialMedia from './SocialMedia';
import Experience from './Experience';
import Education from './Education';
import Submit from './Submit';

export const MultistepForm = () => {
	const [step, setStep] = useState(0);

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
		experiences:[{
			CompanyName: "",
			Position: "",
			StartDate: "",
			EndDate: "",
			Highlights: [""]
		}],
		education:[{
			InstituteName:"",
			StartDate: "",
			EndDate: "",
			Degree: ""
		}],
		errorMsg: ''
	});
	const nextStep = () => setStep(step => step + 1);
	const prevStep = () => setStep(step => step - 1);


	// Creating an array for the components and react element array. then returning the selected array
	const FormComponents = useRef([PersonalInfo, SocialMedia, Projects, Experience, Education, Review, Submit].map((comp) => {
		return React.createElement(comp, { formData, setFormData, nextStep, prevStep }, null)
	}))

	return FormComponents.current[step]
}

export default MultistepForm;
