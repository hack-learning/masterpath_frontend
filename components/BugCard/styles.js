import styled from 'styled-components';

import { hoverScale } from '../../globalStyles/animations';
import { colors } from '../../globalStyles/stylesVariables';

export const Card = styled.a`
	height: 300px;
	width: 216px;
	background-color: ${colors.second};
	border-radius: 20px;
	color: ${colors.white};
	text-decoration: none;
	margin: 10px;
	overflow: hidden;
	box-shadow: 5px 5px 10px rgba(10, 48, 77, 0.8);
	display: grid;
	grid-template-rows: 10% 12% 46% 7% 10% 15%;

	&:hover {
		cursor: pointer;
		${hoverScale()};
	}

	&:hover .BugCard__link {
		color: #98ca3f;
	}
`;

export const LinkIcon = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 10px 10px 0px 10px;
	grid-row: 1 / 2;
`;

export const BugTitle = styled.h3`
	color: ${colors.main};
	font-size: 14px;
	margin: 0px 10px;
	grid-row: 2 / 3;
	overflow: hidden;
`;

export const BugDescription = styled.p`
	font-size: 12px;
	margin: 10px;
	color: ${colors.white};
	text-align: justify;
	grid-row: 3 / 4;
	overflow: hidden;
`;

export const ProjectName = styled.h4`
	font-size: 14px;
	font-weight: bold;
	margin: 10px 10px 5px 10px;
	grid-row: 5 / 6;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export const UserName = styled.p`
	font-size: 12px;
	margin: 5px 10px;
	grid-row: 6 / 7;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
