import styled from 'styled-components'
import { colors } from '../../styles'
import Img from 'gatsby-image'

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: 12px;
  box-shadow: 5px 5px 9px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  span:first-child {
    background-color: ${colors.azul};
    width: 12px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    height: 52px;
  }
  span:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    border: 1px solid rgba(225, 223, 223, 0.96);
    width: 200px;
    height: 50px;
  }
  span {
    font-weight: bold;
    font-size: 1.5rem;
  }
  
  span:last-child:hover {
    border: 1px solid ${colors.azul};
  }

  &:hover {
    box-shadow: 5px 5px 9px 5px rgba(0, 0, 0, 0.2);
    background-color: ${colors.azul};
    color: #fff;
    transition: 0.5s ease-in-out;
  }

  &:hover span:last-child{
    border: 1px solid ${colors.azul}
  }
  
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;

  article{
    width: 60%;
    min-width: 290px;
  }
  
  p:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DDF;
    height: 60px;
  }

  p{
    margin: 30px 0;
    padding: 0 20px;
  }

  & > div{
    display: flex;
    justify-content: center;
  }

  p > a > span {
    color: ${colors.azul};
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }

`

export const Image = styled(Img)`
  height: 200px;
  width: 200px;
  min-width: 200px;
  border-radius: 50%;
  margin-top: 25px;

   &:hover{
    filter: drop-shadow(5px 5px 20px);
  }
`
