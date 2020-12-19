// import Components
import { useSelector } from 'react-redux';

// import Styles
import { Bar } from './styles';

// ---------- COMPONENT ---------- //
export const Expbar = () => {
	const { exp, career } = useSelector((state) => state.userState);

	return (
		<Bar XP={exp}>
			<p> Newbie</p>
		</Bar>
	);
};
