import { BsFileEarmarkText } from 'react-icons/bs'

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: BsFileEarmarkText,
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text'
    },
    {
      name: 'mainImage',
      title: 'Imagem em destaque',
      type: 'imageBlock'
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'date',
      title: 'Data',
      type: 'date',
      calendarTodayLabel: 'Hoje'
    },
    {
      name: 'body',
      type: 'portableText'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}
