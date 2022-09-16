import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

function document() {
  return (
    <Html>
      <Head>
        <title>Quotes Cafe</title>
        <meta name="description" content="Created with Love" />
        <link rel="icon" href="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Tenor+Sans&family=Swanky+and+Moo+Moo&family=Vollkorn:ital,wght@0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default document;
