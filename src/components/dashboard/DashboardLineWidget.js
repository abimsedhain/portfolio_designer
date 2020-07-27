import React, {useContext} from "react";
import {ThemeContext} from "styled-components"
import {  StyledDashboardLabel } from "../styled/StyledText";
import {
	StyledDashboardCard,
} from "../styled/StyledContainers";
import AutoSizer from "react-virtualized-auto-sizer";
import {
	XYPlot,
	XAxis,
	YAxis,
	AreaSeries,
	HorizontalGridLines,
} from "react-vis";

const DashboardLineWidget = ({label}) => {
	return (
		<StyledDashboardCard white spanMore>
			<StyledDashboardLabel>{label}</StyledDashboardLabel>
			<PrettyGraph height={200} />
		</StyledDashboardCard>
	);
};
const PrettyGraph = ({ height }) => {
	const themeContext = useContext(ThemeContext)
	return (
		<AutoSizer disableHeight>
			{({ width }) => (
				<XYPlot height={height} width={width}>
					<HorizontalGridLines />
					<AreaSeries
						curve="curveBasis"
						data={[
							{ x: 1, y: 10 },
							{ x: 2, y: 5 },
							{ x: 4, y: 8 },
							{ x: 5, y: 12 },
							{ x: 6, y: 17 },
							{ x: 7, y: 6 },
						]}
				style={{fill: `${themeContext.Primary}35`, stroke: themeContext.Primary, strokeWidth: 3}}
					/>
					<XAxis />
					<YAxis />
				</XYPlot>
			)}
		</AutoSizer>
	);
};

export default DashboardLineWidget;
