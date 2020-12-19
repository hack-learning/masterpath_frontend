import { CardNotification, NewsTitleNotification, ImgContainerNotif, ImgNotf } from './styles'


export const NewsCardNotification = ({ title, url }) => {


  return (
    <CardNotification href={url} target="_blank">
      <NewsTitleNotification>{title}</NewsTitleNotification>
      <ImgContainerNotif>
        <ImgNotf src='/badgeResponsive.webp' />
      </ImgContainerNotif>
    </CardNotification>
  )
}
