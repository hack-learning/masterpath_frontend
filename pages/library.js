// import Libraries

// import Components
import { Layout } from '../components/Layout';
import { ModalNews } from '../components/ModalNews'
import { BreakingNewsContainer } from '../components/BreakingNewsContainer'

// import Styles

const Library = () => {
	return (
		<Layout>
			<h1>Esto es Library</h1>
			<ModalNews />
			<BreakingNewsContainer />
		</Layout>
	);
};

export default Library;
