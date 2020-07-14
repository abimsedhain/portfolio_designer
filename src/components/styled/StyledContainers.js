import styled from "styled-components";
import { Container } from "reactstrap";

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

const FormContainer = styled(Container)`
	display: block;
	overflow: hidden;
	scrollbar-width: none;
	-ms-overflow-style: none;
	height: ${(props) => !props.OverflowHidden && "82vh"};
	overflow: scroll;
	overflow: ${(props) => props.OverflowHidden && "hidden"};

	&::-webkit-scrollbar {
		display: none;
	}

	padding-right: 15px;
`;

const StyledFooter = styled.div`
	// background-color: ${(props) => props.theme.Primary};
	background-color: ${(props) =>
		props.White ? props.theme.White : props.theme.Primary};
	padding-top: 0.2em;
	padding-bottom: 0.2em;
	padding-bottom: ${(props) => props.Fixed && "0.5em"};
	padding-top: ${(props) => props.Fixed && "0.5em"};
	width: 100%;
	display: flex;
	position: ${(props) => props.Fixed && "fixed"};
	bottom: 0;
	@media (min-width: 768px) {
		padding-bottom: ${(props) => props.Fixed && "1em"};
	}
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
	FormContainer,
	FullSizeContainer,
	HomeContainer,
	StyledFooter,
	HomepageContainer,
	ClipPathBackground,
};
