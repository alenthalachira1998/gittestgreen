import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
    
<link href="https://fonts.googleapis.com/css2?family=Metrophobic&family=Montserrat:ital,wght@0,200;0,400;0,500;1,100;1,200;1,500;1,600&display=swap" rel="stylesheet"/>
</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument