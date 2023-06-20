import { createGlobalStyle } from 'styled-components'
import { fadeInOpacity } from '../animations/fadeInOpacity'
import Roboto from '../fonts/Roboto.ttf'
import Nunito from '../fonts/Nunito.ttf'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, html {
  animation: ${fadeInOpacity} 500ms ease-in;
  }
  p, span, h1, h2, h3, h4, h5, h6 {
    font-family: Roboto, serif;
  }
  ol {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  @font-face {
    font-family: Roboto;
    src: url(${Roboto}) format('truetype');
  }
  @font-face {
    font-family: Nunito;
    src: url(${Nunito}) format('truetype');
  }
`