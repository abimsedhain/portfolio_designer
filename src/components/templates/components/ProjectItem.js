import React from "react";
import {StyledRow, Description, Styleda, Styledli} from "../styled/StyledComponents"
import {Row, Col} from "reactstrap"


const ProjectItem = (props) => {
	return (<div className="pb-4">
		<StyledRow>
			<Col className="text-left">
				<Description Bold>{props.project.Title}</Description>
			</Col>
			<Col className="text-right">
				<Description>{`${props.project.StartDate} - ${props.project.EndDate}`}</Description>
			</Col>
		</StyledRow>
		<StyledRow>
			<Col>
				<Description Small Primary>
					<Styleda href={props.project.StartDate}>View Live</Styleda>
					<Styleda href={props.project.EndDate}> View Source</Styleda>
				</Description>

			</Col>
		</StyledRow>
		<Row className="pt-2">
			<Col>
				<Description White>
					{props.project.Description}
				</Description>
			</Col>
		</Row>
		<Row>
			<Col>
				<ul>
					{props.project.Highlights.map((highlight, index) => (<Styledli key={index}><Description White>{highlight}</Description></Styledli>))}
				</ul>
			</Col>
		</Row>

	</div>)
}

export default ProjectItem