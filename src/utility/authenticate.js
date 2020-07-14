import { useContext } from "react";
import {
	userStateContext,
	userDispatchContext,
} from "../state management/userContext";
import types from "../state management/types";

//checks if jwt has expired or not
const isTokenExpired = (exp) => {
	if (Date.now() >= exp * 1000) {
		console.log("expired");
		return true;
	}

	console.log("not expired");
	return false;
};

// fetch hook that checks for user authentication before sending the request
// if access token is expired, refreshes it automatically
// throws an error if refresh token has expired, no refresh token, or unauthorized acess
const useAuthFetch = () => {
	const { exp } = useContext(userStateContext).userState;
	const dispatch = useContext(userDispatchContext);
	let { token } = useContext(userStateContext).userState;
	return async (url, body = {}) => {
		//check if token is expired or not
		//if it is, gets a new one
		//if refresh cookie is expired
		//redirect to new login
		if (isTokenExpired(exp)) {
			let data = await fetchAwt();
			if (data.status === 200) {
				data = await data.json();
				dispatch({ type: types.SET_USER, payload: data.awt });
				token = data.awt;
			} else {
				throw new Error("Unauthorized");
			}
		}

		//checking if body has any headers.
		//If there are headers, then they are copied
		if (body.headers) {
			body.headers = {
				...body.headers,
				Authorization: `Bearer ${token}`,
			};
		} else {
			body.headers = {
				Authorization: `Bearer ${token}`,
			};
		}

		return fetch(url, body);
	};
};

// fetchs the access web token. Returns 401 unauthorized if there is no authorized cookie.
const fetchAwt = () => {
	return fetch(`${process.env.REACT_APP_BACKEND_URL}/user/refresh_token`, {
		method: "GET",
		credentials: "include",
	});
};

export { fetchAwt, useAuthFetch };
