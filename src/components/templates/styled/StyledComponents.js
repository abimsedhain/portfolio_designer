import styled from "styled-components";
import { Row, Badge, Navbar } from "reactstrap";




const Header = styled.h1`
	font-family: ${props => props.theme.Header};
	font-size: ${props => props.Small ? props.theme.SubheaderSize : props.theme.HeaderSize};
	font-weight: ${props => (props.Bold || props.Light) ? (props.Bold ? "bold" : "light") : "normal"};
	color: ${props => (props.White || props.Primary) ? (props.White ? props.theme.White : props.theme.Primary) : props.theme.Dark};
	
`

const Logo = styled.h2`
	font-family: ${props => props.theme.Header};
	font-weight: ${props => props.theme.HeaderSize};
	font-size: ${props => props.Small ? props.theme.SmallDescriptionSize : props.theme.LogoSize};
	color: ${props => (props.White || props.Primary) ? (props.White ? props.theme.White : props.theme.Primary) : props.theme.Dark};
`

const Subheader = styled.h2`
	font-family: ${props => props.theme.Subheader};
	font-weight: ${props => (props.Bold || props.Light) ? (props.Bold ? "bold" : "200") : "normal"};
	font-size: ${props => props.theme.SubheaderSize};
	color: ${props => (props.White || props.Primary) ? (props.White ? props.theme.White : props.theme.Primary) : props.theme.Dark};
`
const Description = styled.p`
	font-family: ${props => props.theme.Description};
	font-weight: ${props => props.Bold || props.Light ? (props.Bold ? "bold" : "light") : "normal"};
	font-size: ${props => props.Small ? props.theme.SmallDescriptionSize : props.theme.DescriptionSize};
	color: ${props => (props.White || props.Primary) ? (props.White ? props.theme.White : props.theme.Primary) : props.theme.Dark};
	display: ${props => props.Inline ? "inline" : "block"};
`

const ColoredSpan = styled.span`
	color: ${props => props.White || props.Primary ? (props.White ? props.theme.White : props.theme.Primary) : props.theme.Dark};
`

const StyledRow = styled(Row)`
	margin-bottom: -20px;
`
const StyledBadge = styled(Badge)`
	background-color: #DCDCDC;
	color: #A9A9A9;
	margin: 5px;
	font-size: ${props=> props.theme.BadgeSize};
	font-family: ${props=> props.theme.Subheader};
	font-weight: 400;
`

const Styleda = styled.a`
	color: inherit;
	&:hover{
		color: inherit;
	}
`
const Styledli = styled.li`
	margin-top: -20px;
	margin-bottom: -20px;
`
const StyledBox = styled.div`
	display: inherit;
	width: 100%;
	border-left: 2px solid;
	border-color: #808080;
	padding-left: 8px;
	&:hover{
		border-color: ${props => props.theme.Primary}
	}
`
const StyledNavbar = styled(Navbar)`
	background-color: ${props => props.theme.Background};
	`
	const StyledNavLink = styled(Description)`
		display: block;
		padding: .5rem 1rem;
		margin-bottom:0rem;
		&:hover{
			color: ${props => props.theme.Primary};
		}
	`
export { Header, Logo, Subheader, Description, ColoredSpan, StyledRow, Styleda, Styledli, StyledBadge, StyledBox, StyledNavLink, StyledNavbar}