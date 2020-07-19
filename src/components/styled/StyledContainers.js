import styled from "styled-components";
import { Container } from "reactstrap";
import { ReactComponent as BackgroundClip } from "../../assets/background.svg";

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

const StyledFooter = styled.div`
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

const HomepageContain = styled(FullSizeContainer)`
	display: flex;
	flex: 1;
`;

const ClipPathBackground = styled.div`
	position: fixed;
	left: 0%;
	top: 0%;
	height: 100vh;
	width: 100%;
	background-color: white;
	background-color: ${(props) => props.Primary && props.theme.Primary};
	background-color: ${(props) => props.Secondary && props.theme.Secondary};
	opacity: ${(props) => (props.Opacity ? props.Opacity : "25%")};
	z-index: ${(props) => (props.Index ? props.Index : "0")};
`;

const StyledBackgroundClip = styled(BackgroundClip)`
	position: fixed;
	left: 0%;
	top: 0%;
	height: 100vh;
	width: max(100vh, 100vw);
	//width: 100vw;
	transform: rotate(-90deg);	
	transform: scale(1.2);	
	z-index: ${(props) => (props.Index ? props.Index : "0")};
	.path {
		fill: white;
		fill: ${(props) => props.Primary && props.theme.Primary};
		fill: ${(props) => props.Secondary && props.theme.Secondary};
		opacity: ${(props) => (props.Opacity ? props.Opacity : "25%")};
		z-index: ${(props) => (props.Index ? props.Index : "0")};
	}
`;
const StyledFormGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: max-content auto;
	height: calc(100vh - 60px);
	@media (max-width: 767px) {
		height: calc(100vh - 65px);
	}

`;

const StyledFormGridElement = styled.div`
	background-color: ${(props) => props.primary && props.theme.Primary};
	padding: ${(props) => props.padding && props.padding};
	grid-column: ${(props) => props.navbar && `span 5`};
	grid-column: ${(props) => props.input && `1/3`};
	grid-column: ${(props) => props.preview && `3/6`};
	overflow: ${(props) => props.overflow && props.overflow};
	@media (max-width: 767px) {
		grid-column: ${(props) => !props.navbar && "1 / 6"};
		grid-row: ${(props) => !props.navbar && "2 / 3"};
		transform: ${(props) => props.isBeingPreviewed && "translateX(100vw)"};
	}

	::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}
	::-webkit-scrollbar-track {
		background-color: ${props=>props.theme.Secondary};
	}
	::-webkit-scrollbar-thumb {
		background-color: #aaa;
		border-radius: 4px;
	}

	//Animation classes

	--transition: transform 0.3s cubic-bezier(0, 0, 0.46, 1.53);
	&.form-section-enter {
		transform: translateX(-100vw);
	}

	&.form-section-enter-active {
		transform: translateX(0px);
		transition: var(--transition);
	}
	&.form-section-exit {
		transform: translateX(0px);
	}
	&.form-section-exit-active {
		transform: translateX(-100vw);
		transition: var(--transition);
	}

	&.template-section-enter {
		transform: translateX(100vwpx);
	}

	&.template-section-enter {
		transform: translateX(100vw);
	}
	&.template-section-enter-active {
		transform: translateX(0px);
		transition: var(--transition);
	}
	&.template-section-exit {
		transform: translateX(0px);
	}
	&.template-section-exit-active {
		transform: translateX(100vw);
		transition: var(--transition);
	}
`;
const StyledFormFooter = styled(StyledFormGridElement)`
	display: flex;
	height: 100%;
	justify-content: space-evenly;
	align-items: center;
	display: ${(props) => props.mdDisplay && props.mdDisplay};
	@media (max-width: 767px) {
		width: 95%;
		justify-content: space-between;
		margin: 0 auto;
	}

`;

const StyledFormFooterContainer = styled.div`
	background-color: ${(props) => props.theme.Primary};
	width: 100%;
	height: 60px;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
`;

export {
	FullSizeContainer,
	HomeContainer,
	StyledFooter,
	HomepageContain,
	ClipPathBackground,
	StyledFormGrid,
	StyledFormFooter,
	StyledFormGridElement,
	StyledFormFooterContainer,
	StyledBackgroundClip,
};
