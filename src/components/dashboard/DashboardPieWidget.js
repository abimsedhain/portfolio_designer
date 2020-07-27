import React from "react";
import { StyledDashboardLabel } from "../styled/StyledText";
import { StyledDashboardCard } from "../styled/StyledContainers";
import AutoSizer from "react-virtualized-auto-sizer";
import {
	RadialChart,
} from "react-vis";

const DashboardPieWidget = ({ label }) => {
	return (
		<StyledDashboardCard white>
			<StyledDashboardLabel>{label}</StyledDashboardLabel>
			<AnotherPrettyGraph height={200} />
		</StyledDashboardCard>
	);
};
const AnotherPrettyGraph = ({ height }) => {
	return (
		<AutoSizer disableHeight>
			{({ width }) => (
				<RadialChart
					height={height}
					width={width}
					data={[
						{ angle: 1 },
						{ angle: 3 },
						{ angle: 2 },
						{ angle: 1 },
						{ angle: 4 },
						{ angle: 2 },
					]}
				/>
			)}
		</AutoSizer>
	);
};


export default DashboardPieWidget;
