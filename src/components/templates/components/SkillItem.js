import React from "react";
import { Description, StyledBox } from "../styled/StyledComponents"
import styled from "styled-components"
import { Col } from "reactstrap"




const SkillItem = (props) => {

	return (<Col className="col-6 col-sm-4">
		<StyledBox>
			<Description White>
				{props.skill}
			</Description>

		</StyledBox>
	</Col>)
}



export default SkillItem