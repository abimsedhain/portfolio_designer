import React, { useEffect, useContext } from 'react';
import useQuery from '../utility/userQuery';
import { useLocation, useHistory } from 'react-router-dom';
import {userContext} from "../utility/userContext"

const GoogleAuthentication = (match) => {
	const [user, setUser] = useContext(userContext)
	const query = useQuery(useLocation())
	const history = useHistory()
	useEffect(() => {
		fetch("http://localhost:5000/authenticate/google", {
				method: "POST",
				credentials: "include",
				headers: {
					'Content-Type': 'application/json'
					// 'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: JSON.stringify({ code: query.get("code") })
			}).then(async data =>{
				data = await data.json()
				console.log(data)
				setUser(data.awt)
				history.push("/")
			})



	}, [])
	return (<>
		Loading
	</>);
}

export default GoogleAuthentication;