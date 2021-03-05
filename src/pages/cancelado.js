import React from 'react'
import Header from '../components/Header'
import Seo from '../components/Seo'
import ResultStripe from '../components/Stripe'
import { GlobalStyle } from '../styles'

const cancelado = () => {
  return (
    <>
      <Seo />
      <GlobalStyle />
      <Header />
      <ResultStripe result={false} />
    </>
  )
}

export default cancelado
