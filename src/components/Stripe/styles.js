import styled from 'styled-components'
import { colors } from '../../styles'
import { Link as LinkButton } from 'gatsby'

export const Link = styled(LinkButton)`
  margin: 15px 0;
  text-decoration: none;
  color: black;
`

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  min-width: 290px;

  h2 {
    text-align: center;
    font-size: 3.8rem;
    margin-top: 50px;
  }
  p {
    text-align: center;
    margin: 15px 0;
    font-size: 2.4rem;
  }
`
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
