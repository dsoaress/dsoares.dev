module.exports = {
  siteMetadata: {
    title: `Daniel Soares`,
    description: `Estudante de Ciência Política e Sociologia na Universidade 
    Federal da Integração Latino-America (UNILA), em Foz do Iguaçu, atualmente 
    cursando o último ano da graduação. Aqui tem um apanhado da minha (ainda 
    bem pequena) produção acadêmica e um blog com assuntos relacionados (ou não).`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daniel Soares`,
        short_name: `Daniel Soares`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Rubik Mono One`,
          },
          {
            family: `Rubik`,
            variants: [`400`, `400i`, `700`, `700i`],
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
