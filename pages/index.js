// import Libraries
import Link from 'next/link';

// import Components
import { Layout } from '../components/Layout';

import { BugCard } from '../components/BugCard'
// import Styles

const Home = () => {
	return (
		<>
			<h1>Esto es el home</h1>
			<Link href="/master-path">
				<button>Go to master path</button>
			</Link>
			<BugCard />
		</>
	);
};

export default Home;
