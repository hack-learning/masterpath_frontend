import { Container, News, Title } from './styles'
import { gravatar } from '../../utils/gravatar'

import { NewsCard } from '../NewsCard'
import { Fragment } from 'react'

export const BreakingNewsContainer = ({ data }) => {

  data = [
    {
      title: "0 This is a test of an news title lorem ipsum lorem ipsum news title lorem ipsum lorem ipsum news title lorem ipsum lorem ipsum news title lorem ipsum lorem ipsum",
      image_url: gravatar('garavitogerardo@gmail.com'),
      url: "/library",
      overview: "lorem ipsum lorem ipsum lorem sips lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem sips lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem sips lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem sips lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      id: 0
    },
    {
      title: "1 This is a test of an news title lorem ipsum lorem ipsum",
      image_url: gravatar('garavitogerardo@gmail.com'),
      url: "/library",
      overview: "lorem ipsum lorem ipsum lorem sips lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      id: 1
    },
    {
      title: "2 This is a test of an news title lorem ipsum lorem ipsum",
      image_url: gravatar('garavitogerardo@gmail.com'),
      url: "/library",
      overview: "lorem ipsum lorem ipsum lorem sips lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      id: 2
    },
    {
      title: "3 This is a test of an news title lorem ipsum lorem ipsum",
      image_url: gravatar('garavitogerardo@gmail.com'),
      url: "/library",
      overview: "lorem ipsum lorem ipsum lorem sips lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      id: 3
    },
    {
      title: "4 This is a test of an news title lorem ipsum lorem ipsum",
      image_url: gravatar('garavitogerardo@gmail.com'),
      url: "/library",
      overview: "lorem ipsum lorem ipsum lorem sips lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      id: 4
    },
    {
      title: "5 This is a test of an news title lorem ipsum lorem ipsum",
      image_url: gravatar('garavitogerardo@gmail.com'),
      url: "/library",
      overview: "lorem ipsum lorem ipsum lorem sips lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      id: 5
    },
    {
      title: "NO This is a test of an news title lorem ipsum lorem ipsum",
      image_url: gravatar('garavitogerardo@gmail.com'),
      url: "/library",
      overview: "lorem ipsum lorem ipsum lorem sips lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      id: 6
    },
    {
      title: "NO This is a test of an news title lorem ipsum lorem ipsum",
      image_url: gravatar('garavitogerardo@gmail.com'),
      url: "/library",
      overview: "lorem ipsum lorem ipsum lorem sips lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      id: 7
    },
  ]

  return(
    <Container>
      <Title>Breaking News</Title>
      <News>
        {
          data.slice(0, 6).map(item => (
            <NewsCard key={item.id} {...item} />
          ))
        }
      </News>
    </Container>
  )
}