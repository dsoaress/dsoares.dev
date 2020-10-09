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
      title: 'Links',
      name: 'links',
      type: 'links'
    },
    {
      title: 'Bio curta',
      name: 'bioShort',
      type: 'bioShort'
    },
    {
      title: 'Bio longa',
      name: 'bio',
      type: 'bio'
    },
    {
      title: 'Página 404',
      name: 'notFoundPage',
      type: 'notFoundPage'
    },
    {
      title: 'Easter egg',
      name: 'easterEgg',
      type: 'easterEgg'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
