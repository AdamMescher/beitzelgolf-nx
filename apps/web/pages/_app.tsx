import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { GlobalStyle } from '@beitzelgolf-nx/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
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
