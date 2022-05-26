/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <link href="../../public/favicon.png" type="image/png" />
        </Head>
        <body>
          <Main /> <NextScript />
        </body>
      </Html>
    );
  }
}