import { BugCard } from '../BugCard'
import { Container } from './style'

export const BugCardContainer = ({ data }) => {

  data = [
    {
      title: "This is a bug title lorem ipsum lorem ipsum 1",
      description: "lorem BUG DESCRIPTION dolor sit amet consectetur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad. ur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad.",
      project: "Project test 1",
      user: "Name Last Name 1",
      url: "/"
    },
    {
      title: "This is a bug title lorem ipsum lorem ipsum  2",
      description: "lorem BUG DESCRIPTION dolor sit amet consectetur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad. ur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad.",
      project: "Project test 2",
      user: "Name Last Name 2",
      url: "/"
    },
    {
      title: "This is a bug title lorem ipsum lorem ipsum  3",
      description: "lorem BUG DESCRIPTION dolor sit amet consectetur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad. ur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad.",
      project: "Project test 3",
      user: "Name Last Name 3",
      url: "/"
    },
    {
      title: "This is a bug title lorem ipsum lorem ipsum  4",
      description: "lorem BUG DESCRIPTION dolor sit amet consectetur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad. ur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad.",
      project: "Project test 4",
      user: "Name Last Name 4",
      url: "/"
    },
    {
      title: "This is a bug title lorem ipsum lorem ipsum  5",
      description: "lorem BUG DESCRIPTION dolor sit amet consectetur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad. ur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad.",
      project: "Project test 5",
      user: "Name Last Name 5",
      url: "/"
    },
    {
      title: "This is a bug title lorem ipsum lorem ipsum  6",
      description: "lorem BUG DESCRIPTION dolor sit amet consectetur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad. ur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad.",
      project: "Project test 6",
      user: "Name Last Name 6",
      url: "/"
    },
    {
      title: "This is a bug title lorem ipsum lorem ipsum  7",
      description: "lorem BUG DESCRIPTION dolor sit amet consectetur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad. ur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad.",
      project: "Project test 7",
      user: "Name Last Name 7",
      url: "/"
    },
    {
      title: "This is a bug title lorem ipsum lorem ipsum  8",
      description: "lorem BUG DESCRIPTION dolor sit amet consectetur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad. ur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad.",
      project: "Project test 8",
      user: "Name Last Name 8",
      url: "/"
    },
  ]

  return (
    <Container>
      {
        data.map( item => (
          <BugCard {...item} />
        ))
      }
    </Container>
  )
}