import { createGlobalStyle } from 'styled-components'
import { reset } from './reset'
import { typography } from './typography'

export const BaseCss = createGlobalStyle`
  ${reset}
  ${typography}
`
