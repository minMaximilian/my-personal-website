import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${Props => Props.theme.primaryMono};
    color: ${Props => Props.theme.textColour};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.50s linear;
  }
  #root {
    padding-top: 4rem;

    @media only screen and (min-width: 1024px) {
      padding-top: 0rem;
    }
  }
`