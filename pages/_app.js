/*
 * @file: 全局注入store，用作状态保留页面 （经测试react生命周期仅在首次进入调用）
 */

import App from "next/app";
import React from "react";
import withStore from "../stores/withStore";
import { Provider } from "mobx-react";
import NextSeo from "next-seo";
import SEO from "../seo/base-seo.js";

class MyApp extends App {
	render() {
		const { Component, pageProps, mobxStore } = this.props;
		return (
			<>
				<NextSeo config={SEO}></NextSeo>
				<Provider {...mobxStore}>
					<Component {...pageProps} />
				</Provider>
			</>
		);
	}
}

export default withStore(MyApp);
