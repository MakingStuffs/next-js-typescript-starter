import Document, { Html, Head, Main, NextScript } from "next/document";

class PoaApp extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PoaApp;
