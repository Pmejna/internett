module.exports = {
  siteMetadata: {
    description: `Lokalny dostawca internetu światłowodowego na terenach powiatów pruszkowskiego, grodziskiego oraz nadarzyńskiego. Doprowadzenie szybkiego internetuświatłowodowego bezpośrednio do Twojego domu.`,
    author: `pmejna@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Internet Światłowodowy Internett`,
        short_name: `Internett`,
        start_url: `/`,
        background_color: `#FB2525`,
        theme_color: `#FB2525`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon-05.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins\:300,400,500,700`, // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
