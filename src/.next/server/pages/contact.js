"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ form_FormOne)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@emailjs/browser"
const browser_namespaceObject = require("@emailjs/browser");
var browser_default = /*#__PURE__*/__webpack_require__.n(browser_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Alert"
const Alert_namespaceObject = require("react-bootstrap/Alert");
var Alert_default = /*#__PURE__*/__webpack_require__.n(Alert_namespaceObject);
;// CONCATENATED MODULE: ./common/components/form/FormOne.jsx




const Result = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Alert_default()), {
        variant: "success",
        className: "success-msg",
        children: "Your Message has been successfully sent."
    });
};
const FormOne = ()=>{
    const form = (0,external_react_.useRef)();
    const { 0: result , 1: showresult  } = (0,external_react_.useState)(false);
    const sendEmail = (e)=>{
        e.preventDefault();
        browser_default().sendForm("service_g3aufzu", "template_p9x0n54", form.current, "9L_sRsO66U253zcxC").then((result)=>{
            console.log(result.text);
        }, (error)=>{
            console.log(error.text);
        });
        form.current.reset();
        showresult(true);
    };
    setTimeout(()=>{
        showresult(false);
    }, 5000);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "axil-section-gapTop axil-contact-form-area",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "title mb--10",
                children: "Send Us a Message"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "b3 mb--30",
                children: "Your email address will not be published. All the fields are required."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                ref: form,
                onSubmit: sendEmail,
                className: "axil-contact-form contact-form--1 row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 col-md-4 col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "contact-name",
                                    children: "Your Name"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    name: "contact-name",
                                    id: "contact-name",
                                    type: "text",
                                    required: true
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 col-md-4 col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "contact-phone",
                                    children: "Phone"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    name: "contact-phone",
                                    id: "contact-phone",
                                    required: true
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 col-md-4 col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "contact-email",
                                    children: "Your Email"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    name: "contact-email",
                                    id: "contact-email",
                                    type: "email",
                                    required: true
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "contact-message",
                                    children: "Your Message"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                    name: "contact-message",
                                    id: "contact-message",
                                    required: true
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "form-submit",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                name: "submit",
                                type: "submit",
                                id: "submit",
                                className: "axil-button button-rounded btn-primary",
                                children: "Submit"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "form-group",
                            children: result ? /*#__PURE__*/ jsx_runtime_.jsx(Result, {}) : null
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const form_FormOne = (FormOne);


/***/ }),

/***/ 6894:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_components_instagram_InstagramOne__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8497);
/* harmony import */ var _common_elements_breadcrumb_breadcrumbTwo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1343);
/* harmony import */ var _common_elements_footer_FooterThree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4414);
/* harmony import */ var _common_elements_header_HeaderOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8215);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6307);
/* harmony import */ var _common_components_sidebar_WidgetCategory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7196);
/* harmony import */ var _common_components_sidebar_WidgetSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1021);
/* harmony import */ var _common_components_sidebar_WidgetPostList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1491);
/* harmony import */ var _common_components_sidebar_WidgetSocialShare__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5921);
/* harmony import */ var _common_components_form_FormOne__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(289);
/* harmony import */ var _common_elements_head_HeadTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7315);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_elements_header_HeaderOne__WEBPACK_IMPORTED_MODULE_4__, _common_components_sidebar_WidgetCategory__WEBPACK_IMPORTED_MODULE_6__]);
([_common_elements_header_HeaderOne__WEBPACK_IMPORTED_MODULE_4__, _common_components_sidebar_WidgetCategory__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const ContactUs = ({ allPosts  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_elements_head_HeadTitle__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                pageTitle: "Contact Us"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_elements_header_HeaderOne__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                postData: allPosts,
                pClass: "header-light header-sticky header-with-shadow"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_elements_breadcrumb_breadcrumbTwo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: "Contact Us",
                paragraph: "Wherever & whenever you need us. We are here for you – contact us for all your support needs.<br /> be it technical, general queries or information support.",
                bgImae: "url('images/bg/bg-image-3.webp')"
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
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "axil-about-us",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "inner",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    children: "Say Hello! "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Donec cursus dolor vitae congue consectetur. Morbi mattis viverra felis. Etiam dapibus id turpis at sagittis. Cras mollis mi vel ante ultricies, id ullamcorper mi pulvinar. Proin bibendum ornare risus, lacinia cursus quam condimentum id. Curabitur auctor massa eget porttitor molestie. Aliquam imperdiet dolor nec metus pulvinar sollicitudin. "
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            children: "Aliquam iaculis at odio ut tempus"
                                                        }),
                                                        ". Suspendisse blandit luctus dui, a consequat mauris mollis id. Sed in ante at tortor malesuada imperdiet. Vestibulum sed gravida nibh. Nulla suscipit congue lorem, id tempor ipsum molestie sit amet. Nulla ultricies vitae erat in tincidunt. Maecenas tempus quam et ipsum elementum, a efficitur lectus tincidunt. Praesent diam elit, tincidunt ac tempus vulputate, aliquet viverra mauris. Etiam eu nunc efficitur, sagittis est ut, fringilla neque. Ut interdum eget lorem eget congue. Ut nec arcu placerat, mattis urna vel, consequat diam. Sed in leo in dolor suscipit molestie. "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "primary-color",
                                                    children: [
                                                        "Email: ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "mailto:mepress@gmail.com",
                                                            children: "mepress@gmail.com"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_form_FormOne__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-4 col-xl-4 mt_md--40 mt_sm--40",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "sidebar-inner",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_sidebar_WidgetCategory__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            catData: allPosts
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_sidebar_WidgetSearch__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_sidebar_WidgetPostList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            postData: allPosts
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_sidebar_WidgetSocialShare__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_instagram_InstagramOne__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                parentClass: "bg-color-grey"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_elements_footer_FooterThree__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactUs);
async function getStaticProps() {
    const allPosts = (0,_lib_api__WEBPACK_IMPORTED_MODULE_5__/* .getAllPosts */ .Bd)([
        "id",
        "title",
        "featureImg",
        "featured",
        "date",
        "slug",
        "cate",
        "cate_img",
        "author_img",
        "author_name",
        "post_views", 
    ]);
    return {
        props: {
            allPosts
        }
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [16,894,579,665,315,573,215,414,343], () => (__webpack_exec__(6894)));
module.exports = __webpack_exports__;

})();