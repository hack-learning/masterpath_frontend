import { BsBoxArrowUpRight } from 'react-icons/bs'

import { Card, BugTitle, LinkIcon, BugDescription, ProjectName, UserName } from './styles'


export const BugCard = ( {title, description, project, user, url} ) => {


  return (
    <Card href={url} target="_blank">
      <LinkIcon className="BugCard__link"><BsBoxArrowUpRight size="20px"/></LinkIcon>
      <BugTitle>{title}</BugTitle>
      <BugDescription>{description}</BugDescription>
      <ProjectName>{project}</ProjectName>
      <UserName>{user}</UserName>
    </Card>
  )
}
