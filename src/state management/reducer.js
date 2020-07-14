import types from "./types";
import JwtDecode from "jwt-decode";
import initialUserState from "../state/initialUserState";

const reducer = (state, action) => {
	switch (action.type) {
		case types.PREVIEW:
			//cleans the input, removes any empty string and
			//sets the template state
			return isEmpty(action.payload)
				? state
				: {
						...state,
						templateState: removeEmptyFields(action.payload),
				  };
		case types.SET_USER:
			//decodes the JWT and sets the user
			//if there is an error, returns the state
			try {
				const user = JwtDecode(action.payload);
				return {
					...state,
					userState: {
						name: user.name,
						token: action.payload,
						exp: user.exp,
					},
				};
			} catch (error) {
				return state;
			}

		//removes the user
		case types.REMOVE_USER:
			return { ...state, userState: initialUserState };
		default:
			return state;
	}
};

//checks if object is null or has only empty strings
const isEmpty = (value) => {
	if (value === null || value === undefined) {
		return true;
	} else if (typeof value === "string") {
		return value.trim() === "";
	} else {
		return Object.values(value).reduce(
			(acc, value) => acc && isEmpty(value),
			true
		);
	}
};

//removes all the fields in an object that are empty or have empty strings
const removeEmptyFields = (payload) => {
	let tempState = {};

	const keys = Object.keys(payload);
	const values = Object.values(payload);

	for (let index in keys) {
		if (!isEmpty(values[index])) {
			tempState[keys[index]] = values[index];
			if (keys[index] === "projects" || keys[index] === "experiences") {
				for (let indexJ in values[index]) {
					tempState[keys[index]][indexJ].Highlights = values[index][
						indexJ
					].Highlights.filter((value) => !isEmpty(value));
				}
			}
			if (keys[index] === "skills") {
				tempState[keys[index]] = values[index].filter(
					(value) => !isEmpty(value)
				);
			}
			if (keys[index] === "education") {
				for (let indexJ in values[index]) {
					tempState[keys[index]][indexJ].Courses = values[index][
						indexJ
					].Courses.filter((value) => !isEmpty(value));
				}
			}
		}
	}
	return tempState;
};

export { removeEmptyFields, isEmpty };
export default reducer;
