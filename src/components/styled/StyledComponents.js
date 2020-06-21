import styled from "styled-components";
import { Container } from "reactstrap";

const Header = styled.h1`
	font-family: ${props => props.theme.Header};
	font-size: ${props => props.Small ? props.theme.SubheaderSize : props.theme.HeaderSize};
	font-weight: ${props => props.theme.HeaderWeight};
	color: ${props => props.White ? props.theme.White : props.theme.Dark}
`

const Logo = styled.h2`
	font-family: ${props => props.theme.Header};
	font-weight: ${props => props.theme.HeaderSize};
	font-size: ${props => props.Small ? props.theme.SmallDescriptionSize : props.theme.LogoSize};
	color: ${props => props.White ? props.theme.White : props.theme.Dark}
`

const Subheader = styled.h2`
	font-family: ${props => props.theme.Subheader};
	font-size: ${props => props.theme.SubheaderSize};
	color: ${props => props.White ? props.theme.White : props.theme.Dark}
`

const Description = styled.p`
	font-family: ${props => props.theme.Description};
	font-size: ${props => props.Small ? props.theme.SmallDescriptionSize : props.theme.DescriptionSize};
	color: ${props => props.White ? props.theme.White : props.theme.Dark}
`

const Button = styled.button`
	font-size: ${props => props.theme.ButtonSize};
	font-size: ${props => props.Small && props.theme.SmallButtonSize};
	font-size: ${props => props.Large && props.theme.LargeButtonSize};
	display: inline-block;
	color: ${props => props.White ? props.theme.White : props.theme.Dark};
	margin: 1em;
	padding: 0.25em 1em;
	border: 0px solid;
	border-radius: 50px;
	background-color: ${props => props.theme.Primary};
	background-color: ${props => props.Secondary && props.theme.Secondary};
	outline: none;
	&:focus{
		outline-color: ${props=> props.theme.Primary} ;
	}	
	&:hover{
		background-color:${props => props.theme.Special};
		color: ${props => props.theme.White};
	}
`

const NavbarButton = styled(Button)`
	margin: 0em;	
	font-size: 1.2rem;
	@media (min-width: 768px) {
		margin: 1em;
		margin-top: 5px;
		font-size:1.1rem;
	 }
`

const LoginBtn = styled(Button)`
	border: 1px solid #fff;
	background-color: ${props => props.theme.Primary};
	color: white; 

	&:hover{
		background-color: ${props => props.theme.NextButton};
		border: 1px solid #0275d8;
	}

`

const NextButton = styled(Button)`
	font-size: ${props => props.theme.SmallButtonSize};
	border: 1px solid;
	border-color: ${props => props.theme.NextButton};
	background-color: ${props => props.theme.White};
	color: ${props => props.theme.NextButton};
	border-radius: 4px;

	&:hover{
		background-color:${props => props.theme.NextButton};
		color: ${props => props.theme.White};
	}

`

const BackButton = styled(Button)`
	font-size: ${props => props.theme.SmallButtonSize};
	border: 1px solid;
	border-color: ${props => props.theme.BackButton}; 	
	background-color: ${props => props.theme.White};
	color:  ${props => props.theme.BackButton};
	border-radius: 4px;

	&:hover{
		background-color: ${props => props.theme.BackButton};
		color: ${props => props.theme.White};
	}

`

const AddButton = styled(Button)`
	border-radius: 50%;
	background: rgba(255,255,255, .1);
	border: 1px solid;
	border-color: ${props => props.theme.NextButton};
	font-size: 25px;
	color:${props => props.theme.NextButton};
	padding:1px 12px 1px 12px;
	margin:0px 2px 0px 2px;
	

	&:hover{
		background-color:${props => props.theme.NextButton};
		color: ${props => props.theme.White};
	}
`

const DelButton = styled(Button)`
	border-radius: 50%;
	background: rgba(255,255,255, .1);
	border: 1px solid;
	border-color: ${props => props.theme.BackButton};
	font-size: 25px;
	color:${props => props.theme.BackButton};
	padding:1px 12px 1px 12px;
	margin:0px 1px 0px 1px;

	&:hover{
		background-color:${props => props.theme.BackButton};
		color: ${props => props.theme.White};
	}
`

const Logobar = styled(Container)`
	background-color: ${props => props.theme.Primary};
	color:white;
	padding:5px;
	padding-left: 0px;
	left:50%;
	transform: 'translateX(-50%)';
	top:'10px';
	width:'100%';
	margin-bottom: 15px;
	font-family:${props => props.theme.Header};

	&:link{
		color:red;
	}
`

const FormContainer = styled(Container)`
	display: block;
	height: 100%;
	overflow: hidden;
	scrollbar-width: none; 
	-ms-overflow-style: none; 
	
	&::-webkit-scrollbar { 
		display: none;}

		padding-right:15px; 
		// border-right: 1px solid #ccc;
		// border-left: 1px solid #ccc;
`

const HrLine = styled.hr`
	margin: 5em 0em 0.5em;
	border-width: 4px;
	background: ${props=>props.theme.Primary};
`

const StyledInput = styled.input`
	background: transparent;
	border: none;	
	border-bottom: 1px solid #000000;
	padding:10px;
	width:100%;
	&:focus{
		outline: none;
		border-bottom: ${props=> `2px solid ${props.theme.Primary}`};
		margin-bottom: -1px;
	}
`

const StyledTextarea = styled.textarea`
	background: transparent;
	border: none;	
	border-bottom: 1px solid #000000;
	padding:10px;
	width:100%;
	&:focus{
		outline: none;
		border-bottom: ${props=> `2px solid ${props.theme.Primary}`};
		margin-bottom: -1px;
	}
`

const FormTitle = styled.h1`
	font-size: ${props => props.theme.SubheaderSize};
	font-family:${props => props.theme.Header};
	color: ${props => props.White ? props.theme.White : props.theme.Dark};
	margin: 0.5em 0em 1em;
	// float: inline-end;
	// display: inline-block;
`

const FormLabel = styled.h1`
	font-size: ${props => props.theme.SmallDescriptionSize};
	font-family:${props => props.theme.Description};
	font-weight: ${props=>props.theme.FormLabelWeight};
	color: ${props => props.White ? props.theme.White : props.theme.Dark};
	float: left;
	padding: 0px 10px;
`

export { LoginBtn, Header, Logo, Subheader, Description, Button, NavbarButton, Logobar, FormContainer, NextButton, BackButton, AddButton, DelButton, HrLine, StyledInput, FormTitle, FormLabel, StyledTextarea }
