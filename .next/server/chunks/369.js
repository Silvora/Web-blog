"use strict";
exports.id = 369;
exports.ids = [369];
exports.modules = {

/***/ 3116:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

let baseURL = "http://api.757909.top/blog";
// if(process.env == 'production'){
//     baseURL="http://192.168.0.0.1/api"
// }
const http = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: baseURL,
    timeout: 15000
});
// 添加请求拦截器
http.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
http.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    return response.data;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (http);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cj": () => (/* binding */ GetTag),
/* harmony export */   "io": () => (/* binding */ GetMarkdown),
/* harmony export */   "qw": () => (/* binding */ GetClass)
/* harmony export */ });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3116);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_http__WEBPACK_IMPORTED_MODULE_0__]);
_http__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function GetTag() {
    return _http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].request */ .Z.request({
        url: "/tag",
        method: "Get"
    });
}
function GetClass() {
    return _http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].request */ .Z.request({
        url: "/class",
        method: "Get"
    });
}
function GetMarkdown() {
    return _http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].request */ .Z.request({
        url: "/markdown",
        method: "Get"
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;