// import Libraries
import { useRouter } from 'next/router';

// import Components
import { Container, Form, Input } from '../globalStyles/HomeStyles';

// import Styles

const Home = () => {
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		router.push('/master-path');
	};

	return (
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
	);
};

export default Home;
