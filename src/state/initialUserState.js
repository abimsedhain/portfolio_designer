//Initial user state.
//It will store the token in local memory and will be lost on page reload.
//Thus, the token needs to be loaded on page reload.
const initialUserState = {
	token: "",
	name: "",
	exp: ""
};

export default initialUserState
