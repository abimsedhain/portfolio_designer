import React from 'react';
import {Logobar} from './styled/StyledComponents';
import {Link} from "react-router-dom"

function AppNavbar() {

	return (
		<>
		
		<Logobar Primary fluid={true}>
			<h1><Link to="/" style={{color:'white', textDecoration:'none'}}>Capos</Link></h1>
		</Logobar>
		
		</>
        
	)
}

export default AppNavbar
