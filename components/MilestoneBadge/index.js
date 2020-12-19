// import Libraries
import { useState } from 'react';

// import Styles
import { Container } from './styles';

// ---------- COMPONENT ---------- //
export const MilestoneBadge = ({ number, name }) => {
	const [check, setcheck] = useState(false);
	return (
		<Container check={check} name="hola">
			<h3>{name}</h3>
			<p>{number}</p>
		</Container>
	);
};
