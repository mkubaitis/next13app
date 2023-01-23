import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nx13app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="description" content="sample site"></meta>
        <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
      </Head>
      <span>nx app running</span>
    </>
  );
}
