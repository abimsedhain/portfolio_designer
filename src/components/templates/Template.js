import React from "react";
import Theme from "./styled/Theme";
import { ThemeProvider } from "styled-components";
import { Container, Col, Row } from "reactstrap";
import { Header, Subheader, ColoredSpan, Description } from "./styled/StyledComponents"
import EducationItem from "./components/EducationItem"
import ProjectItem from "./components/ProjectItem"
import WorkItem from "./components/WorkItem"
import SkillItem from "./components/SkillItem";


// For testing purpose only
import tempUser from "./TempUser"
// For testing purpose only



function Template() {

	return (<ThemeProvider theme={Theme}>
		<Container className="text-left py-5">
			<Row>
				<Col >
					<Header Bold>hi, i'm <ColoredSpan Primary>{tempUser.fullName}</ColoredSpan>.</Header>
				</Col>
			</Row>
			<Row>
				<Col ><Subheader White>{tempUser.bio.toLocaleLowerCase()}</Subheader>
				</Col>
			</Row>
		</Container>
		<Container className="text-left pt-5">
			<Row className="pb-5 pt-3">
				<Col>
					<Subheader Primary>education</Subheader>
				</Col>
			</Row>
			{tempUser.education.map((edu, index) => (<EducationItem key={index} education={edu} />))}
		</Container>
		<Container className="text-left pt-5">
			<Row className="pb-5 pt-3">
				<Col>
					<Subheader Primary>skills</Subheader>
				</Col>
			</Row>
			<Row>
				{tempUser.skills.map((skill, index) => (<SkillItem key={index} skill={skill} />))}
			</Row>
		</Container>
		<Container className="text-left pt-5">
			<Row className="pb-5 pt-3">
				<Col>
					<Subheader Primary>work experiences</Subheader>
				</Col>
			</Row>
			{tempUser.experiences.map((experience, index) => (<WorkItem key={index} experience={experience} />))}
		</Container>
		<Container className="text-left pt-5">
			<Row className="pb-5 pt-3">
				<Col>
					<Subheader Primary>projects</Subheader>
				</Col>
			</Row>
			{tempUser.projects.map((project, index) => (<ProjectItem key={index} project={project} />))}
		</Container>
		<Container className="pt-5">
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