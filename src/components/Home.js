import React, { useState, useContext } from 'react';
import {userStateContext} from "../state management/userContext"
import { Row, Col} from 'reactstrap';
import {Link} from "react-router-dom"
import AppNavbar from "./AppNavbar"
import mainlogo from '../assets/logo2.svg';
import {Header, Description, HomepageButton, FullSizeContainer} from "./styled/StyledComponents"

function Home() {

	const userState = useContext(userStateContext).userState
	const [showLoginCard, setShowLoginCard] = useState(false)	
    return (
        <>
        <AppNavbar setShowLoginCard={setShowLoginCard}/>
		<FullSizeContainer>
			<Row className="py-5">
				<Col className="text-left col-12 col-sm-12 col-md-6 col-lg-7 order-md-0 order-sm-1 order-xs-1 order-1 pt-5 pt-md-0">
					<Header>Capos</Header>
				<Description id="LoginCard">Build a simple and elegant Portfolio Website under 10 minutes.</Description>
		{showLoginCard?<>

		<HomepageButton White Small Block onClick={()=>window.location.replace(process.env.REACT_APP_GOOGLE_AUTH_URL)}>Login with Google</HomepageButton>
		<HomepageButton White Small Block>Login with Facebook</HomepageButton>
			</>
			:
			<>
		<Link to="/form">
			
				<HomepageButton White Small Block>Let's Build a Portfolio</HomepageButton>
		</Link>
			{userState.name===""?
				<HomepageButton White Small Block onClick={()=>{
				setShowLoginCard(true)
				}}>Login/Signup</HomepageButton>
				:
				<HomepageButton White Small Block>Go to Dashboard</HomepageButton>
		}
		</>}
				</Col>
				<Col className="d-none d-sm-none d-md-block">
				<img src={mainlogo} alt="logo" className="img-fluid">
				</img>
				</Col>
			</Row>
		</FullSizeContainer>
        </>
    )
}

export default Home

