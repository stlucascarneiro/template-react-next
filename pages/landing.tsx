import Head from 'next/head'
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
      <div>
        {data}
      </div>
    </>
  )
}