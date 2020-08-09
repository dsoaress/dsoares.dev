module.exports = {
  siteMetadata: {
    title: `Daniel Soares`,
    description: `Estudante de Ciência Política e Sociologia na Universidade
    Federal da Integração Latino-America (UNILA), em Foz do Iguaçu, atualmente
    cursando o último ano da graduação. Aqui tem um pouco sobre mim e um blog
    blog onde abordo assuntos do meu interesse.`,
    siteUrl: 'https://dsoares.me'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`
    //   }
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              showCaptions: true,
              quality: 80,
              withWebp: true
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daniel Soares`,
        short_name: `Daniel Soares`,
        start_url: `/`,
        background_color: `#E61F5B`,
        theme_color: `#E61F5B`,
        display: `fullscreen`
        // icon: `static/images/icon.png`
      }
    },
    `gatsby-plugin-offline`
  ]
}
