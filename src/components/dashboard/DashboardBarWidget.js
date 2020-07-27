import React, {useContext} from "react";
import {ThemeContext} from "styled-components"
import { DashboardAmount, StyledDashboardLabel } from "../styled/StyledText";
import {
	StyledDashboardCard,
	StyledDashboardFlexbox,
	StyledVisContainer
} from "../styled/StyledContainers";
import AutoSizer from "react-virtualized-auto-sizer";
import { XYPlot, VerticalBarSeries } from "react-vis";

const DashboardBarWidget = ({amount, label}) => {
	return (
		<StyledDashboardCard white>
			<DashboardAmount green>{amount}</DashboardAmount>
			<StyledDashboardFlexbox>
				<StyledDashboardLabel Small>{label}</StyledDashboardLabel>
		<StyledVisContainer height="90px">
					<BarGraph height={120} />
		</StyledVisContainer>
			</StyledDashboardFlexbox>
		</StyledDashboardCard>
	);
};




const BarGraph = ({ height }) => {
	const themeContext = useContext(ThemeContext)
	return (
		<AutoSizer disableHeight>
			{({ width }) => (
				<XYPlot height={height} width={width} >
					<VerticalBarSeries style={{fill:themeContext.Primary, stroke:themeContext.Primary}}
						data={[
							{ x: 1, y: 10 },
							{ x: 2, y: 5 },
							{ x: 4, y: 8 },
							{ x: 5, y: 12 },
							{ x: 6, y: 17 },
							{ x: 7, y: 6 },
						]}
					/>
				</XYPlot>
			)}
		</AutoSizer>
	);
};
export default DashboardBarWidget;
