const tempUser = {
	fullName: 'Susan Lee',
	email: 'SLee@gmail.com',
	bio: 'Web Developer at FANNG',

	github: 'github.com/SLee',
	linkedin: '',

	skills: ["Git", "JavaScript", "Docker", "Python", "HTML", "Databases", "Go"],

	projects: [{
		Title: "Halting Machine",
		Description: "A machine that answers if an algorithm will halt or not. Created to answer the age old question of reality.",
		SourceLink: "github.com/slee/haltingmachine",
		DemoLink: "slee.github.io",
		Highlights: ["Solves P vs NP problem.", "Won the Turning Award.", "Used Java, Python, C, Assembly, and every language known to man."],
		StartDate: "May 2020",
		EndDate: "June 2020"
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
		StartDate: "May 2015",
		EndDate: "Aug 2019",
		Degree: "Phd in Computer Science",
		Courses: ["Big Data", "Machine Learning", "Operating Systems", "Distributed Systems"]
	}, {
		InstituteName: "Harvard University",
		StartDate: "May 2010",
		EndDate: "Aug 2014",
		Degree: "Bsc in Computer Science",
		Courses: ["A.I.", "Linear Algebra"]
	}],
}


export default tempUser