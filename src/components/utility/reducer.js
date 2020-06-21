import types from "./types"

const reducer = (state, action) => {
	switch (action.type) {
		case types.PREVIEW:
			return isEmpty(action.payload) ? state : removeEmptyFields(action.payload)
		default:
			return state
	}
}


const isEmpty = (value) => {
	if (value === null || value === undefined) {
		return true
	} else if (typeof (value) === "string") {
		return value.trim() === ""
	} else {
		return Object.values(value).reduce((acc, value) => acc && isEmpty(value), true)
	}
}

const removeEmptyFields = (payload) => {
	let tempState = {}

	const keys = Object.keys(payload)
	const values = Object.values(payload)

	for (let index in keys) {
		if (!isEmpty(values[index])) {
			tempState[keys[index]] = values[index]
			if (keys[index] === "projects" || keys[index] === "experiences") {
				for (let indexJ in values[index]) {
					tempState[keys[index]][indexJ].Highlights = values[index][indexJ].Highlights.filter((value) => !isEmpty(value))
				}
			}
			if (keys[index] === "skills") {
				tempState[keys[index]] = values[index].filter((value) => !isEmpty(value))
			}
			if(keys[index]==="education"){
				for (let indexJ in values[index]) {
					tempState[keys[index]][indexJ].Courses = values[index][indexJ].Courses.filter((value) => !isEmpty(value))
				}
			}
		}
	}
	return tempState
}


export { removeEmptyFields, isEmpty }
export default reducer