import { BugCard } from '../BugCard'
import { Container } from './style'

export const BugCardContainer = ({ data }) => {

  data = [
    {
      title: "This is a bug title lorem ipsum lorem ipsum 1",
      description: "lorem BUG DESCRIPTION dolor sit amet consectetur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad. ur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad.",
      project: "Project test 1",
      user: "Name Last Name 1",
      url: "/",
      id: 0
    },
    {
      title: "This is a bug title lorem ipsum lorem ipsum  2",
      description: "lorem BUG DESCRIPTION dolor sit amet consectetur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad. ur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad.",
      project: "Project test 2",
      user: "Name Last Name 2",
      url: "/",
      id: 1
    },
    {
      title: "This is a bug title lorem ipsum lorem ipsum  3",
      description: "lorem BUG DESCRIPTION dolor sit amet consectetur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad. ur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad. dfdffdfdfdf",
      project: "Project test 3",
      user: "Name Last Name 3",
      url: "/",
      id: 2
    },
    {
      title: "This is a bug title lorem ipsum lorem ipsum  4",
      description: "lorem BUG DESCRIPTION dolor sit amet consectetur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad. ur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad.",
      project: "Project test 4",
      user: "Name Last Name 4",
      url: "/",
      id: 3
    },
    {
      title: "This is a bug title lorem ipsum lorem ipsum  5",
      description: "lorem BUG DESCRIPTION dolor sit amet consectetur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad. ur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad.",
      project: "Project test 5",
      user: "Name Last Name 5",
      url: "/",
      id: 4
    },
    {
      title: "This is a bug title lorem ipsum lorem ipsum  6",
      description: "lorem BUG DESCRIPTION dolor sit amet consectetur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad. ur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad.",
      project: "Project test 6",
      user: "Name Last Name 6",
      url: "/",
      id: 5
    },
    {
      title: "This is a bug title lorem ipsum lorem ipsum  7",
      description: "lorem BUG DESCRIPTION dolor sit amet consectetur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad. ur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad.",
      project: "Project test 7",
      user: "Name Last Name 7",
      url: "/",
      id: 6
    },
    {
      title: "This is a bug title lorem ipsum lorem ipsum  8",
      description: "lorem BUG DESCRIPTION dolor sit amet consectetur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad. ur, adipisicing elit. Tempore asperiores laudantium unde deserunt eum, recusandae suscipit illo libero sed molestiae tempora odio odit corporis voluptatem reiciendis rerum distinctio, repellendus ad.",
      project: "Project test 8",
      user: "Name Last Name 8",
      url: "/",
      id: 7
    },
  ]

  return (
    <Container>
      {
        data.map( item => (
          <BugCard key={item.id} {...item} />
        ))
      }
    </Container>
  )
}