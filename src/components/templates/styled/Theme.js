import hexToFilter from "../../utility/hexToFilter"


const Theme = {
	Background: "white",
	Header: "Montserrat",
	Subheader: "Palanquin",
	Description: "Palanquin",
	Primary: "#ff7598",
	// To change the color of svg icon, css filter is being used.
	// And to calculate the hex value to filter value a utility function is being used.
	PrimaryFilter: hexToFilter("#ff7598"),
	Dark: "#1a1b21",
	White: "#5e5e5e",
	HeaderSize: "48px",
	SubheaderSize: "34px",
	DescriptionSize: "20px",
	SmallDescriptionSize: "16px",
	BadgeSize: "16px"
}


export default Theme