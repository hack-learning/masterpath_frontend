// import Libraries
import styled from 'styled-components';

// import variables
import { border, colors } from '../../globalStyles/stylesVariables';

// ---------- COMPONENTS ---------- //
export const Container = styled.section`
	display: flex;
	justify-content: space-around;
	margin-bottom: 20em;
	transform: translateY(40%);

	section:nth-child(odd) {
		&::before {
			position: absolute;
			content: '';
			width: 190px;
			height: 50px;
			left: 90%;
			top: 80%;
			transform: rotateZ(25deg);
			background-image: url('/union.svg');
		}
	}
	section:nth-child(even) {
		transform: translateY(100%);
		&::before {
			position: absolute;
			content: '';
			width: 190px;
			height: 50px;
			left: 90%;
			bottom: 90%;
			transform: rotateZ(-25deg);
			background-image: url('/union.svg');
		}
	}
	section:last-of-type {
		&::before {
			position: absolute;
			content: '';
			width: 0;
			height: 0;
			background-color: none;
		}
	}
`;
