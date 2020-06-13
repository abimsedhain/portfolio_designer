import React from "react";
import {StyledRow, Description, StyledBadge} from "../styled/StyledComponents"
import {Row, Col} from "reactstrap"

const EducationItem = (props) => {
	return (<div className="pb-4">
		<StyledRow>
			<Col className="text-left">
				<Description Bold>{props.education.Degree}</Description>
			</Col>
			<Col className="text-right">
				<Description>{`${props.education.StartDate} - ${props.education.EndDate}`}</Description>
			</Col>
		</StyledRow>
		<StyledRow>
			<Col>
				<Description Primary>
					{props.education.InstituteName}
				</Description>
			</Col>
		</StyledRow>
		<Row className="py-2">
			<Col>
				{props.education.Courses.map((course, index) => (<StyledBadge key={index}>{course}</StyledBadge>))}
			</Col>
		</Row>
	</div>)
}


export default EducationItem