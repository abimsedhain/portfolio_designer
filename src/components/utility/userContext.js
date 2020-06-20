import {createContext} from 'react';

const userStateContext = createContext();
const userDispatchContext = createContext();
const initialUser = {
		fullName: 'asim sedhain',
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
export {userStateContext, userDispatchContext, initialUser };