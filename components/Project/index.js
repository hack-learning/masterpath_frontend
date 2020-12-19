// import Libraries
import Link from 'next/link';

// import Styles
import { ProjectContainer, Button } from './styles';

// ---------- COMPONENT ---------- //
export const Project = () => {
	return (
		<>
			<Button>Select Project</Button>
			<ProjectContainer>
				<a
					target="_blank"
					href={'https://github.com/hack-learning/masterpath_frontend'}
				>
					<h1>Clon de Spotify</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
						doloribus est, consequuntur enim quia provident dolores
						necessitatibus reprehenderit laboriosam quidem? Totam fugit a
						necessitatibus! Voluptate commodi tempora eligendi officia
						perferendis quas, veritatis deleniti voluptatem ipsum.
					</p>
				</a>
			</ProjectContainer>
		</>
	);
};
