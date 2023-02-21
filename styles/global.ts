import styled, { createGlobalStyle } from 'styled-components'
import { globalTypography } from 'atoms/typography'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        overflow: hidden;
        font-family: ${({ theme }) => theme.typography.fonts.body};
        color: ${({ theme }) => theme.color.element.strong};
        background-color: ${({ theme }) => theme.color.background.default} !important;
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
    ${globalTypography}
`

export const Sidebar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  fill: white;
`

export const Body = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.header`
  
`

export const Container = styled.section`
  
`