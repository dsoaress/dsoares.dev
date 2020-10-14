export default {
  name: 'imageBlock',
  title: 'Imagem',
  type: 'image',
  fields: [
    {
      title: 'Legenda',
      name: 'caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Texto alternativo',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
