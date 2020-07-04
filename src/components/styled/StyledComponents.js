import styled from "styled-components";
import { Container } from "reactstrap";

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
	color: ${(props) => (props.White ? props.theme.White : props.theme.Dark)}
`;

const Logo = styled.h2`
	font-family: ${(props) => props.theme.Header};
	font-weight: ${(props) => props.theme.HeaderSize};
	font-size: ${(props) =>
		props.Small ? props.theme.SmallDescriptionSize : props.theme.LogoSize};
	color: ${(props) => (props.White ? props.theme.White : props.theme.Dark)};
`;

const Subheader = styled.h2`
	font-family: ${(props) => props.theme.Subheader};
	font-size: ${(props) => props.theme.SubheaderSize};
	color: ${(props) => (props.White ? props.theme.White : props.theme.Dark)};
`;

const Description = styled.p`
	font-family: ${(props) => props.theme.Description};
	font-size: ${(props) =>
		props.Small
			? props.theme.SmallDescriptionSize
			: props.theme.DescriptionSize};
	color: ${(props) => (props.White ? props.theme.White : props.theme.Dark)};
`;

const Button = styled.button`
	font-size: ${(props) => props.theme.ButtonSize};
	font-size: ${(props) => props.Small && props.theme.SmallButtonSize};
	font-size: ${(props) => props.Large && props.theme.LargeButtonSize};
	display: inline-block;
	color: ${(props) => (props.White ? props.theme.White : props.theme.Dark)};
	display: ${(props) => props.Block && "block"};
	margin: 1em;
	padding: 0.25em 1em;
	border: 0px solid;
	border-radius: 50px;
	background-color: ${(props) => props.theme.Primary};
	background-color: ${(props) => props.Secondary && props.theme.Secondary};
	outline: none;
	text-align: center;
	&:focus {
		outline: none;
		box-shadow: 0 0 0pt 1pt ${(props) => props.theme.Special};
	}
	&:hover {
		background-color: ${(props) => props.theme.Special};
		color: ${(props) => props.theme.White};
	}
`;

const FixedSizeButton = styled(Button)`
	height: 2em;
	width: 12em;
`;

const HomepageButton = styled(FixedSizeButton)`
	margin: 1em auto;
	@media (min-width: 768px) {
		margin: 1em;
	}
`;

const GoogleSignInButton = styled(HomepageButton)`
	background: #db4437;
`;
const FackbookSignInButton = styled(HomepageButton)`
	background: #3b5998;
`;

const HomeContainer = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const FullSizeContainer = styled(Container)`
	min-height: 85vh; /* These two lines are counted as one :-)       */
	display: flex;
	align-items: center;
`;
const NavbarButton = styled(Button)`
	margin: 0em;
	font-size: 1.2rem;
	@media (min-width: 768px) {
		margin: 1em;
		margin-top: 5px;
		font-size: 1.1rem;
	}
`;

const LoginBtn = styled(Button)`
	border: 1px solid #fff;
	background-color: ${(props) => props.theme.Primary};
	color: white;

	&:hover {
		background-color: ${(props) => props.theme.Special};
	}
`;

const NextButton = styled(Button)`
	font-size: ${(props) => props.theme.SmallButtonSize};
	border: 1px solid;
	border-color: ${(props) => props.theme.NextButton};
	background-color: ${(props) => props.theme.White};
	color: ${(props) => props.theme.NextButton};
	border-radius: 4px;

	&:hover {
		background-color: ${(props) => props.theme.NextButton};
		color: ${(props) => props.theme.White};
	}
	&:focus {
		box-shadow: 0 0 0pt 1pt ${(props) => props.theme.NextButton};
	}
`;

const BackButton = styled(Button)`
	font-size: ${(props) => props.theme.SmallButtonSize};
	border: 1px solid;
	border-color: ${(props) => props.theme.BackButton};
	background-color: ${(props) => props.theme.White};
	color: ${(props) => props.theme.BackButton};
	border-radius: 4px;

	&:hover {
		background-color: ${(props) => props.theme.BackButton};
		color: ${(props) => props.theme.White};
	}
	&:focus {
		box-shadow: 0 0 0pt 1pt ${(props) => props.theme.BackButton};
	}
`;

const AddButton = styled(Button)`
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.1);
	border: 1px solid;
	border-color: ${(props) => props.theme.NextButton};
	font-size: 25px;
	color: ${(props) => props.theme.NextButton};
	padding: 1px 12px 1px 12px;
	margin: 0px 2px 0px 2px;

	&:hover {
		background-color: ${(props) => props.theme.NextButton};
		color: ${(props) => props.theme.White};
	}
	&:focus {
		box-shadow: 0 0 0pt 1pt ${(props) => props.theme.NextButton};
	}
`;

const DelButton = styled(Button)`
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.1);
	border: 1px solid;
	border-color: ${(props) => props.theme.BackButton};
	font-size: 25px;
	color: ${(props) => props.theme.BackButton};
	padding: 1px 12px 1px 12px;
	margin: 0px 1px 0px 1px;

	&:hover {
		background-color: ${(props) => props.theme.BackButton};
		color: ${(props) => props.theme.White};
	}
	&:focus {
		box-shadow: 0 0 0pt 1pt ${(props) => props.theme.BackButton};
	}
`;

const Logobar = styled(Container)`
	background-color: ${(props) => props.theme.Primary};
	color: white;
	padding: 1px;
	padding-left: 0px;
	left: 50%;
	transform: "translateX(-50%)";
	top: "10px";
	width: "100%";
	margin-bottom: 10px;
	font-family: ${(props) => props.theme.Header};

	&:link {
		color: red;
	}
`;
const LogoText = styled.h1`
	font-size: 40px;
	color: white;
	text-decoration: none;
`;

const FormContainer = styled(Container)`
	display: block;
	height: 100%;
	overflow: hidden;
	scrollbar-width: none;
	-ms-overflow-style: none;
	height: 78vh;
	margin-bottom: 10px;
	overflow: scroll;

	&::-webkit-scrollbar {
		display: none;
	}

	padding-right: 15px;
	@media (min-width: 768px) {
		border-right: ${(props) => (props.borderRight ? "1px" : "0px")} solid
			#ccc;
		border-left: ${(props) => (props.borderLeft ? "1px" : "0px")} solid #ccc;
	}
`;

const HrLine = styled.hr`
	margin: 5em 0em 0.5em;
	border-width: 4px;
	background: ${(props) => props.theme.Primary};
`;

const StyledInput = styled.input`
	background: transparent;
	border: none;
	border-bottom: 1px solid #000000;
	padding: 10px;
	width: 100%;
	&:focus {
		outline: none;
		border-bottom: ${(props) => `2px solid ${props.theme.Primary}`};
		margin-bottom: -1px;
	}
`;

const StyledTextarea = styled.textarea`
	background: transparent;
	border: none;
	border-bottom: 1px solid #000000;
	padding: 10px;
	width: 100%;
	&:focus {
		outline: none;
		border-bottom: ${(props) => `2px solid ${props.theme.Primary}`};
		margin-bottom: -1px;
	}
`;

const FormTitle = styled.h1`
	font-size: ${(props) => props.theme.SubheaderSize};
	font-family: ${(props) => props.theme.Header};
	color: ${(props) => (props.White ? props.theme.White : props.theme.Dark)};
	font-weight: ${(props) => props.theme.HeaderWeight};
	margin: 0.5em 0em 1em;
`;

const FormLabel = styled.h1`
	font-size: ${(props) =>
		props.FooterSize
			? props.theme.FooterSize
			: props.theme.SmallDescriptionSize};
	font-family: ${(props) =>
		props.Header ? props.theme.Header : props.theme.Description};
	font-weight: ${(props) =>
		props.FooterWeight
			? props.theme.FooterWeight
			: props.theme.FormLabelWeight};
	color: ${(props) =>
		props.Grey || props.White
			? props.White
				? props.theme.White
				: props.theme.Grey
			: props.theme.Dark};
	float: left;
	padding: 0px 10px;
`;

const StyledFooter = styled.div`
	background-color: ${(props) => props.theme.Primary};
	padding-top: 3px;
	width: 100%;
	display: flex;
`;

const HomepageContainer = styled(FullSizeContainer)`
	display: flex;
	flex: 1;
`;

const ClipPathBackground = styled.div`
	position: absolute;
	left: 0%;
	top: 0%;
	height: 100vh;
	width: 100%;
	background-color: white;
	background-color: ${(props) => props.Primary && props.theme.Primary};
	background-color: ${(props) => props.Secondary && props.theme.Secondary};
	opacity: ${(props) => (props.Opacity ? props.Opacity : "25%")};
	z-index: ${(props) => (props.Index ? props.Index : "0")};
	clip-path: ${(props) => props.Mask && `ellipse(100% 84% at 99% 12%)`};
`;

export {
	LoginBtn,
	Header,
	Logo,
	Subheader,
	Description,
	Button,
	NavbarButton,
	Logobar,
	FormContainer,
	NextButton,
	BackButton,
	AddButton,
	DelButton,
	HrLine,
	StyledInput,
	FormTitle,
	FormLabel,
	StyledTextarea,
	FixedSizeButton,
	FullSizeContainer,
	HomepageButton,
	StyledFooter,
	LogoText,
	GoogleSignInButton,
	FackbookSignInButton,
	HomeContainer,
	HomepageContainer,
	ClipPathBackground,
};
