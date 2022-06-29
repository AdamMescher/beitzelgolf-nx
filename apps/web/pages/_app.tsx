import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { GlobalStyle } from '@beitzelgolf-nx/ui';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const ReactDOM = require('react-dom');
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

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
