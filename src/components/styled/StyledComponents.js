import styled from "styled-components";

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
const FacebookSignInButton = styled(HomepageButton)`
	background: #3b5998;
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
	color: ${(props) => props.theme.White};

	
`;

const BackButton = styled(Button)`
	font-size: ${(props) => props.theme.SmallButtonSize};
	background: rgba(255, 255, 255, 0.1);
	border: 1px solid;
	border-color: ${(props) => props.theme.BackButton};
	color: ${(props) => props.theme.BackButton};

	&:hover {
		background-color: ${(props) => props.theme.BackButton};
		color: ${(props) => props.theme.White};
	}
	&:focus {
		box-shadow: 0 0 0pt 1pt ${(props) => props.theme.BackButton};
	}
	&:disabled {
		background-color: #666;
		border-color: #666;
		color: ${(props) => props.theme.White};
	}
`;

const AddButton = styled(Button)`
	border-radius: 60%;
	font-size: ${(props) => props.theme.SmallButtonSize};
	color: ${(props) => props.theme.White};
	padding: 1px 8px;
	margin: auto 1.5px;
`;

const DelButton = styled(AddButton)`
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.1);
	border: 1px solid;
	border-color: ${(props) => props.theme.BackButton};
	color: ${(props) => props.theme.BackButton};

	&:hover {
		background-color: ${(props) => props.theme.BackButton};
		color: ${(props) => props.theme.White};
	}
	&:focus {
		box-shadow: 0 0 0pt 1pt ${(props) => props.theme.BackButton};
	}
	&:disabled {
		background-color: #666;
		border-color: #666;
		color: white;
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
	border-bottom: 1px solid ${(props) => props.theme.Grey};
	padding: 10px;
	width: 100%;
	&:focus {
		outline: none;
		border-bottom: ${(props) => `2px solid ${props.theme.Primary}`};
		margin-bottom: -1px;
	}
	&::placeholder {
		color: ${(props) => props.theme.Grey};
		font-size: ${(props) => props.theme.FooterSize};
	}
`;

const StyledTextarea = styled.textarea`
	//background: transparent;
	border: none;
	border-bottom: 1px solid #000000;
	padding: 10px;
	width: 100%;
	&:focus {
		outline: none;
		border-bottom: ${(props) => `2px solid ${props.theme.Primary}`};
		margin-bottom: -1px;
	}
	&::placeholder {
		color: ${(props) => props.theme.Grey};
		font-size: ${(props) => props.theme.FooterSize};
	}
`;

const FooterButton = styled(Button)`
	margin: 0px;
	padding: 0.1em 1em;
	display: ${(props) => props.mdDisplay && props.mdDisplay};
	@media (max-width: 767px) {
		display: ${(props) => props.smDisplay && props.smDisplay};
	}
`;

const AnimatedFormItem = styled.div`
	--transition: transform 0.3s cubic-bezier(0, 0, 0.46, 1.53),
		opacity 0.2s linear;
	&.field-item-enter {
		opacity: 0;
		transform: translateY(100px);
	}
	&.field-item-enter-active {
		opacity: 1;
		transform: translateY(0px);
		transition: var(--transition);
	}
	&.field-item-exit-active {
		opacity: 0;
		transform: translateY(-50px);
		transition: var(--transition);
	}
`;

export {
	LoginBtn,
	Button,
	NavbarButton,
	NextButton,
	BackButton,
	AddButton,
	DelButton,
	HrLine,
	StyledInput,
	StyledTextarea,
	FixedSizeButton,
	HomepageButton,
	GoogleSignInButton,
	FacebookSignInButton,
	FooterButton,
	AnimatedFormItem,
};
