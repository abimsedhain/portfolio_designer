import styled from "styled-components";

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
		outline: none;
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

export { Header, Logo, Subheader, Description, Button, NavbarButton }
