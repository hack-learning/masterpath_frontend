// import Libraries

// import Components
import { Layout } from '../components/Layout';
import { BreakingNewsContainer } from '../components/BreakingNewsContainer'
import { SearchBar } from '../components/SearchBar'
import { ArticleContainer } from '../components/ArticleContainer'

// import Styles

const Library = () => {
	return (
		<Layout>
			<BreakingNewsContainer />
			<SearchBar />
			<ArticleContainer />
		</Layout>
	);
};

export default Library;
