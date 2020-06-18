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

import { userContext } from "../utility/UserContext"
// For testing purpose only
// import user from "./TempUser"
// For testing purpose only


const linkIcons = [fb, github, twitter, linkedin, mail]


const StyledImg = styled.img`
	filter: ${props => props.theme.PrimaryFilter}
`


function Template() {

	const [formData, setFormData] = useContext(userContext);
	// console.log(formData)
	// console.log(hexToFilter("#000000"))
	return (<ThemeProvider theme={Theme}>
		<TemplateNavbar />
		<Container className="text-left py-5">
			<Row>
				<Col >
					<Header Bold>hi, i'm <ColoredSpan Primary>{formData.fullName}</ColoredSpan>.</Header>
				</Col>
			</Row>
			<Row>
				{/* Checks if there is any empty string and only prints non empty objects */}
				{formData.bio.trim().length > 0 ? (<Col ><Subheader White>{formData.bio.toLocaleLowerCase()}</Subheader>
				</Col>) : <></>}
			</Row>
		</Container>
		<Container className="text-left pt-5" id="education">
			<Row className="pb-5 pt-3">
				<Col>
					<Subheader Primary>education</Subheader>
				</Col>
			</Row>
			{/* Checks if there is any empty string and only prints non empty objects */}
			{formData.education.filter(edu => Object.values(edu).reduce((acc, value) => acc || (typeof (value) === "string" ? value.trim() : false), false)).map((edu, index) => (<EducationItem key={index} education={edu} />))}
		</Container>
		<Container className="text-left pt-5" id="skills">
			<Row className="pb-5 pt-3">
				<Col>
					<Subheader Primary>skills</Subheader>
				</Col>
			</Row>
			<Row>
				{formData.skills.filter(skill=>skill.trim().length>0).map((skill, index) => (<SkillItem key={index} skill={skill} />))}
			</Row>
		</Container>
		<Container className="text-left pt-5" id="experiences">
			<Row className="pb-5 pt-3">
				<Col>
					<Subheader Primary>work experiences</Subheader>
				</Col>
			</Row>
			{formData.experiences.filter(exp => Object.values(exp).reduce((acc, value) => acc || (typeof (value) === "string" ? value.trim() : false), false)).map((experience, index) => (<WorkItem key={index} experience={experience} />))}
		</Container>
		<Container className="text-left pt-5" id="projects">
			<Row className="pb-5 pt-3">
				<Col>
					<Subheader Primary>projects</Subheader>
				</Col>
			</Row>
			{formData.projects.filter(project => Object.values(project).reduce((acc, value) => acc || (typeof (value) === "string" ? value.trim() : false), false)).map((project, index) => (<ProjectItem key={index} project={project} />))}
		</Container>
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