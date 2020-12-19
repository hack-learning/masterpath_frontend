// import Libraries

// import Components
import { Layout } from '../components/Layout';
import { BreakingNewsContainer } from '../components/BreakingNewsContainer'
import { SearchBar } from '../components/SearchBar'

// import Styles

const Library = () => {
	return (
		<Layout>
			<h1>Esto es Library</h1>
			<BreakingNewsContainer />
			<SearchBar />
		</Layout>
	);
};

export default Library;
