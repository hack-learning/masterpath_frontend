import { Card, NewsTitle, ImgContainer, Img } from './style'

import { gravatar } from '../../utils/gravatar'

export const NewsCard = ({ title, img }) => {

  title = 'NEWS TITLE lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
  img = gravatar('garavitogerardo@gmail.com')

  return (
    <Card>
      <NewsTitle>{title}</NewsTitle>
      <ImgContainer>
        <Img src={img} />
      </ImgContainer>
    </Card>
  )
}
