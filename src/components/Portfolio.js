import React, { useEffect, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import useQuery from "../utility/useQuery";
import types from "../state management/types";
import { userDispatchContext } from "../state management/userContext";
import Template from "./templates/Template";

const Portfolio = () => {
	const query = useQuery(useLocation());
	const history = useHistory();
	const dispatch = useContext(userDispatchContext);

	//gets the data from the backend, sets the template state and shows the template
	useEffect(() => {
		const id = query.get("id");
		if (id) {
			fetch(`${process.env.REACT_APP_BACKEND_URL}/portfolio?id=${id}`)
				.then(async (data) => {
					if (data.status === 200) {
						data = await data.json();
						dispatch({ type: types.PREVIEW, payload: data });
					} else {
						throw new Error("404");
					}
				})
				.catch(() => {
					history.push("/404");
				});
		} else {
			history.push("/404");
		}
		//eslint-disable-next-line
	}, []);

	return <Template />;
};

export default Portfolio;
