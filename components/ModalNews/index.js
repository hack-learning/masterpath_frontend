//import component
import { NewsCardNotification } from '../NewsCardNotification'
import React, { useState } from 'react';

//import Style
import { ModalNewsContainer, ModalTitel } from './styles'

export const ModalNews = () => {
  const [clase, setClase] = useState(true);
        
  const closeModal = () => {
      setClase(false);
  };
  
    return (
      <ModalNewsContainer open={clase}>
          <ModalTitel>
            <img onClick={closeModal} src='/Closebtn.svg' alt="Close icon" />
            <h3>News</h3>  
          </ModalTitel>
<<<<<<< HEAD
        <NewsCardNotification />
        <NewsCardNotification />
        <NewsCardNotification />
=======
          {/* {notificationNews.slice(4).map(() => (
					<NewsCardNotification
						titel={titel}
						url={url}
						pub_time={pub_data}
					/>
				))} */}
>>>>>>> feature/course
      </ModalNewsContainer>
    )
  }
