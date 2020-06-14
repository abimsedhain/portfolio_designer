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


export default tempUser