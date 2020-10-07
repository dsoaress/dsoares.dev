export default {
  name: 'siteSettings',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      title: 'Links',
      name: 'links',
      type: 'object',
      fields: [
        { name: 'Instagram', type: 'string', title: 'Instagram' },
        { name: 'Github', type: 'string', title: 'Github' },
        { name: 'Whatsapp', type: 'string', title: 'Whatsapp' },
        { name: 'Email', type: 'string', title: 'Email' }
      ]
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
      title: 'name',
      media: 'image'
    }
  }
}
