//import component
import { NewsCard } from '../NewsCard'

//import Style
import { ModalNewsContainer, ModalTitel } from './styles'

export const ModalNews = () => {
    
    return (
      <ModalNewsContainer>
          <ModalTitel>
            <h3>News</h3>  
          </ModalTitel>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </ModalNewsContainer>
    )
  }
