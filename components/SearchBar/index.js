import { Form, Title, Input } from './styles'

export const SearchBar = () => {

  return(
    <Form>
      <Title>Specialized Search Engine</Title>
      <Input type='search' name='library' placeholder='Advanced Search' alt='Library search'/>
    </Form>
  )
}