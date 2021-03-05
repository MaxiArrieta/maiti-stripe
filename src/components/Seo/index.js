import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = () => {
  const { site } = useStaticQuery(graphql`
    {
      site: site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <Helmet
      htmlAttributes={{
        lang: 'es'
      }}
      title={site.siteMetadata.title}
      titleTemplate={site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: site.siteMetadata.description
        },
        {
          property: 'og:title',
          content: site.siteMetadata.title
        },
        {
          property: 'og:description',
          content: site.siteMetadata.description
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author
        },
        {
          name: 'twitter:title',
          content: site.siteMetadata.title
        },
        {
          name: 'twitter:description',
          content: site.siteMetadata.description
        }
      ]}
    />
  )
}

export default Seo
