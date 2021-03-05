import styled from 'styled-components'
import Img from 'gatsby-image'
import { colors } from '../../styles'

export const LogoImg = styled(Img)`
  height: 80px;
  width: 210px;

  &:hover{
    filter: drop-shadow(5px 5px 20px);
  }
`

export const Head = styled.header`
  height: 80px;
  width: 100%;
  min-width: 290px;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background-color: ${colors.azul};

`
