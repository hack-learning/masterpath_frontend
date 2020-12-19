import { Container, News, Title } from './styles'
import { gravatar } from '../../utils/gravatar'

import { NewsCard } from '../NewsCard'
import { Fragment } from 'react'

export const BreakingNewsContainer = ({ data }) => {

  data = [
    {
      title: "1 This is a test of an news title lorem ipsum lorem ipsum",
      img: gravatar('garavitogerardo@gmail.com'),
      url: "/library",
      id: 0
    },
    {
      title: "2 This is a test of an news title lorem ipsum lorem ipsum",
      img: gravatar('garavitogerardo@gmail.com'),
      url: "/library",
      id: 1
    },
    {
      title: "3 This is a test of an news title lorem ipsum lorem ipsum",
      img: gravatar('garavitogerardo@gmail.com'),
      url: "/library",
      id: 2
    },
    {
      title: "4 This is a test of an news title lorem ipsum lorem ipsum",
      img: gravatar('garavitogerardo@gmail.com'),
      url: "/library",
      id: 3
    },
  ]

  return(
    <Container>
      <Title>Breaking News</Title>
      <News>
        {
          data.map(item => (
            <NewsCard key={item.id} {...item} />
          ))
        }
      </News>
    </Container>
  )
}