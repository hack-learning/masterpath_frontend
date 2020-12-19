import { useEffect, useState } from 'react';

//import component
import { NewsCardNotification } from '../NewsCardNotification'

import { axiosClient } from '../../axiosClient';
//import Style
import { ModalNewsContainer, ModalTitel } from './styles'

export const ModalNews = () => {
  const [clase, setClase] = useState(true);
  const [notificationNews, setnotificationNews] = useState([]);
        
  const closeModal = () => {
      setClase(false);
  };

	useEffect(() => {
		(async function getCourses() {
			const { data, status } = await axiosClient.get('information-list/');
			setnotificationNews(data);
		})();
	}, []);
  
    return (
      <ModalNewsContainer open={clase}>
          <ModalTitel>
            <img onClick={closeModal} src='/Closebtn.svg' alt="Close icon" />
            <h3>News</h3>  
          </ModalTitel>
          {/* {notificationNews.slice(4).map(() => (
					<NewsCardNotification
						titel={titel}
						url={url}
						pub_time={pub_data}
					/>
				))} */}
      </ModalNewsContainer>
    )
  }
