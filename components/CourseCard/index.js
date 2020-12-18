// import Libraries
import { useState } from 'react';

// import Styles
import { Card } from './styles';

// ---------- COMPONENT ---------- //
export const CourseCard = ({ badge, name, link }) => {
	const [finished, setfinished] = useState(false);

	return (
		<Card finish={finished}>
			<a href={link} target="_blank">
				<img src={badge} alt={name} />
				<h3>{name}</h3>
			</a>
		</Card>
	);
};
