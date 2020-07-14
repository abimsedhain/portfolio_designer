import React, { useEffect, useContext } from "react";
import useQuery from "../../utility/useQuery";
import { useLocation, useHistory } from "react-router-dom";
import { userDispatchContext } from "../../state management/userContext";
import types from "../../state management/types";

//Google authentication strategy component
//After users login, they get redirected to this page with a code.
//The app gets the code from the query, and sends it to the backend.
//The backend gets the code, fetches the user profile and sends back access token and refresh token.
//The refresh token gets set in html only cookie, while the access token gets set in the local memory.
const GoogleAuthentication = () => {
	const dispatch = useContext(userDispatchContext);
	const query = useQuery(useLocation());
	const history = useHistory();
	useEffect(() => {
		try {
			fetch(`${process.env.REACT_APP_BACKEND_URL}/authenticate/google`, {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ code: query.get("code") }),
			}).then(async (data) => {
				data = await data.json();
				dispatch({ type: types.SET_USER, payload: data.awt });
				history.push("/");
			});
		} catch (error) {
		} finally {
			history.push("/");
		}

		// eslint-disable-next-line
	}, []);
	return <>Loading</>;
};

export default GoogleAuthentication;
