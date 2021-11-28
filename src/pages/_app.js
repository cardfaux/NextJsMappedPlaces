import Head from 'next/head';

import { AuthContextProvider } from '../context/auth-context';
import Layout from '../components/shared/Layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const connectionString = `https://maps.googleapis.com/maps/api/js?key=${process.env.google_maps_api}`;

  return (
    <AuthContextProvider>
      <Layout>
        <Head>
          <tittle>YourPlaces</tittle>
          <meta name='description' content='NextJS YourPlaces' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <script src={connectionString} async defer></script>
        </Head>

        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
