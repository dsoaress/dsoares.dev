export default {
  title: 'Bio curta',
  name: 'bioShort',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Imagem',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'text',
      title: 'Corpo',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: []
        }
      ]
    }
  ]
}
