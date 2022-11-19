import { createGlobalStyle } from 'styled-components'
import typography from 'atoms/typography'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        overflow: hidden;
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.color.element.strong};
        // background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${'images/bg2-filter.png'});
        // background-size: cover;
        // background-position: right top;
    }
    #__next{
        width: 100%;
        height: 100vh;
        display: flex;
        position: relative;
        overflow: hidden;
    }
    ${typography}
`
