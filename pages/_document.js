/*
 * @file: 全局引入样式，外部组件库页面 (经测试不存react在生命周期)
 */

import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link href="https://www.geekjc.com/favicon.ico" rel="shortcut icon"></link>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
