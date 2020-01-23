webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var AboutPage = function AboutPage() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, "This is about us page");
};

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export header */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(21);


var header = function header() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/", className: "btn btn-default" }, "Home"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/about", className: "btn btn-default" }, "About"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/contact", className: "btn btn-default" }, "Contact"));
};

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var ContactPage = function ContactPage() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, "This is Contact Us page.");
};

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var HomePage = function HomePage() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { textAlign: "center", color: "#f8f8ff", width: "100%", padding: "30px 0", backgroundColor: "#000000" } }, "Elicit is dedicated to the creation & maintaining of community connections between groups and individuals whose lives are enmeshed in the music, art, and entertainment industry. Our priority is to facilitate the support of bands, groups, and people involved in order to spread their creative work and personal message.  We work for the Aspiring and Inspiring.");
};

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var App = function App(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("header", null), props.children);
};

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(64);



__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__router__["a" /* AppRouter */], null), document.getElementById("root"));

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(104);




var AppRouter = function AppRouter() {
    //browserHistory
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Router"], { history: __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/", component: __WEBPACK_IMPORTED_MODULE_3__app__["a" /* App */] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], { component: __WEBPACK_IMPORTED_MODULE_2__components__["c" /* HomePage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/", component: __WEBPACK_IMPORTED_MODULE_2__components__["c" /* HomePage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/about", component: __WEBPACK_IMPORTED_MODULE_2__components__["a" /* AboutPage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/contact", component: __WEBPACK_IMPORTED_MODULE_2__components__["b" /* ContactPage */] })));
};

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_about__ = __webpack_require__(100);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__about_about__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header__ = __webpack_require__(101);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(102);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(103);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__home_home__["a"]; });





/***/ })

},[54]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fib3V0L2Fib3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvaG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFFekIsSUFBZ0IsWUFBc0M7QUFDakQsV0FDSCxrRUFJUjtBQUFDLENBTk0sQzs7Ozs7Ozs7QUNGUDtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNLO0FBRTlCLElBQWEsU0FBc0M7QUFDOUMsV0FDSCxrRUFDSSxxREFBSyxzREFBRyxJQUFJLEtBQVUsV0FBa0IscUJBQWEsU0FDckQscURBQUssc0RBQUcsSUFBUyxVQUFVLFdBQWtCLHFCQUFjLFVBQzNELHFEQUFLLHNEQUFHLElBQVcsWUFBVSxXQUFrQixxQkFHM0Q7QUFBQyxDQVJNLEM7Ozs7Ozs7O0FDSFA7QUFBQTtBQUFBO0FBQStCO0FBRXpCLElBQWtCLGNBQXNDO0FBQ25ELFdBQ0gsa0VBSVI7QUFBQyxDQU5NLEM7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFBO0FBQStCO0FBRXpCLElBQWUsV0FBc0M7QUFDaEQsV0FDSCw4REFBVSxPQUFFLEVBQVcsV0FBUyxVQUFPLE9BQVUsV0FBTyxPQUFRLFFBQVMsU0FBVSxVQUFpQixpQkFBYSxlQU16SDtBQUFDLENBUk0sQzs7Ozs7Ozs7QUNGUDtBQUFBO0FBQUE7QUFBK0I7QUFHekIsSUFBVSxNQUFpQyxhQUFVO0FBRWhELFdBQ0gsOERBQWMsV0FBWSxlQUN0QiwrREFBVSxPQUNKLE1BR2xCO0FBQUMsQ0FSTSxDOzs7Ozs7OztBQ0hQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNPO0FBQ0Q7QUFFN0IsaURBQU8sQ0FDWCxxREFBVSw0REFBRyxPQUNMLFNBQWUsZUFDekIsUzs7Ozs7Ozs7QUNQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDMEM7QUFDVDtBQUNwQztBQUV0QixJQUFnQixZQUFzQztBQUN4QztBQUNULFdBQ0gscURBQU8sd0RBQVEsU0FBZ0IsZ0VBQzNCLHFEQUFNLHVEQUFLLE1BQUksS0FBVSxXQUFLLHFEQUMxQixxREFBVyw0REFBVSxXQUFjLGtFQUNuQyxxREFBTSx1REFBSyxNQUFJLEtBQVUsV0FBYyxrRUFDdkMscURBQU0sdURBQUssTUFBUyxVQUFVLFdBQWUsbUVBQzdDLHFEQUFNLHVEQUFLLE1BQVcsWUFBVSxXQUloRDtBQUFDLENBWk0sQzs7Ozs7Ozs7QUNMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ0U7QUFDRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBYm91dFBhZ2U6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIFRoaXMgaXMgYWJvdXQgdXMgcGFnZVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9hYm91dC9hYm91dC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBoZWFkZXI6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiID5Ib21lPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiID5BYm91dDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiID5Db250YWN0PC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWN0UGFnZTogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PHt9PiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgVGhpcyBpcyBDb250YWN0IFVzIHBhZ2UuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZVBhZ2U6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOlwiY2VudGVyXCIsIGNvbG9yOlwiI2Y4ZjhmZlwiLCB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmc6IFwiMzBweCAwXCIsIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgIEVsaWNpdCBpcyBkZWRpY2F0ZWQgdG8gdGhlIGNyZWF0aW9uICYgbWFpbnRhaW5pbmcgb2YgY29tbXVuaXR5IGNvbm5lY3Rpb25zIGJldHdlZW4gZ3JvdXBzIGFuZCBpbmRpdmlkdWFscyB3aG9zZSBsaXZlcyBhcmUgZW5tZXNoZWQgaW4gdGhlIG11c2ljLCBhcnQsIGFuZCBlbnRlcnRhaW5tZW50IGluZHVzdHJ5LiBPdXIgcHJpb3JpdHkgaXMgdG8gZmFjaWxpdGF0ZSB0aGUgc3VwcG9ydCBvZiBiYW5kcywgZ3JvdXBzLCBhbmQgcGVvcGxlIGludm9sdmVkIGluIG9yZGVyIHRvIHNwcmVhZCB0aGVpciBjcmVhdGl2ZSB3b3JrIGFuZCBwZXJzb25hbCBtZXNzYWdlLiAgV2Ugd29yayBmb3IgdGhlIEFzcGlyaW5nIGFuZCBJbnNwaXJpbmcuXHJcbiAgICBcclxuICAgICAgICA8L2Rpdj5cclxuIFxyXG4gICAgKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hvbWUvaG9tZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8e30+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aGVhZGVyIC8+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgQXBwUm91dGVyIH0gZnJvbSBcIi4vcm91dGVyXCI7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8QXBwUm91dGVyIC8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXHJcbik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXgudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIGJyb3dzZXJIaXN0b3J5LCBJbmRleFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBBYm91dFBhZ2UsIENvbnRhY3RQYWdlLCBIb21lUGFnZSB9IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vYXBwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwUm91dGVyOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8e30+ID0gKCkgPT4ge1xyXG4gICAgLy9icm93c2VySGlzdG9yeVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fT4gXHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXBwfT5cclxuICAgICAgICAgICAgICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17SG9tZVBhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWVQYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWJvdXRcIiBjb21wb25lbnQ9e0Fib3V0UGFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvbnRhY3RcIiBjb21wb25lbnQ9e0NvbnRhY3RQYWdlfSAvPlxyXG4gICAgICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIDwvUm91dGVyPlxyXG4gICAgKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yb3V0ZXIudHN4IiwiZXhwb3J0ICogZnJvbSBcIi4vYWJvdXQvYWJvdXRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vaGVhZGVyL2hlYWRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb250YWN0L2NvbnRhY3RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vaG9tZS9ob21lXCI7XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9pbmRleC50c3giXSwic291cmNlUm9vdCI6IiJ9