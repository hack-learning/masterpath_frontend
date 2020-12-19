import { CardNotification, NewsTitleNotification, ImgContainerNotif, ImgNotf } from './styles'


export const NewsCardNotification = ({ title, url, pub_data, image_url }) => {


  return (
    <CardNotification href={url} target="_blank">
      <NewsTitleNotification>
        {title}
        <p>{pub_data}</p>
      </NewsTitleNotification>
      <ImgContainerNotif>
        <ImgNotf src={image_url} />
      </ImgContainerNotif>
    </CardNotification>
  )
}
      
