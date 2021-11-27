import Head from 'next/head';

import Layout from '../components/shared/Layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const connectionString = `https://maps.googleapis.com/maps/api/js?key=${process.env.google_maps_api}`;

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <script src={connectionString} async defer></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
