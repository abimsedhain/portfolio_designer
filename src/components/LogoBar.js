import React from 'react';
import { Logobar, LogoText } from './styled/StyledComponents';
import { Link } from "react-router-dom"

function AppNavbar() {

	return (
		<>
			<Logobar Primary fluid={true}>
				<Link to="/">
					<LogoText>
						Capos
					</LogoText>
				</Link>
			</Logobar>
		</>
	)
}

export default AppNavbar
