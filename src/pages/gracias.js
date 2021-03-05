import React from 'react'
import Header from '../components/Header'
import Seo from '../components/Seo'
import ResultStripe from '../components/Stripe'
import { GlobalStyle } from '../styles'

const gracias = () => {
  return (
    <>
      <Seo />
      <GlobalStyle />
      <Header />
      <ResultStripe result />
    </>
  )
}

export default gracias
