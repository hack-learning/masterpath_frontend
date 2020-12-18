import React from 'react'

import { Container, Title } from './styles'
import { gravatar } from '../../utils/gravatar'

import { NewsCard } from '../NewsCard'
import { Fragment } from 'react'

export const BreakingNewsContainer = ({ data }) => {

  data = [
    {
      title: "1 This is a test of an news title lorem ipsum lorem ipsum",
      img: gravatar('garavitogerardo@gmail.com'),
      url: "/library",
    },
    {
      title: "2 This is a test of an news title lorem ipsum lorem ipsum",
      img: gravatar('garavitogerardo@gmail.com'),
      url: "/library",
    },
    {
      title: "3 This is a test of an news title lorem ipsum lorem ipsum",
      img: gravatar('garavitogerardo@gmail.com'),
      url: "/library",
    },
    {
      title: "4 This is a test of an news title lorem ipsum lorem ipsum",
      img: gravatar('garavitogerardo@gmail.com'),
      url: "/library",
    },
  ]

  return(
    <React.Fragment>
      <Title>Breaking News</Title>
      <Container>
        {
          data.map(item => (
            <NewsCard {...item} />
          ))
        }
      </Container>
    </React.Fragment>
  )
}