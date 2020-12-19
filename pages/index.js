// import Libraries
import { useRouter } from 'next/router';

// import Components
import { Container, Form, Input } from '../globalStyles/HomeStyles';

import { BugCard } from '../components/BugCard'
import { NewsCard } from '../components/NewsCard'
// import Styles

const Home = () => {
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		router.push('/master-path');
	};

	return (
<<<<<<< HEAD
		<Container onSubmit={handleSubmit}>
			<Form>
				<h1>Master Path</h1>
				<label htmlFor="e-mail">e-mail</label>
				<Input type="text" id="e-mail" placeholder="e-mail" />
				<label htmlFor="Password">Password</label>
				<Input type="text" id="Password" placeholder="Password" />
				<button type="submit">Login</button>
			</Form>
		</Container>
=======
		<>
			<h1>Esto es el home</h1>
			<Link href="/master-path">
				<button>Go to master path</button>
			</Link>
			<BugCard />
			<NewsCard />
		</>
>>>>>>> 1c3022b89852a3e4df7d39ab15f411b85efc06c2
	);
};

export default Home;
