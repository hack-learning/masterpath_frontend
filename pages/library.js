// import Libraries

// import Components
import { Layout } from '../components/Layout';
import { ModalNews } from '../components/ModalNews';
import { BreakingNewsContainer } from '../components/BreakingNewsContainer';
import { SearchBar } from '../components/SearchBar';
import { ArticleContainer } from '../components/ArticleContainer';
import { ProgressBar } from '../components/ProgressBars';

import { axiosDS } from '../axiosClient/DS';
// import Styles

const Library = () => {
	// axiosDS.get('/news').then((data) => console.log(data));
	return (
		<Layout>
			<ProgressBar />
			<BreakingNewsContainer />
			<SearchBar />
			<ArticleContainer />
		</Layout>
	);
};

export default Library;
