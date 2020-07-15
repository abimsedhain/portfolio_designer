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
const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: max-content auto;
	height: calc(100vh - 60px);
`;

const StyledGridElement = styled.div`
	background-color: ${(props) => props.color};
	padding: ${(props) => props.padding && props.padding};
	grid-row: ${(props) => props.rowSpan && `span ${props.rowSpan}`};
	grid-column: ${(props) => props.columnSpan && `span ${props.columnSpan}`};
	overflow: ${(props) => props.overflow && props.overflow};
	@media (max-width: 767px) {
		display: ${(props) => props.smDisplay && props.smDisplay};
		grid-column: ${(props) => props.smSize && `span ${props.smSize}`};
	}
	::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}
	::-webkit-scrollbar-track {
		background-color: white;
	}
	::-webkit-scrollbar-thumb {
		background-color: #aaa;
		border-radius: 4px;
	}
`;
const StyledFormFooter = styled(StyledGridElement)`
	display: flex;
	height: 100%;
	justify-content: space-evenly;
	align-items: center;
	display: ${props=>props.mdDisplay&&props.mdDisplay};
	@media (max-width: 767px) {
		width:95%;
		justify-content: space-between;
		margin: 0 auto;
	}
`;

const StyledFormFooterContainer = styled.div`
	background-color: ${props=>props.theme.Primary};
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
	StyledGrid,
	StyledFormFooter,
	StyledGridElement,
	StyledFormFooterContainer
};
