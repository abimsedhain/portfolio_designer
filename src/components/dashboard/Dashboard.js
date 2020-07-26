import React from "react";
import { useHistory } from "react-router-dom";
import AutoSizer from "react-virtualized-auto-sizer";
import {
	RadialChart,
	XYPlot,
	XAxis,
	YAxis,
	AreaSeries,
	HorizontalGridLines,
	VerticalBarSeries,
} from "react-vis";
import {
	StyledDashboardCard,
	StyledDashboardElementContainer,
	StyledDashboardGrid,
	StyledDashboardNavbar,
	StyledDashboardSidebar,
	StyledDashboardTable,
	StyledDashboardFlexbox,
} from "../styled/StyledContainers";
import {
	Header,
	PointerSpan,
	StyledDashboardLabel,
	StyledDashboardSidebarElement,
	StyledLogo,
} from "../styled/StyledText";

const Dashboard = () => {
	const history = useHistory();
	return (
		<StyledDashboardGrid>
			<StyledDashboardNavbar>
				<StyledLogo black shadow>
					<PointerSpan onClick={() => history.push("/")}>
						Capos
					</PointerSpan>
				</StyledLogo>
			</StyledDashboardNavbar>
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
			</StyledDashboardSidebar>
			<StyledDashboardElementContainer padding="2rem">
				<StyledDashboardCard white>
					<Header>1000</Header>
					<StyledDashboardFlexbox>
						<StyledDashboardLabel Small>
							{" "}
							Total Views
						</StyledDashboardLabel>
						<div style={{ height: "100px", width: "100%" }}>
							<BarGraph height={100} />
						</div>
					</StyledDashboardFlexbox>
				</StyledDashboardCard>
				<StyledDashboardCard white>
					<Header>1000</Header>
					<StyledDashboardFlexbox>
						<StyledDashboardLabel Small>
							{" "}
							Total Views
						</StyledDashboardLabel>
						<div style={{ height: "100px", width: "100%" }}>
							<BarGraph height={100} />
						</div>
					</StyledDashboardFlexbox>
				</StyledDashboardCard>
				<StyledDashboardCard white>
					<Header>1000</Header>
					<StyledDashboardFlexbox>
						<StyledDashboardLabel Small>
							{" "}
							Total Views
						</StyledDashboardLabel>
						<div style={{ height: "100px", width: "100%" }}>
							<BarGraph height={100} />
						</div>
					</StyledDashboardFlexbox>
				</StyledDashboardCard>

				<StyledDashboardCard white spanMore>
					<StyledDashboardLabel>Pretty Graph</StyledDashboardLabel>
					<PrettyGraph height={200} />
				</StyledDashboardCard>
				<StyledDashboardCard white>
					<StyledDashboardLabel>Pretty Graph</StyledDashboardLabel>
					<AnotherPrettyGraph height={150} />
				</StyledDashboardCard>

				<StyledDashboardCard white spanAll overflowX>
					<StyledDashboardLabel Small> hello</StyledDashboardLabel>
					<StyledDashboardTable overflowX>
						<thead>
							<tr>
								<th>Name</th>
								<th>Date Created</th>
								<th>Total Views</th>
								<th>Daily Views</th>
								<th>Download</th>
							</tr>
						</thead>
						<tbody>
							{[1, 2, 3, 4, 5, 3, 4, 5].map(() => (
								<TableRow />
							))}
						</tbody>
					</StyledDashboardTable>
				</StyledDashboardCard>
			</StyledDashboardElementContainer>
		</StyledDashboardGrid>
	);
};

const TableRow = () => {
	return (
		<tr>
			<td>Prime</td>
			<td>May 29</td>
			<td> 1000</td>
			<td> 100</td>
			<td>Download</td>
		</tr>
	);
};

const PrettyGraph = ({ height }) => {
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
					/>
					<XAxis />
					<YAxis />
				</XYPlot>
			)}
		</AutoSizer>
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

const BarGraph = ({ height }) => {
	return (
		<AutoSizer disableHeight>
			{({ width }) => (
				<XYPlot height={height} width={width}>
					<VerticalBarSeries
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

export default Dashboard;
