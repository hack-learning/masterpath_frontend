// import Libraries
import styled from 'styled-components';

// import variables
import { border, colors } from '../../globalStyles/stylesVariables';

// ---------- COMPONENTS ---------- //
export const Card = styled.div`
	border-radius: ${border.borderRadiusSmall};
	margin-bottom: 0.5em;
	transition: 0.3s;
	display: flex;
	justify-content: space-between;
	&:hover {
		box-shadow: 2px 2px 5px rgba(10, 48, 77, 0.8);
	}
	a {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		padding: 1em;
		text-decoration: none;
		color: ${colors.white};
	}
	background-color: ${(props) =>
		props.checkCourse ? `${colors.main}` : `${colors.second}`};

	img {
		width: 35px;
		height: 35px;
		object-fit: cover;
		margin-right: 2em;
	}
`;
export const CheckcompletCours = styled.button`
	position: absolute;
	right: 50px;
	background-color: transparent;
	border: none;
	outline: none;
	transition: 0.3s;
	cursor: pointer;

	svg {
		width: 30px;
		height: 30px;
	}
`
