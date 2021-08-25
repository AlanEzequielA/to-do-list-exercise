import { css } from 'styled-components'
import { CONCRETE } from './colors'

export const typography = css`
  @font-face {
    font-family: "Roboto"
    src: url("/static/fonts/Roboto/Roboto-Regular.ttf") format("truetype")
    font-weight: normal
    font-style: normal
  }
  
  @font-face {
    font-family: "Roboto"
    src: url("/static/fonts/Roboto/Roboto-Bold.ttf") format("truetype")
    font-weight: bold
    font-style: normal
  }
  
  @font-face {
    font-family: "Roboto"
    src: url("/static/fonts/Roboto/Roboto-Italic.ttf") format("truetype")
    font-weight: normal
    font-style: italic
  }
  
  @font-face {
    font-family: "Roboto"
    src: url("/static/fonts/Roboto/Roboto-BoldItalic.ttf") format("truetype")
    font-weight: bold
    font-style: italic
  }
  
  body {
    font-family: Roboto
    background: ${CONCRETE}
  }
`
