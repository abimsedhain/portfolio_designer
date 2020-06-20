import React, { useContext } from "react";
import Theme from "./styled/Theme";
import styled, { ThemeProvider } from "styled-components";
import { Container, Col, Row } from "reactstrap";
import { Header, Subheader, ColoredSpan, Description } from "./styled/StyledComponents"
import EducationItem from "./components/EducationItem"
import ProjectItem from "./components/ProjectItem"
import WorkItem from "./components/WorkItem"
import SkillItem from "./components/SkillItem";
import TemplateNavbar from "./components/TemplateNavbar"

import fb from '../../assets/facebook.svg'
import github from '../../assets/github.svg'
import twitter from '../../assets/twit.svg'
import linkedin from '../../assets/linkedin.svg'
import mail from '../../assets/email.svg'

// import { userContext } from "../utility/userContext"

import { userStateContext } from "../utility/userContext";

const linkIcons = [fb, github, twitter, linkedin, mail]


const StyledImg = styled.img`
	filter: ${props => props.theme.PrimaryFilter}
`


function Template() {

	// Current problem: the data gets dispatched before it is updated
	// const [formData] = useContext(userContext);
	const userData = useContext(userStateContext)
	console.log(userData)
	// const userData = user

	// console.log(formData)
	// console.log(hexToFilter("#000000"))
	return (<ThemeProvider theme={Theme}>
		<TemplateNavbar />
		<Container className="text-left py-5">
			{userData.fullName && (<Row>
				<Col >
					<Header Bold>hi, i'm <ColoredSpan Primary>{userData.fullName}</ColoredSpan>.</Header>
				</Col>
			</Row>)}

			{ userData.bio &&(<Row>
				<Col ><Subheader White>{userData.bio.toLocaleLowerCase()}</Subheader>
				</Col>
			</Row>)}

		</Container>
		{userData.education &&<Container className="text-left pt-5" id="education">
			<Row className="pb-5 pt-3">
				<Col>
					<Subheader Primary>education</Subheader>
				</Col>
			</Row>
			{userData.education.map((edu, index) => (<EducationItem key={index} education={edu} />))}
		</Container>}

		{userData.skills && <Container className="text-left pt-5" id="skills">
			<Row className="pb-5 pt-3">
				<Col>
					<Subheader Primary>skills</Subheader>
				</Col>
			</Row>
			<Row>
				{userData.skills.map((skill, index) => (<SkillItem key={index} skill={skill} />))}
			</Row>
		</Container>}
		{userData.experiences &&<Container className="text-left pt-5" id="experiences">
			<Row className="pb-5 pt-3">
				<Col>
					<Subheader Primary>work experiences</Subheader>
				</Col>
			</Row>
			{userData.experiences.map((experience, index) => (<WorkItem key={index} experience={experience} />))}
		</Container>}
		{userData.projects && <Container className="text-left pt-5" id="projects">
			<Row className="pb-5 pt-3">
				<Col>
					<Subheader Primary>projects</Subheader>
				</Col>
			</Row>
			{userData.projects.map((project, index) => (<ProjectItem key={index} project={project} />))}
		</Container>}
		<Container className="pt-5" id="contact">
			<Row className="justify-content-center pt-5">
				{linkIcons.map((icon, index) => (<Col className="col-2 col-sm-1" key={index}>
					<StyledImg className="img-fluid" height="100%" width="100%" src={icon} alt={`icon_${index}`} />
				</Col>))}
			</Row>

			<Row className="pt-5">
				<Col>
					<Description White>
						&copy; 2020 Capos
				</Description>
				</Col>
			</Row>
		</Container>
	</ThemeProvider>)
}

export default Template;