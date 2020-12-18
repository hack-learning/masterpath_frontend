// import Libraries
import { useState } from 'react';

// import Components
import { MilestoneBadge } from '../MilestoneBadge';

// import Styles
import { Container } from './styles';

// ---------- COMPONENT ---------- //
export const Milestones = ({ number }) => {
	const [check, setcheck] = useState(false);
	return (
		<Container>
			<MilestoneBadge number="01" />
			<MilestoneBadge number="02" />
			<MilestoneBadge number="03" />
			<MilestoneBadge number="04" />
			<MilestoneBadge number="05" />
			<MilestoneBadge number="06" />
		</Container>
	);
};
