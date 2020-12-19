// import Components
import { Layout } from '../components/Layout';
import { ProgressBar } from '../components/ProgressBars';
import { Project } from '../components/Project';
import { CoursesContainer } from '../components/CoursesContainer';
import { CourseCard } from '../components/CourseCard';
import { Milestones } from '../components/Milestones';
import { SelectProject } from '../components/SelectProject';
// import Styles

// ---------- COMPONENT ---------- //
const MasterPath = () => {
	return (
		<Layout>
			<ProgressBar />
			<Project />
			<SelectProject />
			<Milestones />
			<CoursesContainer title="Prework">
				<h3>Week 1</h3>
				<hr />
				<CourseCard
					name="Responsive Design"
					badge="badgeResponsive.webp"
					link="https://platzi.com/clases/mobile-first/"
				/>
				<CourseCard
					name="Responsive Design"
					badge="badgeResponsive.webp"
					link="https://platzi.com/clases/mobile-first/"
				/>
				<h3>Week 2</h3>
				<hr />
			</CoursesContainer>
			<CoursesContainer title="MasterPath">
				<h3>Week 1</h3>
				<hr />
			</CoursesContainer>
		</Layout>
	);
};

export default MasterPath;
