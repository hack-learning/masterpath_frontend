// import Libraries
import styled from 'styled-components';

// import variables
import { border, colors } from '../../globalStyles/stylesVariables';

// ---------- COMPONENTS ---------- //
export const Card = styled.div`
	border-radius: ${border.borderRadiusSmall};
	margin-bottom: 0.5em;
	transition: 0.3s;
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
		props.finish ? `${colors.main}` : `${colors.text}`};

	img {
		width: 35px;
		height: 35px;
		object-fit: cover;
		margin-right: 2em;
	}
`;
