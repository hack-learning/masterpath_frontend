// import Libraries
import styled from 'styled-components';

// import variables
import { border, colors } from '../../globalStyles/stylesVariables';

// ---------- COMPONENTS ---------- //
export const Container = styled.section`
	position: relative;
	width: 100px;
	height: 100px;
	display: grid;
	place-items: center;
	border: 10px solid ${colors.main};
	border-radius: 50%;
	font-weight: bold;
	background-color: ${(props) =>
		props.check === true ? `${colors.main}` : `${colors.darkSecond}`};
	color: ${(props) =>
		props.check === true ? `${colors.darkSecond}` : `${colors.main}`};

	&::after {
		content: '';
		position: absolute;
		top: -100px;
		left: 50%;
		transform: translateX(-50%);
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: ${colors.main};
	}

	h3 {
		position: absolute;
		top: -105px;
		left: 65px;
	}

	p {
		font-size: 2em;
		&::after {
			position: absolute;
			content: '';
			height: 100px;
			width: 2px;
			bottom: 100%;
			left: 50%;
			background: ${colors.main};
		}
	}
`;
