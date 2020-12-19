// import Libraries

// import Components
import { Layout } from '../components/Layout';
import { ModalNews } from '../components/ModalNews'
import { BreakingNewsContainer } from '../components/BreakingNewsContainer'
import { SearchBar } from '../components/SearchBar'
import { ArticleContainer } from '../components/ArticleContainer'
import { ProgressBar } from '../components/ProgressBars';
// import Styles

const Library = () => {
	return (
		<Layout>
			<ProgressBar />
			<ModalNews />
			<BreakingNewsContainer />
			<SearchBar />
			<ArticleContainer />
		</Layout>
	);
};

export default Library;
