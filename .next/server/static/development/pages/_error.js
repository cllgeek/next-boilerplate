module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/chenlili/react_0608/next-react-mobx-antd-boilerplate/pages/_error.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * @file: 访问错误页面
 */


var Error =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Error, _React$Component);

  function Error() {
    _classCallCheck(this, Error);

    return _possibleConstructorReturn(this, _getPrototypeOf(Error).apply(this, arguments));
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3139784342" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3139784342" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3139784342" + " " + "shifu-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3139784342" + " " + "err404-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-3139784342",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "\u62B1\u6B49,\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3139784342" + " " + "p1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "\u6211\u4EEC\u5EFA\u8BAE\u4F60\u53EF\u4EE5\u5C1D\u8BD5\uFF1A"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3139784342",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "1.\u68C0\u67E5\u8BBF\u95EE\u5730\u5740\u662F\u5426\u9519\u8BEF"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3139784342",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "2.\u8FD4\u56DE", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "javascript:history.back(-1)",
        className: "jsx-3139784342",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "\u4E0A\u4E00\u9875")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3139784342",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "3.\u6211\u731C\u4F60\u60F3\u8981\uFF1A", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.geekjc.com/",
        className: "jsx-3139784342",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "\u8FD4\u56DE\u9996\u9875"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.geekjc.com/apdl?key=6",
        className: "jsx-3139784342",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "\u610F\u89C1\u53CD\u9988")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3139784342",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, this.props.statusCode ? "An error ".concat(this.props.statusCode, " occurred on server") : 'An error occurred on client'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3139784342",
        css: ".container.jsx-3139784342{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.content.jsx-3139784342{height:400px;text-align:center;}.shifu-img.jsx-3139784342{display:inline-block;width:240px;height:370px;background:url(/static/images/404_king.png) no-repeat;}.err404-img.jsx-3139784342{text-align:left;color:#000;display:inline-block;vertical-align:top;margin-top:18px;padding:128px 0 0 5px;background:url(/static/images/404.png) no-repeat;}.err404-img.jsx-3139784342 h4.jsx-3139784342{font-size:22px;font-weight:800;margin:0 0 30px 0;}.err404-img.jsx-3139784342 p.jsx-3139784342,.err404-img-503.jsx-3139784342 p.jsx-3139784342,.err404-img-500.jsx-3139784342 p.jsx-3139784342,.err404-img-502.jsx-3139784342 p.jsx-3139784342{font-size:14px;margin:10px 0;}.err404-img.jsx-3139784342 .p1.jsx-3139784342,.err404-img-503.jsx-3139784342 .p1.jsx-3139784342,.err404-img-500.jsx-3139784342 .p1.jsx-3139784342,.err404-img-502.jsx-3139784342 .p1.jsx-3139784342{margin:24px 0 20px 0;}.err404-img.jsx-3139784342 p.jsx-3139784342 a.jsx-3139784342,.err404-img-503.jsx-3139784342 p.jsx-3139784342 a.jsx-3139784342,.err404-img-500.jsx-3139784342 p.jsx-3139784342 a.jsx-3139784342,.err404-img-502.jsx-3139784342 p.jsx-3139784342 a.jsx-3139784342{margin-left:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVubGlsaS9yZWFjdF8wNjA4L25leHQtcmVhY3QtbW9ieC1hbnRkLWJvaWxlcnBsYXRlL3BhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ29CLEFBRytCLEFBTUwsQUFJUSxBQU1MLEFBU0QsQUFRQSxBQU9NLEFBTUosYUF2Q0MsRUFtQkYsQUFRRixDQWpCSCxDQThCYixDQTlDVSxHQVVJLEFBOEJkLEtBdkNXLENBZ0JZLEVBaUJ2QixFQTNCQSxBQW1Cb0IsRUFmTCxFQVRrQixXQVV1QixFQU1uQyxDQVNyQixrQkFSa0IsZ0JBQ00saUJBUHhCLEtBUW1ELG1DQWxCbkQsY0FtQkEiLCJmaWxlIjoiL1VzZXJzL2NoZW5saWxpL3JlYWN0XzA2MDgvbmV4dC1yZWFjdC1tb2J4LWFudGQtYm9pbGVycGxhdGUvcGFnZXMvX2Vycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBmaWxlOiDorr/pl67plJnor6/pobXpnaJcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHJlcywgZXJyIH0pIHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IG51bGw7XG4gICAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlmdS1pbWdcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyNDA0LWltZ1wiPlxuICAgICAgICAgICAgICAgIDxoND7mirHmrYks5L2g6K6/6Zeu55qE6aG16Z2i5LiN5a2Y5Zyo5oiW5bey5Yig6ZmkPC9oND5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMVwiPuaIkeS7rOW7uuiuruS9oOWPr+S7peWwneivle+8mjwvcD5cbiAgICAgICAgICAgICAgICA8cD4xLuajgOafpeiuv+mXruWcsOWdgOaYr+WQpumUmeivrzwvcD5cbiAgICAgICAgICAgICAgICA8cD4yLui/lOWbnlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDpoaXN0b3J5LmJhY2soLTEpXCI+5LiK5LiA6aG1PC9hPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD4zLuaIkeeMnOS9oOaDs+imge+8mlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ2Vla2pjLmNvbS9cIj7ov5Tlm57pppbpobU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5nZWVramMuY29tL2FwZGw/a2V5PTZcIj7mhI/op4Hlj43ppog8L2E+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc3RhdHVzQ29kZVxuICAgICAgICAgICAgICAgICAgICA/IGBBbiBlcnJvciAke3RoaXMucHJvcHMuc3RhdHVzQ29kZX0gb2NjdXJyZWQgb24gc2VydmVyYFxuICAgICAgICAgICAgICAgICAgICA6ICdBbiBlcnJvciBvY2N1cnJlZCBvbiBjbGllbnQnfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2hpZnUtaW1nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzcwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pbWFnZXMvNDA0X2tpbmcucG5nKSBuby1yZXBlYXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lcnI0MDQtaW1nIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTI4cHggMCAwIDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltYWdlcy80MDQucG5nKSBuby1yZXBlYXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lcnI0MDQtaW1nIGg0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAzMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lcnI0MDQtaW1nIHAsXG4gICAgICAgICAgLmVycjQwNC1pbWctNTAzIHAsXG4gICAgICAgICAgLmVycjQwNC1pbWctNTAwIHAsXG4gICAgICAgICAgLmVycjQwNC1pbWctNTAyIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lcnI0MDQtaW1nIC5wMSxcbiAgICAgICAgICAuZXJyNDA0LWltZy01MDMgLnAxLFxuICAgICAgICAgIC5lcnI0MDQtaW1nLTUwMCAucDEsXG4gICAgICAgICAgLmVycjQwNC1pbWctNTAyIC5wMSB7XG4gICAgICAgICAgICBtYXJnaW46IDI0cHggMCAyMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lcnI0MDQtaW1nIHAgYSxcbiAgICAgICAgICAuZXJyNDA0LWltZy01MDMgcCBhLFxuICAgICAgICAgIC5lcnI0MDQtaW1nLTUwMCBwIGEsXG4gICAgICAgICAgLmVycjQwNC1pbWctNTAyIHAgYSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/chenlili/react_0608/next-react-mobx-antd-boilerplate/pages/_error.js */",
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return {
        statusCode: statusCode
      };
    }
  }]);

  return Error;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./pages/_error.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_error.js */"./pages/_error.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_error.js.map