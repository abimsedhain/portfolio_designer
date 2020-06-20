import React from "react";
import { StyledRow, Description, Styleda, Styledli } from "../styled/StyledComponents"
import { Row, Col } from "reactstrap"
import { isEmpty } from "../../utility/reducer";


const ProjectItem = (props) => {
	return (<div className="pb-4">
		<StyledRow>
			<Col className="text-left">
				<Description Bold>{props.project.Title}</Description>
			</Col>
			<Col className="text-right">
				<Description>{!isEmpty(props.project.StartDate) && `${ props.project.StartDate}`}{!isEmpty(props.project.StartDate) && !isEmpty(props.project.EndDate) &&` - `}{!isEmpty(props.project.EndDate)&& `${props.project.EndDate}`}</Description>
			</Col>
		</StyledRow>
		<StyledRow>
			<Col>
				<Description Small Primary>
					{!isEmpty(props.project.DemoLink) && <Styleda href={props.project.DemoLink}>View Live</Styleda>}
					{!isEmpty(props.project.SourceLink) && <Styleda href={props.project.SourceLink}> View Source</Styleda>}
				</Description>

			</Col>
		</StyledRow>
		{!isEmpty(props.project.Description) && <Row className="pt-2">
			<Col>
				<Description White>
					{props.project.Description}
				</Description>
			</Col>
		</Row>}
		{!isEmpty(props.project.Highlights) &&<Row>
			<Col>
				<ul>
					{props.project.Highlights.map((highlight, index) => (<Styledli key={index}><Description White>{highlight}</Description></Styledli>))}
				</ul>
			</Col>
		</Row>}

	</div>)
}

export default ProjectItem