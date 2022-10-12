import Link from 'next/link'
import Head from 'next/head'

export default function Posts() {
  return (
    <>
        <Head>
            <title>Welcome to the Posts page</title>
        </Head>
        <h1>Welcome to the Posts page</h1>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
    </>
  );
}