export default {
  name: 'siteSettings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Título do site',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text'
    },
    {
      name: 'lang',
      title: 'Idioma',
      type: 'string'
    },
    {
      name: 'gtm',
      title: 'Id do Google Tag Manager',
      type: 'string'
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'image',
      title: 'Foto de perfil',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      title: 'Links',
      name: 'links',
      type: 'links'
    },
    {
      name: 'shortBio',
      title: 'Bio curta',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: []
        }
      ]
    },
    {
      name: 'bio',
      title: 'Bio longa',
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
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
