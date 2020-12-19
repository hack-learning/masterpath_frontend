// import Styles
import { Bar, BarsContainer, WeekMark, MarksContainers } from './styles';

// ---------- COMPONENT ---------- //
export const ProgressBar = () => {
	const weeks = [
		'Prework',
		'Week 1',
		'Week 2',
		'Week 3',
		'Week 4',
		'Week 5',
		'Week 6',
		'Week 7',
		'Week 8',
		'Week 9',
		'Week 10',
		'Week 12',
	];

	return (
		<BarsContainer>
			<Bar color="green" progress={20}>
				<p>Progress</p>
			</Bar>
			<Bar progress={80}>
				<p>Time</p>
			</Bar>
			<MarksContainers>
				{weeks.map((week, index) => (
					<WeekMark key={index}>
						<p>{week}</p>
					</WeekMark>
				))}
			</MarksContainers>
		</BarsContainer>
	);
};
