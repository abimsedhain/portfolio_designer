import React from "react";
import {StyledRow, Description, Styledli} from "../styled/StyledComponents"
import {Row, Col} from "reactstrap"
import { isEmpty } from "../../utility/reducer";


const WorkItem = (props)=>{

	return (<div className="pb-4">
		<StyledRow>
			<Col className="text-left">
				<Description Bold>{props.experience.Position}</Description>
			</Col>
			<Col className="text-right">
				<Description>{!isEmpty(props.experience.StartDate) && `${ props.experience.StartDate}`}{!isEmpty(props.experience.StartDate) && !isEmpty(props.experience.EndDate) &&` - `}{!isEmpty(props.experience.EndDate)&& `${props.experience.EndDate}`}</Description>
			</Col>
		</StyledRow>
		<StyledRow className="pb-4">
			<Col>
				<Description Primary>
					{props.experience.CompanyName}
				</Description>

			</Col>
		</StyledRow>
		{!isEmpty(props.experience.Highlights) && <Row>
			<Col>
				<ul>
					{props.experience.Highlights.map((highlight, index) => (<Styledli key={index}><Description White>{highlight}</Description></Styledli>))}
				</ul>
			</Col>
		</Row>}

	</div>)
}



export default WorkItem