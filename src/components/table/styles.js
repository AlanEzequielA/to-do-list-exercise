import styled from 'styled-components'

export const Table = styled.table`
`
export const Tdcheckbox = styled.td`
  height: 50px
  text-align: center
`

export const Td = styled.td`
  height: 50px
  text-align: center
  ${({checked}) => !checked && 'text-decoration:line-through font-style: italic' }
`

export const Th = styled.th`
  height: 50px
  text-align: center
`

export const DeleteButton = styled.button`
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
  transition: all 0.2s

  &:hover{
    color:#000000
    background-color: red
  }
`

export const EditButton = styled.button`
  display:inline-block
  padding:0.35em 1.2em
  border:0.1em solid #FFFFFF
  border-radius:0.12em
  box-sizing: border-box
  margin-right: 3px
  text-decoration:none
  font-family:'Roboto',sans-serif
  font-weight:300
  color:#FFFFFF
  text-align:center
  transition: all 0.2s

  &:hover{
    color:#000000
    background-color:#4e9af1
  }
`
