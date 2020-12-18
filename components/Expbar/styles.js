// import Libraries
import styled from 'styled-components';

// import variables
import { colors, border } from '../../globalStyles/stylesVariables';

// ---------- COMPONENTS ---------- //
export const Bar = styled.main`
	position: relative;
	padding: 5px 50px;
	text-align: center;
	color: ${colors.white};
	background-color: ${colors.second};
	border-radius: ${border.borderRadiusBig};
	border: 2px solid ${colors.main};
	transform: translateY(-50%);
	&:after {
		position: absolute;
		content: '';
		top: -1px;
		left: -1px;
		bottom: -1px;
		width: 50%;
		z-index: 1;
		border-radius: ${border.borderRadiusBig};
		background-color: ${colors.main};
	}
	p {
		z-index: 2;
	}
`;
