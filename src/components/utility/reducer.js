import types from "./types"

const reducer = (state, action) => {
	switch (action.type) {
		case types.PREVIEW:
			return isEmpty(action.payload)? state: removeEmptyFields(action.payload)
		default:
			return state
	}
}


const isEmpty = (value) => {
	if (typeof (value) === "string") {
		return value.trim() === ""
	} else {
		return Object.values(value).reduce((acc, value) => acc && isEmpty(value), true)
	}
}

const removeEmptyFields = (payload)=>{
	let tempState = {}

	const keys = Object.keys(payload)
	const values = Object.values(payload)

	for(let index in keys){
		if(!isEmpty(values[index])){
			tempState[keys[index]] = values[index]
		}
	}
	return tempState
}


export { removeEmptyFields, isEmpty }
export default reducer