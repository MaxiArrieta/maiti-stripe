import React from 'react'
import { Div, DivButton, Link } from './styles'

const ResultStripe = ({ result }) => {
  return (
    <div>
      <Div>
        <h2>
          {
            result
              ? 'Tu compra se ha realiza con exito'
              : 'Lo siento, Hubo un error'
          }
        </h2>
        <p>
          {
            result
              ? 'Esperemos que disfrute de Maiti.'
              : 'Hubo un error al procesar tu pago, por favor intentelo de nuevo.'
          }
        </p>
        <p>Muchas Gracias.</p>
        {
          !result &&
            <Link Link to='/'>
              <DivButton>
                <span />
                <span>VOLVER A INTENTAR</span>
              </DivButton>
            </Link>
        }
      </Div>
    </div>
  )
}

export default ResultStripe
