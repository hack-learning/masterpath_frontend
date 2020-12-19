// import Libraries
import React, { useState, useEffect } from 'react'
import { axiosClient } from '../axiosClient'

// import Components
import { Layout } from '../components/Layout';
<<<<<<< HEAD
import { ModalNews } from '../components/ModalNews';
import { BreakingNewsContainer } from '../components/BreakingNewsContainer';
import { SearchBar } from '../components/SearchBar';
import { ArticleContainer } from '../components/ArticleContainer';
=======
import { BreakingNewsContainer } from '../components/BreakingNewsContainer'
import { SearchBar } from '../components/SearchBar'
import { ArticleContainer } from '../components/ArticleContainer'
>>>>>>> b92a3cc6b7a1a22b2adff986cfdd13a2fd3ac285
import { ProgressBar } from '../components/ProgressBars';

import { axiosDS } from '../axiosClient/DS';
// import Styles

const Library = () => {
<<<<<<< HEAD
	// axiosDS.get('/news').then((data) => console.log(data));
	return (
		<Layout>
			<ProgressBar />
			<BreakingNewsContainer />
=======

	const [news, setNews] = useState([])

	useEffect(() => {	
		(
			async function getNews() {
				const { data, status } = await axiosClient.get('information-list/')
				setNews(data)
			}
		)()
	}, [])
	

	return (
		<Layout>
			<ProgressBar />
			<BreakingNewsContainer data={news} />
>>>>>>> b92a3cc6b7a1a22b2adff986cfdd13a2fd3ac285
			<SearchBar />
			<ArticleContainer />
		</Layout>
	);
};

export default Library;
