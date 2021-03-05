import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Div, Image, DivButton } from './styles'

const Layout = ({ stipeData }) => {
  const [stripe, setStripe] = useState(null)

  const { image } = useStaticQuery(graphql`
    query GET_IMAGES {      
      image: file(relativePath: {eq: "maiti.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  useEffect(() => {
    setStripe(window.Stripe(process.env.STRIPE_PK))
  }, [])

  const handleClick = async (e) => {
    e.preventDefault()

    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: stipeData.id, quantity: 1 }],
      mode: 'subscription',
      successUrl: process.env.SUCCESS_REDIRECT,
      cancelUrl: process.env.CANCEL_REDIRECT
    })
    if (error) {
      throw error
    }
  }

  return (
    <section>
      <Div>
        <div>
          <Image fluid={image.childImageSharp.fluid} />
        </div>
        <div>
          <article>
            <p>
              USD $5,99 al mes.{'\n'}Incluye dos meses de prueba sin
              costo.
            </p>
            <p>
              Los pagos se procesarán internacionalmente. Es posible que
              se apliquen comisiones bancarias adicionales.
            </p>
            <p>
              Al hacer clic en el botón INICIAR MEMBRESIA,
              aceptas nuestros
              <a
                href='https://maitillc.com/politica-de-privacidad/'
                target='_blank'
                rel='noreferrer'
              >
                <span>
                  {' '}Términos de uso {' '}
                </span>
              </a>
              y nuestra
              <a
                href='https://maitillc.com/politica-de-privacidad/'
                target='_blank'
                rel='noreferrer'
              >
                <span>
                  {' '}Declaración de privacidad.
                </span>
              </a>
              <br />
              declaras que tienes más de 18 años y aceptas que Maiti
              continuará tu membresia de manera automática y que,
              hasta que la canceles, te facturará el cargo mensual
              (actualmente de USD $5,99 ) a través de la forma de pago
              elegida. Puedes cancelarla en cualquier momento para evitar
              cargos en el futuro. Para hacerlo, ve a Inicio despliega el
              menu lateral y haz clic en Cancelar membresia.
            </p>
          </article>
        </div>
        <div>
          <DivButton onClick={(e) => handleClick(e)}>
            <span />
            <span>INICIAR MEMBRESIA</span>
          </DivButton>
        </div>
      </Div>
    </section>
  )
}

export default Layout
