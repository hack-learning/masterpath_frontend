import { useEffect, useState } from 'react';

// import Components
import { Layout } from '../components/Layout';
import { ProgressBar } from '../components/ProgressBars';
import { Project } from '../components/Project';
import { CoursesContainer } from '../components/CoursesContainer';
import { CourseCard } from '../components/CourseCard';
import { Milestones } from '../components/Milestones';
//import { SelectProject } from '../components/SelectProject';
import { axiosClient } from '../axiosClient';
import { ModalNews } from '../components/ModalNews';
// import Styles

// ---------- COMPONENT ---------- //
const MasterPath = () => {
	const [courses, setcourses] = useState([]);

	useEffect(() => {
		(async function getCourses() {
			const { data, status } = await axiosClient.get('courses-list/');
			setcourses(data);
		})();
	}, []);

	return (
		<Layout>
			<ModalNews />
			<ProgressBar />
			<Project />
			{/* <SelectProject /> */}
			<Milestones />
			<CoursesContainer title="Master Path">
				<h3>Requerimientos</h3>
				<hr />
				{/* {courses.slice(4).map((course) => (
					<CourseCard
						name={course.title}
						badge={course.badge_url}
						link={course.url}
					/>
				))} */}
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
				<h3>Diseño</h3>
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
				<h3>Desarrollo</h3>
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
				<h3>Pruebas</h3>
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
				<h3>Despliegue</h3>
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
				<h3>Operaciones</h3>
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
			</CoursesContainer>
		</Layout>
	);
};

export default MasterPath;
