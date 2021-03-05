import * as React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { GlobalStyle } from '../styles'

export const query = graphql`
  query GET_DATA {
    allStripePrice {
      edges {
        node {
          id
          unit_amount
          product {
            name
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo />
      <GlobalStyle />
      <Header />
      <Layout stipeData={data.allStripePrice.edges[0].node} />
    </>
  )
}

export default IndexPage
