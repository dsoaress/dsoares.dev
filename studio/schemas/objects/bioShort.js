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
      type: 'imageBlock'
    },
    {
      name: 'text',
      type: 'simplePortableText'
    }
  ]
}
