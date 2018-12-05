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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./asserts/css/styles.less":
/*!*********************************!*\
  !*** ./asserts/css/styles.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/next-seo/index.js":
/*!**************************************!*\
  !*** ./components/next-seo/index.js ***!
  \**************************************/
/*! exports provided: default, ArticleJsonLd, BlogJsonLd, CourseJsonLd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meta_defaultSEO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meta/defaultSEO */ "./components/next-seo/meta/defaultSEO.jsx");
/* harmony import */ var _jsonld_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsonld/article */ "./components/next-seo/jsonld/article.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleJsonLd", function() { return _jsonld_article__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _jsonld_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsonld/blog */ "./components/next-seo/jsonld/blog.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogJsonLd", function() { return _jsonld_blog__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _jsonld_course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jsonld/course */ "./components/next-seo/jsonld/course.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CourseJsonLd", function() { return _jsonld_course__WEBPACK_IMPORTED_MODULE_3__["default"]; });





/* harmony default export */ __webpack_exports__["default"] = (_meta_defaultSEO__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./components/next-seo/jsonld/article.jsx":
/*!************************************************!*\
  !*** ./components/next-seo/jsonld/article.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_markup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/markup */ "./components/next-seo/utils/markup.js");
var _jsxFileName = "/Users/chenlili/react_0608/next-react-mobx-antd-boilerplate/components/next-seo/jsonld/article.jsx";





var ArticleJsonLd = function ArticleJsonLd(_ref) {
  var url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description,
      publisherName = _ref.publisherName,
      publisherLogo = _ref.publisherLogo;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Article\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"".concat(url, "\"\n    },\n    \"headline\": \"").concat(title, "\",\n    \"image\": [\n      ").concat(images.map(function (image) {
    return "\"".concat(image, "\"");
  }), "\n     ],\n    \"datePublished\": \"").concat(datePublished, "\",\n    \"dateModified\": \"").concat(dateModified || datePublished, "\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"").concat(authorName, "\"\n    },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"").concat(publisherName, "\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"").concat(publisherLogo, "\"\n      }\n    },\n    \"description\": \"").concat(description, "\"\n  }");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: Object(_utils_markup__WEBPACK_IMPORTED_MODULE_3__["default"])(jslonld),
    key: "jsonld-article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }));
};

ArticleJsonLd.defaultProps = {
  dateModified: null
};
ArticleJsonLd.propTypes = {
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  datePublished: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  dateModified: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  authorName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  publisherName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  publisherLogo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ArticleJsonLd);

/***/ }),

/***/ "./components/next-seo/jsonld/blog.jsx":
/*!*********************************************!*\
  !*** ./components/next-seo/jsonld/blog.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_markup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/markup */ "./components/next-seo/utils/markup.js");
var _jsxFileName = "/Users/chenlili/react_0608/next-react-mobx-antd-boilerplate/components/next-seo/jsonld/blog.jsx";





var BlogJsonLd = function BlogJsonLd(_ref) {
  var url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Blog\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"".concat(url, "\"\n    },\n    \"headline\": \"").concat(title, "\",\n    \"image\": [\n      ").concat(images.map(function (image) {
    return "\"".concat(image, "\"");
  }), "\n     ],\n    \"datePublished\": \"").concat(datePublished, "\",\n    \"dateModified\": \"").concat(dateModified || datePublished, "\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"").concat(authorName, "\"\n    },\n    \"description\": \"").concat(description, "\"\n  }");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: Object(_utils_markup__WEBPACK_IMPORTED_MODULE_3__["default"])(jslonld),
    key: "jsonld-blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
};

BlogJsonLd.defaultProps = {
  dateModified: null
};
BlogJsonLd.propTypes = {
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  datePublished: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  dateModified: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  authorName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BlogJsonLd);

/***/ }),

/***/ "./components/next-seo/jsonld/course.jsx":
/*!***********************************************!*\
  !*** ./components/next-seo/jsonld/course.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_markup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/markup */ "./components/next-seo/utils/markup.js");
var _jsxFileName = "/Users/chenlili/react_0608/next-react-mobx-antd-boilerplate/components/next-seo/jsonld/course.jsx";





var CourseJsonLd = function CourseJsonLd(_ref) {
  var courseName = _ref.courseName,
      description = _ref.description,
      providerName = _ref.providerName,
      providerUrl = _ref.providerUrl;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Course\",\n    \"name\": \"".concat(courseName, "\",\n    \"description\": \"").concat(description, "\",\n    \"provider\": {\n      \"@type\": \"Organization\",\n      \"name\": \"").concat(providerName, "\"").concat(providerUrl ? ",\n      \"sameAs\": \"".concat(providerUrl, "\"") : '', "\n    }\n  }");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: Object(_utils_markup__WEBPACK_IMPORTED_MODULE_3__["default"])(jslonld),
    key: "jsonld-course",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }));
};

CourseJsonLd.defaultProps = {
  providerUrl: null
};
CourseJsonLd.propTypes = {
  courseName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  providerName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  providerUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CourseJsonLd);

/***/ }),

/***/ "./components/next-seo/meta/buildTags.jsx":
/*!************************************************!*\
  !*** ./components/next-seo/meta/buildTags.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/chenlili/react_0608/next-react-mobx-antd-boilerplate/components/next-seo/meta/buildTags.jsx";

var templateTitle = null;

var buildTags = function buildTags(config) {
  var tagsToRender = [];

  if (config.titleTemplate) {
    templateTitle = config.titleTemplate;
  }

  if (config.title) {
    var updatedTitle = config.title;

    if (templateTitle) {
      updatedTitle = templateTitle.replace(/%s/g, function () {
        return updatedTitle;
      });
    }

    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
      key: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, updatedTitle));
  }

  for (var key in config) {
    var val = config[key];
    var keys = ['titleTemplate', 'X-UA-Compatible', 'title', 'canonical', 'noindex', 'description', 'openGraph', 'twitter', 'facebook'];

    if (!keys.includes(key)) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        key: key,
        name: key,
        content: val,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }));
    }
  }

  if (!config.noindex) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      key: "robots",
      name: "robots",
      content: "index,follow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }));
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      key: "googlebot",
      name: "googlebot",
      content: "index,follow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }));
  } else {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      key: "robots",
      name: "robots",
      content: "noindex,nofollow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }));
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      key: "googlebot",
      name: "googlebot",
      content: "noindex,nofollow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }));
  }

  if (config['X-UA-Compatible']) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      key: "http-Equiv",
      httpEquiv: "X-UA-Compatible",
      content: config['X-UA-Compatible'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }));
  }

  if (config.description) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      key: "description",
      name: "description",
      content: config.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }));
  }

  if (config.hasOwnProperty('twitter')) {
    if (config.twitter.cardType) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        key: "twitter:card",
        name: "twitter:card",
        content: config.twitter.cardType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }));
    }

    if (config.twitter.site) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        key: "twitter:site",
        name: "twitter:site",
        content: config.twitter.site,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }));
    }

    if (config.twitter.handle) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        key: "twitter:creator",
        name: "twitter:creator",
        content: config.twitter.handle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }));
    }
  }

  if (config.hasOwnProperty('openGraph')) {
    if (config.openGraph.url) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        key: "og:url",
        property: "og:url",
        content: config.openGraph.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }));
    }

    if (config.openGraph.type) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        key: "og:type",
        property: "og:type",
        content: config.openGraph.type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }));
    }

    if (config.openGraph.title) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        key: "og:title",
        property: "og:title",
        content: config.openGraph.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }));
    }

    if (config.openGraph.description) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        key: "og:description",
        property: "og:description",
        content: config.openGraph.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }));
    }

    if (config.openGraph.images && config.openGraph.images.length) {
      config.openGraph.images.forEach(function (image, index) {
        tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
          key: "og:image:0".concat(index),
          property: "og:image",
          content: image.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }));

        if (image.alt) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
            key: "og:image:alt0".concat(index),
            property: "og:image:alt",
            content: image.alt,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          }));
        }

        if (image.width) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
            key: "og:image:width0".concat(index),
            property: "og:image:width",
            content: image.width,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            },
            __self: this
          }));
        } else if (config.openGraph.defaultImageWidth) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
            key: "og:image:width0".concat(index),
            property: "og:image:width",
            content: config.openGraph.defaultImageWidth,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110
            },
            __self: this
          }));
        }

        if (image.height) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
            key: "og:image:height".concat(index),
            property: "og:image:height",
            content: image.height,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120
            },
            __self: this
          }));
        } else if (config.openGraph.defaultImageHeight) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
            key: "og:image:height".concat(index),
            property: "og:image:height",
            content: config.openGraph.defaultImageHeight,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          }));
        }
      });
    }

    if (config.openGraph.locale) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        key: "og:locale",
        property: "og:locale",
        content: config.openGraph.locale,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }));
    }
  }

  if (config.canonical) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      rel: "canonical",
      href: config.canonical,
      key: "canonical",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }));
  }

  return tagsToRender;
};

/* harmony default export */ __webpack_exports__["default"] = (buildTags);

/***/ }),

/***/ "./components/next-seo/meta/defaultSEO.jsx":
/*!*************************************************!*\
  !*** ./components/next-seo/meta/defaultSEO.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _buildTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buildTags */ "./components/next-seo/meta/buildTags.jsx");
var _jsxFileName = "/Users/chenlili/react_0608/next-react-mobx-antd-boilerplate/components/next-seo/meta/defaultSEO.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var DefaultSeo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DefaultSeo, _React$Component);

  function DefaultSeo(props) {
    var _this;

    _classCallCheck(this, DefaultSeo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DefaultSeo).call(this, props));

    if (!props.config) {
      throw new Error('[next-seo] You must supply an SEO configuration');
    }

    return _this;
  }

  _createClass(DefaultSeo, [{
    key: "render",
    value: function render() {
      var config = this.props.config;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, Object(_buildTags__WEBPACK_IMPORTED_MODULE_3__["default"])(config));
    }
  }]);

  return DefaultSeo;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

DefaultSeo.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DefaultSeo);

/***/ }),

/***/ "./components/next-seo/utils/markup.js":
/*!*********************************************!*\
  !*** ./components/next-seo/utils/markup.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var markup = function markup(jsonld) {
  return {
    __html: jsonld
  };
};

/* harmony default export */ __webpack_exports__["default"] = (markup);

/***/ }),

/***/ "./components/view/Footer.js":
/*!***********************************!*\
  !*** ./components/view/Footer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/chenlili/react_0608/next-react-mobx-antd-boilerplate/components/view/Footer.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ['footer', 'footer-main'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
});

/***/ }),

/***/ "./components/view/Header.js":
/*!***********************************!*\
  !*** ./components/view/Header.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "./components/next-seo/index.js");
/* harmony import */ var _seo_home_seo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../seo/home-seo.js */ "./seo/home-seo.js");
var _jsxFileName = "/Users/chenlili/react_0608/next-react-mobx-antd-boilerplate/components/view/Header.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'nav nav-main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_seo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    config: _seo_home_seo_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), "Hello,nextjs,boilerplate\u3002");
});

/***/ }),

/***/ "./components/view/Layout.js":
/*!***********************************!*\
  !*** ./components/view/Layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/view/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/view/Footer.js");
/* harmony import */ var _asserts_css_styles_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../asserts/css/styles.less */ "./asserts/css/styles.less");
/* harmony import */ var _asserts_css_styles_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_asserts_css_styles_less__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/chenlili/react_0608/next-react-mobx-antd-boilerplate/components/view/Layout.js";

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
 * @file: 页面布局组件
 */





var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: WWW_URL, WORKER_URL, SERVICE_URL, EVENT_URL, FRONTEND_URL, APP_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WWW_URL", function() { return WWW_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKER_URL", function() { return WORKER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_URL", function() { return SERVICE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_URL", function() { return EVENT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRONTEND_URL", function() { return FRONTEND_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_URL", function() { return APP_URL; });
var WWW_URL = "http://dev-www.wanshifu.com/";
var WORKER_URL = "http://dev-worker.wanshifu.com/";
var SERVICE_URL = "http://dev-b.wanshifu.com/";
var EVENT_URL = "http://dev-event.wanshifu.com/";
var FRONTEND_URL = "http://dev-frontend.wanshifu.com/";
var APP_URL = "http://dev-apps.wanshifu.com/";

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_view_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/view/Layout */ "./components/view/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config/index.js");
var _dec,
    _class,
    _jsxFileName = "/Users/chenlili/react_0608/next-react-mobx-antd-boilerplate/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Index = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])('homeStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  _createClass(Index, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req = _ref.req;
      console.log('------getInitialProps--Index-----');
      return {
        isServer: !!req
      };
    }
  }]);

  function Index(props) {
    _classCallCheck(this, Index);

    console.log('------constructor--Index-----');
    return _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_view_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"])) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Index));

/***/ }),

/***/ "./seo/home-seo.js":
/*!*************************!*\
  !*** ./seo/home-seo.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "title": 'Next.js boilerplate' // 社交平台相关 万师傅社交平台需要后期自定义
  // "openGraph": {
  //   "type": 'website',
  //   "locale": 'en_IE',
  //   "url": 'https://www.url.ie/',
  //   "title": 'Open Graph Title',
  //   "description": 'Open Graph Description',
  //   "defaultImageWidth": 1200,
  //   "defaultImageHeight": 1200,
  //   // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next (see note top of README.md)
  //   "images": [
  //     {
  //       "url": 'https://www.example.ie/og-image-01.jpg',
  //       "width": 800,
  //       "height": 600,
  //       "alt": 'Og Image Alt',
  //     },
  //     {
  //       "url": 'https://www.example.ie/og-image-02.jpg',
  //       "width": 900,
  //       "height": 800,
  //       "alt": 'Og Image Alt',
  //     },
  //     { "url": 'https://www.example.ie/og-image-03.jpg' },
  //     { "url": 'https://www.example.ie/og-image-04.jpg' },
  //   ],
  //   "site_name": 'SiteName',
  // },
  // "twitter": {
  //   "handle": '@handle',
  //   "site": '@site',
  //   "cardType": 'summary_large_image',
  // },

});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map