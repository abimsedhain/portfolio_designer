import React from "react";
import {StyledRow, Description, Styledli} from "../styled/StyledComponents"
import {Row, Col} from "reactstrap"


const WorkItem = (props)=>{

	return (<div className="pb-4">
		<StyledRow>
			<Col className="text-left">
				<Description Bold>{props.experience.Position}</Description>
			</Col>
			<Col className="text-right">
				<Description>{`${props.experience.StartDate} - ${props.experience.EndDate}`}</Description>
			</Col>
		</StyledRow>
		<StyledRow className="pb-4">
			<Col>
				<Description Primary>
					{props.experience.CompanyName}
				</Description>

			</Col>
		</StyledRow>
		<Row>
			<Col>
				<ul>
					{props.experience.Highlights.map((highlight, index) => (<Styledli key={index}><Description White>{highlight}</Description></Styledli>))}
				</ul>
			</Col>
		</Row>

	</div>)
}



export default WorkItem