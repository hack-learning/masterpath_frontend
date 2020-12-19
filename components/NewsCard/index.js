import { Card, NewsTitle, ImgContainer, Img, Overview } from './style'


export const NewsCard = ({ title, image_url, url, overview }) => {


  return (
    <Card href={url} target="_blank">
      <NewsTitle>{title}</NewsTitle>
      <ImgContainer>
        <Img src={image_url} />
      </ImgContainer>
    </Card>
  )
  // return (
  //   <Card href={url} target="_blank">
  //     <NewsTitle>{title}</NewsTitle>
  //     <Overview>{overview}</Overview>
  //   </Card>
  // )
}
