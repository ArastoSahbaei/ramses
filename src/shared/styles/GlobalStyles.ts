import { createGlobalStyle, keyframes } from 'styled-components'
import Roboto from '../fonts/Roboto.ttf'
import Nunito from '../fonts/Nunito.ttf'
export const rotateAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, html {
  background: radial-gradient(
    circle at 50% 50%,
    #00c281, #00c7d7
  );
  background-size: 200% 200%;
  animation: ${rotateAnimation} 180s linear infinite;
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

