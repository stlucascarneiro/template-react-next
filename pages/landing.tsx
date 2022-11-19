import Head from 'next/head'
// Assets

// Types
interface IProps {
  data: string
}

export async function getServerSideProps() {
  const data = 'Hello World'
  return { props: { data } }
}

export default function Home({ data } : IProps) {
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <body>
        {data}
      </body>
    </>
  )
}