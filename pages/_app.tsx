import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
// Config
import theme from 'theme'
import GlobalStyle, { Sidebar } from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react'
// Components
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getChakraTheme } from 'chakra'
import { Navbar, Logo } from 'components'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())

const chakraTheme = extendTheme(getChakraTheme())

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>My new cool app</title>
      </Head>
      <GlobalStyle />
      <ChakraBaseProvider theme={chakraTheme}>
        <Sidebar>
          <Logo/>
          <Navbar/>
        </Sidebar>
        <Component {...pageProps} />
      </ChakraBaseProvider>
    </ThemeProvider>
  )
}