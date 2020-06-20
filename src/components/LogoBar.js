import React from 'react';
import {Logobar} from './styled/StyledComponents';

function AppNavbar() {

	return (
		<>
		<Logobar Primary fluid={true}>
			<h1><a href="/" style={{color:'white', textDecoration:'none'}}>Capos</a></h1>
		</Logobar>
		
		</>
        
	)
}

export default AppNavbar
