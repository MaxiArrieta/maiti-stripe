import React from 'react'
import Header from '../components/Header'
import Seo from '../components/Seo'
import { GlobalStyle } from '../styles'
import styled from 'styled-components'

const cancelado = () => {
  return (
    <>
      <Seo />
      <GlobalStyle />
      <Header />
      <Div>
        <h2>Lo siento, Hubo un error</h2>
        <p>
          Hubo un error al procesar tu pago, por favor intentelo de nuevo.
        </p>
        <p>Muchas Gracias.</p>
      </Div>
    </>
  )
}

export default cancelado

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;

  h2 {
    text-align: center;
    font-size: 3.8rem;
    margin-top: 50px;
  }
  p {
    text-align: center;
    margin-top: 15px;
    font-size: 2.4rem;
  }
`
