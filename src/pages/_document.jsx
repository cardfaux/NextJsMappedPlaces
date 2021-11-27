import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id='drawer-hook' />
          <div id='backdrop-hook' />
          <div id='modal-hook' />
          <NextScript />
        </body>
      </Html>
    );
  }
}
