import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
// Config
import theme from 'theme'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
// Components
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>My new cool app</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}