import styled from "styled-components";

const Header = styled.h1`
	font-family: ${(props) => props.theme.Header};
	font-size: ${(props) => props.theme.HeaderSize};
	//font-size: ${(props) =>
		props.Small || props.Large
			? props.Small
				? props.theme.SubheaderSize
				: props.LargeHeaderSize
			: props.theme.HeaderSize};
	font-size: ${(props) => props.Small && props.theme.SubheaderSize};
	font-size: ${(props) => props.Large && props.theme.LargeHeaderSize};
	font-weight: ${(props) => props.theme.HeaderWeight};
	color: ${(props) => (props.White ? props.theme.White : props.theme.Dark)};
`;

const Subheader = styled.h2`
	font-family: ${(props) => props.theme.Subheader};
	font-weight: ${(props) => props.Bold && "bold"};
	font-weight: ${(props) => props.Lighter && "lighter"};
	font-size: ${(props) => props.theme.SubheaderSize};
	color: ${(props) => (props.White ? props.theme.White : props.theme.Dark)};
`;

const Description = styled.p`
	font-family: ${(props) => props.theme.Description};
	font-size: ${(props) =>
		props.Small
			? props.theme.SmallDescriptionSize
			: props.theme.DescriptionSize};
	font-weight: ${(props) => props.Bold && "bold"};
	font-weight: ${(props) => props.Lighter && "lighter"};
	color: ${(props) => (props.White ? props.theme.White : props.theme.Dark)};
`;

const LogoText = styled.h1`
	font-size: 40px;
	color: white;
	text-decoration: none;
`;

const FormTitle = styled.h1`
	font-size: ${(props) => props.theme.DescriptionSize};
	font-family: ${(props) => props.theme.Header};
	color: ${(props) => (props.White ? props.theme.White : props.theme.Dark)};
	font-weight: bold;
	margin: 0.5em 0em 1em;
`;

const FormLabel = styled.h1`
	font-size: 1rem;
	font-family: ${(props) => props.theme.Header};
	font-weight: 400;
	float: left;
	padding: 0px 10px;
	color: ${(props) => props.theme.Dark};
`;

const BoldSpan = styled.span`
	
	font-weight: bold;

	//background-image: linear-gradient(-180deg, ${(props) =>
		props.theme.Secondary} 0%, ${(props) => props.theme.Primary} 100%);
	//background-color: ${(props) => props.theme.Primary};
	//background-repeat: no-repeat;
	//background-size: 100% 0.3em;
	//background-position: 0 80%;
`;

const SmallSpan = styled.span`
	font-size: ${(props) => props.theme.FooterSize};
	color: ${(props) => props.theme.Grey};
	margin: 4px;
`;

const PointerSpan = styled.span`
	cursor: pointer;
`;

const StyledLogo = styled.h2`
	font-family: ${(props) => props.theme.Header};
	font-weight: ${(props) => props.theme.HeaderSize};
	font-size: ${(props) =>
		props.small ? props.theme.SmallDescriptionSize : props.theme.LogoSize};
	color: ${(props) => (props.white ? props.theme.White : props.theme.Dark)};
	padding: 1rem 2rem;
	text-align: left;
	margin: 0;
	background-color: ${(props) => props.white && props.theme.Primary};
	background-color: ${(props) => props.black && props.theme.White};
	position: relative;
	box-shadow: ${(props) => props.shadow && "0px 1px 5px #AAA4"};
`;

const StyledDashboardSidebarElement = styled.h5`
	font-family: ${(props) => props.theme.Header};
	font-size: ${(props) => props.theme.FooterSize};
	padding: 0.5rem 1rem;
	text-align: left;
	margin: 0.25rem 0rem 0.25rem 0.5rem;
	border-radius: 20px 0 0 20px;
	border-radius: ${props=>props.button&&"20px"};
	color: ${(props) => (props.white ? props.theme.White : props.theme.Dark)};
	background-color: ${(props) => props.white && props.theme.Primary};
	background-color: ${(props) => props.black && props.theme.White};
`;

const StyledDashboardLabel = styled.h5`
	font-size: ${(props) => props.theme.DashboardLabelSize};
	font-weight: ${(props) => props.theme.FormLabelWeight};
	color: ${(props) => props.theme.Primary};
`;

const DashboardAmount = styled(Header)`
	color: ${(props) => props.green && props.theme.Green};
	color: ${(props) => props.red && props.theme.Red};
`;

export {
	Header,
	Subheader,
	Description,
	FormTitle,
	FormLabel,
	LogoText,
	BoldSpan,
	StyledLogo,
	SmallSpan,
	PointerSpan,
	StyledDashboardSidebarElement,
	StyledDashboardLabel,
	DashboardAmount,
};
