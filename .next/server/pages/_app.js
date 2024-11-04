(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Preloader.js

const Preloader = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "preloader",
        className: "preloaded",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "line"
        })
    });
};
/* harmony default export */ const components_Preloader = (Preloader);

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Switcher.js



const colors = [
    {
        id: 1,
        name: "yellow"
    },
    {
        id: 2,
        name: "green"
    },
    {
        id: 3,
        name: "red"
    },
    {
        id: 4,
        name: "blue"
    },
    {
        id: 5,
        name: "orange"
    },
    {
        id: 6,
        name: "yellowgreen"
    },
    {
        id: 7,
        name: "pink"
    },
    {
        id: 8,
        name: "goldenrod"
    }
];
const Switcher = ()=>{
    const [color, setColor] = (0,external_react_.useState)("yellow");
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: `css/skins/${color}.css`
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "switcher",
                className: toggle ? "open" : "close",
                style: {
                    display: "block"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "content-switcher",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "COLOR SWITCHER"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            children: colors.map((color)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        title: color.name,
                                        className: "color",
                                        onClick: ()=>setColor(color.name),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: `assets/styleswitcher/${color.name}.png`,
                                            alt: color.name
                                        })
                                    }, color.id)
                                }))
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "hideSwitcher",
                            onClick: ()=>setToggle(false),
                            children: "\xd7"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "showSwitcher",
                className: `styleSecondColor ${toggle ? "close" : "open"}`,
                onClick: ()=>setToggle(true),
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fa fa-cog"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Switcher = (Switcher);

;// CONCATENATED MODULE: ./src/SalimovHead.js


const SalimovHead = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Ufuk Atıcı | Back-end Developer"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: "As a web backend developer based in Eskişehir, I create effective solutions using modern programming languages such as PHP, Go, and .NET. With 3 years of experience, I specialize in developing robust and scalable web applications with various frameworks. I stay updated with industry best practices to deliver customized solutions tailored to client needs. Visit my CV to learn more about my projects!"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: "Web backend developer, PHP developer, Go developer, .NET developer, Eskişehir web developer, web application development, scalable web solutions, software development, Modern programming languages, Frameworks in PHP/Go/.NET, custom web applications, Software engineering, Freelance web developer, Professional developer CV, backend technologies"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                href: "assets/logos/favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossOrigin: ""
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                href: "https://fonts.googleapis.com/css2?family=Livvic:wght@100;200;300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap",
                rel: "stylesheet"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "css/devicon.min.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "css/all.min.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "css/bootstrap.min.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "css/swiper-bundle.min.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "css/animate.min.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "css/jquery.mCustomScrollbar.min.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "css/style.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                type: "text/css",
                href: "css/styleswitcher.css"
            })
        ]
    });
};
/* harmony default export */ const src_SalimovHead = (SalimovHead);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.js






const App = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(src_SalimovHead, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Switcher, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Preloader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1592));
module.exports = __webpack_exports__;

})();