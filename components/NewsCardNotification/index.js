import { CardNotification, NewsTitleNotification, ImgContainerNotif, ImgNotf } from './styles'


export const NewsCardNotification = ({ title, img, url }) => {


  return (
    <CardNotification href={url} target="_blank">
      <NewsTitleNotification>{title}</NewsTitleNotification>
      <ImgContainerNotif>
        <ImgNotf src={img} />
      </ImgContainerNotif>
    </CardNotification>
  )
}
