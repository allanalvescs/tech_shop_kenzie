import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    header,main,footer,div,ul,li,p,h1,h2,h3,form,input,button,figure{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    } 
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
`