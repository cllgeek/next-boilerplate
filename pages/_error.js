/*
 * @file: 访问错误页面
 */

import React from "react";

export default class Error extends React.Component {
	static getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null;
		return { statusCode };
	}

	// A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed "javascript:history.back(-1)"
	goBack = () => {
		window.history.back(-1);
	};

	render() {
		return (
			<div className="container">
				<div className="content">
					<div className="shifu-img"></div>
					<div className="err404-img">
						<h4>抱歉,你访问的页面不存在或已删除</h4>
						<p className="p1">我们建议你可以尝试：</p>
						<p>1.检查访问地址是否错误</p>
						<p>
							2.返回
							<a onClick={this.goBack}>上一页</a>
						</p>
						<p>
							3.我猜你想要：
							<a href="https://www.geekjc.com/">返回首页</a>
							<a href="https://www.geekjc.com/apdl?key=6">意见反馈</a>
						</p>
						<p>
							{this.props.statusCode
								? `An error ${this.props.statusCode} occurred on server`
								: "An error occurred on client"}
						</p>
					</div>
				</div>
				<style jsx>{`
					.container {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
					}
					.content {
						height: 400px;
						text-align: center;
					}
					.shifu-img {
						display: inline-block;
						width: 240px;
						height: 370px;
						background: url(/static/images/404_king.png) no-repeat;
					}
					.err404-img {
						text-align: left;
						color: #000;
						display: inline-block;
						vertical-align: top;
						margin-top: 18px;
						padding: 128px 0 0 5px;
						background: url(/static/images/404.png) no-repeat;
					}
					.err404-img h4 {
						font-size: 22px;
						font-weight: 800;
						margin: 0 0 30px 0;
					}
					.err404-img p,
					.err404-img-503 p,
					.err404-img-500 p,
					.err404-img-502 p {
						font-size: 14px;
						margin: 10px 0;
					}
					.err404-img .p1,
					.err404-img-503 .p1,
					.err404-img-500 .p1,
					.err404-img-502 .p1 {
						margin: 24px 0 20px 0;
					}
					.err404-img p a,
					.err404-img-503 p a,
					.err404-img-500 p a,
					.err404-img-502 p a {
						margin-left: 10px;
					}
				`}</style>
			</div>
		);
	}
}
