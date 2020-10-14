export default {
  title: 'Corpo',
  name: 'portableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Título', value: 'h2' },
        { title: 'Título 2', value: 'h3' },
        { title: 'Título 3', value: 'h4' },
        { title: 'Título 4', value: 'h5' },
        { title: 'Título 5', value: 'h6' },
        { title: 'Citação', value: 'blockquote' }
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Negrito', value: 'strong' },
          { title: 'Itálico', value: 'em' },
          { title: 'Code', value: 'code' }
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              }
            ]
          }
        ]
      }
    },
    {
      type: 'imageBlock'
    }
  ]
}
