// import Libraries
import styled from 'styled-components';

// import variables
import { colors } from '../../globalStyles/stylesVariables';

// ---------- COMPONENTS ---------- //
export const LayoutContainer = styled.main`
	height: 100vh;
	display: flex;
	align-items: center;
	padding: 0 2em;
	background-color: ${colors.darkSecond};
`;

export const Content = styled.main`
	margin-left: 400px;
	height: 95%;
	width: 100%;
	display: flex;
`;
