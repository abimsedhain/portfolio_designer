import React from "react";
import { StyledDashboardSidebarElement } from "../styled/StyledText";
import { StyledDashboardSidebar } from "../styled/StyledContainers";

const DashboardSidebar = () => {
	return (
		<StyledDashboardSidebar shadow>
			<StyledDashboardSidebarElement white small>
				Dashboard
			</StyledDashboardSidebarElement>
			<StyledDashboardSidebarElement small>
				Analytics
			</StyledDashboardSidebarElement>
			<StyledDashboardSidebarElement small>
				Settings
			</StyledDashboardSidebarElement>
			<StyledDashboardSidebarElement white button small>
				Make New
			</StyledDashboardSidebarElement>
		</StyledDashboardSidebar>
	);
};

export default DashboardSidebar;
