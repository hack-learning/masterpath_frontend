// import Styles
import { Bar } from './styles';

// ---------- COMPONENT ---------- //
export const Expbar = () => {
	const level = 1;
	return (
		<Bar XP={30}>
			<p>{`Lv ${level}`} | Newbie</p>
		</Bar>
	);
};
