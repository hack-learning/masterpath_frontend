import { BsBoxArrowUpRight } from 'react-icons/bs'

import { Card, BugTitle, LinkIcon, BugDescription, ProjectName, UserName } from './styles'


export const BugCard = ( {title, description, project, user} ) => {

  title = 'BUG NAME Lorem ipsum Lorem Ipsum Lorem ipsum Lorem ipsum Lorem Ipsum Lorem ipsum '
  description = 'BUG DESCRIPTION dolor sit amet consectetur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad. ur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad.'
  project = 'PROJECT NAME lorem ipsum Lorem Ipsum lorem ipsum'
  user = 'USER NAME Loren Lorem Ipsum lorem ipsum'

  return (
    <Card>
      <LinkIcon><BsBoxArrowUpRight size="20px"/></LinkIcon>
      <BugTitle>{title}</BugTitle>
      <BugDescription>{description}</BugDescription>
      <ProjectName>{project}</ProjectName>
      <UserName>{user}</UserName>
    </Card>
  )
}
