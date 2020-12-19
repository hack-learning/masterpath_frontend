//import component
import { NewsCardNotification } from '../NewsCardNotification'
import React, { useState } from 'react';

//import Style
import { ModalNewsContainer, ModalTitel, ModalNewsClose } from './styles'

export const ModalNews = () => {
  const [clase, setClase] = useState(true);
        
  const handleClick = () => {
      setClase(!clase);
  };
  
    return (
      <ModalNewsContainer>
          <ModalTitel>
            <img onClick={handleClick} className={clase ? <ModalNewsContainer/> : <ModalNewsClose/>} src='/Closebtn.svg' alt="Close icon" />
            <h3>News</h3>  
          </ModalTitel>
        <NewsCardNotification />
        <NewsCardNotification />
        <NewsCardNotification />
      </ModalNewsContainer>
    )
  }
