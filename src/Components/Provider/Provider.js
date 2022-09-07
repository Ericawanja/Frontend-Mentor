// eslint-disable-next-line no-unused-vars
import { ThemeProvider, createGlobalStyle } from "styled-components";
import {theme } from './theme'

const GlobalStyle = createGlobalStyle`
*, *::before, *::after{
    box-sizing:border-box;
    margin:0;
    padding:0;
}
ul,ol{
    list-style:none;
}
html {
    font-size: 16px;
}

body {
    font-family: ${theme.fonts.primary};
    font-size: 0.875rem;
    counter-reset: tab;
}

a {
    text-decoration: none;
    color: inherit;
}
`;



function Provider({children}) {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        {children}
    </ThemeProvider>
  )
}

export default Provider