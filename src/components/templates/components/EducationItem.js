import React from "react";
import {StyledRow, Description, StyledBadge} from "../styled/StyledComponents"
import {Row, Col} from "reactstrap"
import { isEmpty } from "../../../state management/reducer";

const EducationItem = (props) => {
	return (<div className="pb-4">
		<StyledRow>
			<Col className="text-left">
				<Description Bold>{props.education.Degree}</Description>
			</Col>
			<Col className="text-right">
<Description>{!isEmpty(props.education.StartDate) && `${ props.education.StartDate}`}{!isEmpty(props.education.StartDate) && !isEmpty(props.education.EndDate) &&` - `}{!isEmpty(props.education.EndDate)&& `${props.education.EndDate}`}</Description>
			</Col>
		</StyledRow>
		<StyledRow>
			<Col>
				<Description Primary>
					{props.education.InstituteName}
				</Description>
			</Col>
		</StyledRow>
		{!isEmpty(props.education.Courses) && <Row className="py-2">
			<Col>
				{props.education.Courses.map((course, index) => (<StyledBadge key={index}>{course}</StyledBadge>))}
			</Col>
		</Row>}
	</div>)
}


export default EducationItem