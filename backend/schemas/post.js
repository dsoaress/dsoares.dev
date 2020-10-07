export default {
  name: 'post',
  title: '💌 Post',
  type: 'document',
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
    // {
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: {type: 'author'}
    // },
    {
      name: 'mainImage',
      title: 'Imagem em destaque',
      type: 'image',
      options: {
        hotspot: true
      }
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
      title: 'Corpo',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
