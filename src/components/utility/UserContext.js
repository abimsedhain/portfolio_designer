import {createContext} from 'react';

const userContext = createContext();
const initialUser = {
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
			Degree: "",
			Courses:[""]
		}],
		errorMsg: ''
	};
export {userContext, initialUser };