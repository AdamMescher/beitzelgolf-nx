import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '@beitzelgolf-nx/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Beitzel Golf</title>
      </Head>
      <main>
        <GlobalStyle />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
