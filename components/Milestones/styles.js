// import Libraries
import styled from 'styled-components';

// import variables
import { border, colors } from '../../globalStyles/stylesVariables';

// ---------- COMPONENTS ---------- //
export const Container = styled.section`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20em;
	transform: translateY(40%);

	section:nth-child(odd) {
		&::before {
			position: absolute;
			content: '';
			width: 100px;
			height: 50px;
			left: 70%;
			top: 100%;
			transform: rotateZ(45deg);
			background-image: url('/union.svg');
		}
	}
	section:nth-child(even) {
		transform: translateY(100%);
		&::before {
			position: absolute;
			content: '';
			width: 100px;
			height: 50px;
			right: -70%;
			bottom: 100%;
			transform: rotateZ(-45deg);
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
