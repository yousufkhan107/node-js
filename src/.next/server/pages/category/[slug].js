"use strict";
(() => {
var exports = {};
exports.id = 24;
exports.ids = [24];
exports.modules = {

/***/ 366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BreadcrumbOne = ({ title  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "axil-breadcrumb-area breadcrumb-style-1 bg-color-grey",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "inner",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "page-title",
                            children: title
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadcrumbOne);


/***/ }),

/***/ 2217:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6307);
/* harmony import */ var _common_components_instagram_InstagramOne__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8497);
/* harmony import */ var _common_components_post_layout_PostLayoutTwo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(898);
/* harmony import */ var _common_elements_breadcrumb_breadcrumbOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(366);
/* harmony import */ var _common_elements_footer_FooterOne__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(960);
/* harmony import */ var _common_elements_head_HeadTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7315);
/* harmony import */ var _common_elements_header_HeaderOne__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8215);
/* harmony import */ var _common_components_sidebar_SidebarOne__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(958);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7249);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_components_post_layout_PostLayoutTwo__WEBPACK_IMPORTED_MODULE_3__, _common_elements_header_HeaderOne__WEBPACK_IMPORTED_MODULE_7__, _common_components_sidebar_SidebarOne__WEBPACK_IMPORTED_MODULE_8__, _common_utils__WEBPACK_IMPORTED_MODULE_9__]);
([_common_components_post_layout_PostLayoutTwo__WEBPACK_IMPORTED_MODULE_3__, _common_elements_header_HeaderOne__WEBPACK_IMPORTED_MODULE_7__, _common_components_sidebar_SidebarOne__WEBPACK_IMPORTED_MODULE_8__, _common_utils__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const PostCategory = ({ postData , allPosts  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_elements_head_HeadTitle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                pageTitle: "Category Archive"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_elements_header_HeaderOne__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                postData: allPosts
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_elements_breadcrumb_breadcrumbOne__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: postData[0].cate
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "axil-post-list-area axil-section-gap bg-color-white",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-8 col-xl-8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_post_layout_PostLayoutTwo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    dataPost: postData,
                                    show: "5"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-4 col-xl-4 mt_md--40 mt_sm--40",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_sidebar_SidebarOne__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    dataPost: allPosts
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_instagram_InstagramOne__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                parentClass: "bg-color-grey"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_elements_footer_FooterOne__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCategory);
async function getStaticProps({ params  }) {
    const postParams = params.slug;
    const allPosts = (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .getAllPosts */ .Bd)([
        "slug",
        "cate",
        "cate_img",
        "title",
        "featureImg",
        "date",
        "post_views",
        "read_time",
        "author_name",
        "author_social"
    ]);
    const getCategoryData = allPosts.filter((post)=>(0,_common_utils__WEBPACK_IMPORTED_MODULE_9__/* .slugify */ .lV)(post.cate) === postParams);
    const postData = getCategoryData;
    return {
        props: {
            postData,
            allPosts
        }
    };
}
async function getStaticPaths() {
    const posts = (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .getAllPosts */ .Bd)([
        "cate"
    ]);
    const paths = posts.map((post)=>({
            params: {
                slug: (0,_common_utils__WEBPACK_IMPORTED_MODULE_9__/* .slugify */ .lV)(post.cate)
            }
        }));
    return {
        paths,
        fallback: false
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1423:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2353:
/***/ ((module) => {

module.exports = import("luxon");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [16,894,579,665,315,573,215,141,344,960], () => (__webpack_exec__(2217)));
module.exports = __webpack_exports__;

})();