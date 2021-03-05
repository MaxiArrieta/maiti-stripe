import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Head, LogoImg } from './styles'

const Header = () => {
  const { logo } = useStaticQuery(graphql`
    query GET_LOGO {
      logo: file(relativePath: {eq: "logo-invertido.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <Head>
      <LogoImg fluid={logo.childImageSharp.fluid} />
    </Head>
  )
}

export default Header
