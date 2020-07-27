import React from "react";
import { useHistory } from "react-router-dom";
import { PointerSpan, StyledLogo } from "../styled/StyledText";
import { StyledDashboardNavbar } from "../styled/StyledContainers";



const DashboardNavbar = () => {
	const history = useHistory();
	return (
		<StyledDashboardNavbar>
			<StyledLogo black shadow>
				<PointerSpan onClick={() => history.push("/")}>
					Capos
				</PointerSpan>
			</StyledLogo>
		</StyledDashboardNavbar>
	);
};

export default DashboardNavbar;
