import styled from 'styled-components'
import { flexboxRow } from '../../styles/helpers'

export const FormWrapper = styled.div`
  ${flexboxRow}
  height: 50px
  justify-content: center
  align-content: center
  margin: 2rem
`

export const Button = styled.button`
  display:inline-block
  padding:0.35em 1.2em
  border:0.1em solid #FFFFFF
  border-radius:0.12em
  box-sizing: border-box
  text-decoration:none
  font-family:'Roboto',sans-serif
  font-weight:300
  color:#FFFFFF
  text-align:center
  tansition: all 0.2s

  &:hover{
     color:#000000
     background-color:#FFFFFF
  }

`

export const Input = styled.input`
  width: auto
  margin: 5px
`