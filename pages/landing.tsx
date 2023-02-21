import { Button } from '@chakra-ui/react'
import Head from 'next/head'
import { Body } from '../styles/global'
// Assets

// Types
interface IProps {
  data: string
}

export async function getServerSideProps() {
  return { props: { data: 'Hello World!' } }
}

export default function Home({ data } : IProps) {
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <Body>
        <Button variant='secondary'>B</Button>
      </Body>
    </>
  )
}