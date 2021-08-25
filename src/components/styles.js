import styled from 'styled-components'
import { flexboxColumn } from '../styles/helpers'
import { BaseCss } from '../styles/base'
import { BOTTLE_GREEN, CONCRETE } from '../styles/colors'

export const ComponentsWrapper = styled.div`
  ${BaseCss}
  background-color: ${BOTTLE_GREEN} 
  color: ${CONCRETE}
  width: 100%
  height: 100vh
  ${flexboxColumn}
  justify-content: center
`

export const H1 = styled.h1`
  margin-top: 1rem
  text-align: center
`