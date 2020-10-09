// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
import { FiSettings } from 'react-icons/fi'

export default () =>
  S.list()
    .title('Conteúdo')
    .items([
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(
        listItem => !['siteSettings'].includes(listItem.getId())
      ),
      S.listItem()
        .title('Configurações')
        .icon(FiSettings)
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        )
      // Add a visual divider (optional)
    ])
