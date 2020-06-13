import React from "react";
import Theme from "./styled/Theme";
import { ThemeProvider } from "styled-components";
import { Container, Col, Row } from "reactstrap";
import { Header, Subheader, ColoredSpan, Description } from "./styled/StyledComponents"
import EducationItem from "./components/EducationItem"
import ProjectItem from "./components/ProjectItem"
import WorkItem from "./components/WorkItem"
import SkillItem from "./components/SkillItem";






function Template() {
	const tempUser = {
		fullName: 'Susan Lee',
		email: 'SLee@gmail.com',
		bio: 'Web Developer at FANNG',

		github: '',
		linkedin: '',

		skills: ["Git", "JavaScript", "Docker", "Python", "HTML", "Databases"],

		projects: [{
			Title: "Chess Solver",
			Description: "Automatic fault localization tool for multithreaded Java programs. CFLASH utilizes a combination of noise-based code injection and a heuristic search algorithm to identify potentially faulty code sections containing concurrency bugs.",
			SourceLink: "",
			DemoLink: "",
			Highlights: ["10 users and adding more", "30% increase in productivity"],
			StartDate: "May 1990",
			EndDate: "June 1990"
		}],
		experiences: [{
			CompanyName: "Amazon",
			Position: "Web Developer",
			StartDate: "June 2018",
			EndDate: "Current",
			Highlights: ["Created the front website.", "Redesigned the color scheme."]
		}, {
			CompanyName: "Google",
			Position: "ML Engineer",
			StartDate: "June 2020",
			EndDate: "Current",
			Highlights: ["Lead the Google Brain Team", "Made Billion dollar in profit."]
		}],
		education: [{
			InstituteName: "Princton University",
			StartDate: "May 1990",
			EndDate: "Aug 1994",
			Degree: "Phd in Super Cooking",
			Courses: ["Big Data", "Machine Learning"]
		}, {
			InstituteName: "Harvard University",
			StartDate: "May 1980",
			EndDate: "Aug 1984",
			Degree: "Bsc in Super Cooking",
			Courses: ["A.I.", "Linear Algebra"]
		}],
		errorMsg: ''
	}


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