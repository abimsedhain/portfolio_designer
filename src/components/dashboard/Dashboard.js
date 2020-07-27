import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { RadialChart } from "react-vis";
import {
	StyledDashboardCard,
	StyledDashboardElementContainer,
	StyledDashboardGrid,
	StyledDashboardTable,
} from "../styled/StyledContainers";
import { StyledDashboardLabel } from "../styled/StyledText";

import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import DashboardBarWidget from "./DashboardBarWidget";
import DashboardLineWidget from "./DashboardLineWidget";
import DashboardPieWidget from "./DashboardPieWidget";

const Dashboard = () => {
	return (
		<StyledDashboardGrid>
			<DashboardNavbar />
			<DashboardSidebar />
			<StyledDashboardElementContainer padding="2rem">
				{[
					{ label: "Total Views", amount: 80 },
					{ label: "Daily Views", amount: 30 },
					{ label: "Unique Visitors", amount: 10 },
				].map(({ label, amount }) => (
					<DashboardBarWidget label={label} amount={amount} />
				))}
				<DashboardPieWidget label="Devices" />
				<DashboardLineWidget label="View History" />

				<StyledDashboardCard white spanMore overflowX>
					<StyledDashboardLabel Small>
						Portfolios
					</StyledDashboardLabel>
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
				<StyledDashboardCard white overflowX>
					<StyledDashboardLabel Small>
						Portfolios
					</StyledDashboardLabel>
					<StyledDashboardTable overflowX>
						<thead>
							<tr>
								<th>Referring Sites</th>
								<th>Views</th>
							</tr>
						</thead>
						<tbody>
							{[1, 2, 3, 4, 5, 3, 4, 5].map(() => (
								<AnotherTableRow />
							))}
						</tbody>
					</StyledDashboardTable>
				</StyledDashboardCard>
			</StyledDashboardElementContainer>
		</StyledDashboardGrid>
	);
};

const AnotherTableRow = () => {
	return (
		<tr>
			<td>google.com/hello</td>
			<td>10</td>
		</tr>
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



export default Dashboard;
