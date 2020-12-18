// import Libraries
import { useState } from 'react';

// import Styles
import { Container } from './styles';

// ---------- COMPONENT ---------- //
export const MilestoneBadge = ({ number }) => {
	const [check, setcheck] = useState(false);
	return (
		<Container check={check} name="hola">
			<p>{number}</p>
		</Container>
	);
};
