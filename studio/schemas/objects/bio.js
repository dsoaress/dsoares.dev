export default {
  title: 'Bio longa',
  name: 'bio',
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
