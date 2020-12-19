// import Libraries
import styled from 'styled-components';

// import variables
import { colors, border } from '../../globalStyles/stylesVariables';

// ---------- COMPONENTS ---------- //
export const ProjectContainer = styled.section`
	margin: 4em 0;
	padding: 1.5em;
	margin-right: 50%;
	border-radius: ${border.borderRadiusBig};
	transition: 0.5s;
	&:hover {
		background: ${colors.main};
		box-shadow: 5px 5px 20px rgba(10, 48, 77, 0.8);
	}
	&:hover a {
		color: ${colors.white};
	}

	a {
		text-decoration: none;
		color: ${colors.lightSecond};
		transition: 0.5s;
	}

	h1 {
		margin-bottom: 0.5em;
	}
`;
