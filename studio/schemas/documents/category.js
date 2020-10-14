import { AiOutlineTags } from 'react-icons/ai'

export default {
  name: 'category',
  title: 'Categorias',
  type: 'document',
  icon: AiOutlineTags,
  fields: [
    {
      name: 'title',
      title: 'Categoria',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text'
    }
  ]
}
