require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: 'Maiti',
    description: 'Una sonrisa que te acompaña, una sonrisa que te cuida',
    author: '@maxiarrieta',
    siteUrl: 'https://cocky-almeida-12e889.netlify.app/'

  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-stripe',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-stripe',
      options: {
        objects: ['Price', 'Product', 'Sku', 'Subscription'],
        secretKey: process.env.STRIPE_SK
      }
    }
  ]
}
