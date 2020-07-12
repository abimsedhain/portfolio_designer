import React, { useEffect, useContext } from 'react';
import useQuery from '../../utility/useQuery';
import { useLocation, useHistory } from 'react-router-dom';
import { userDispatchContext } from '../../state management/userContext';
import types from '../../state management/types';

const GoogleAuthentication = () => {
	const dispatch = useContext(userDispatchContext)
	const query = useQuery(useLocation())
	const history = useHistory()
	useEffect(() => {
		try{
		fetch(`${process.env.REACT_APP_BACKEND_URL}/authenticate/google`, {
				method: "POST",
				credentials: "include",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ code: query.get("code") })
			}).then(async data =>{
				data = await data.json()
				dispatch({type: types.SET_USER, payload: data.awt})
				history.push("/")
			})
		}catch(error){
		}finally{

				history.push("/")
		}

// eslint-disable-next-line
	}, [])
	return (<>
		Loading
	</>);
}

export default GoogleAuthentication;
