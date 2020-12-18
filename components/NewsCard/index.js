import { Card, NewsTitle, ImgContainer, Img } from './style'


export const NewsCard = ({ title, img, url }) => {


  return (
    <Card href={url} target="_blank">
      <NewsTitle>{title}</NewsTitle>
      <ImgContainer>
        <Img src={img} />
      </ImgContainer>
    </Card>
  )
}
