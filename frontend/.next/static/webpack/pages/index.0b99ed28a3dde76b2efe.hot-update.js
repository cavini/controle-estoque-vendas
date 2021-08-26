self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/Login/Login.tsx":
/*!************************************!*\
  !*** ./Components/Login/Login.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.module.css */ "./Components/Login/login.module.css");
/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_login_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Usuario\\Desktop\\Projetos\\controle-estoque-vendas\\frontend\\Components\\Login\\Login.tsx";


function Login() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      display: "flex",
      height: "50vh",
      justifyContent: "center",
      width: "100%",
      border: "2px solid violet",
      padding: "4% 0"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().callToAction),
      style: {
        border: "1px solid teal",
        minWidth: "30%",
        maxWidth: "40%"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "mais praticidade para organizar o seu estoque!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().loginWrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "".concat((_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().header), " primary"),
        children: "Seja bem vindo!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        action: "submit",
        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().loginForm),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "".concat((_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().userName), " ").concat((_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().loginInput)),
          type: "email",
          placeholder: "Nome de Usu\xE1rio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "".concat((_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().userPassword), " ").concat((_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().loginInput)),
          type: "password",
          placeholder: "Senha"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
_c = Login;

var _c;

$RefreshReg$(_c, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Mb2dpbi9Mb2dpbi50c3giXSwibmFtZXMiOlsiTG9naW4iLCJkaXNwbGF5IiwiaGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsImJvcmRlciIsInBhZGRpbmciLCJzdHlsZSIsIm1pbldpZHRoIiwibWF4V2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUM5QixzQkFDRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUVMQyxZQUFNLEVBQUUsTUFGSDtBQUdMQyxvQkFBYyxFQUFFLFFBSFg7QUFJTEMsV0FBSyxFQUFFLE1BSkY7QUFLTEMsWUFBTSxFQUFFLGtCQUxIO0FBTUxDLGFBQU8sRUFBRTtBQU5KLEtBRFQ7QUFBQSw0QkFVRTtBQUNFLGVBQVMsRUFBRUMsdUVBRGI7QUFFRSxXQUFLLEVBQUU7QUFBRUYsY0FBTSxFQUFFLGdCQUFWO0FBQTRCRyxnQkFBUSxFQUFFLEtBQXRDO0FBQTZDQyxnQkFBUSxFQUFFO0FBQXZELE9BRlQ7QUFBQSw2QkFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQWdCRTtBQUFLLGVBQVMsRUFBRUYsdUVBQWhCO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxZQUFLQSxpRUFBTCxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLGNBQU0sRUFBQyxRQUFiO0FBQXNCLGlCQUFTLEVBQUVBLG9FQUFqQztBQUFBLGdDQUNFO0FBQ0UsbUJBQVMsWUFBS0EsbUVBQUwsY0FBdUJBLHFFQUF2QixDQURYO0FBRUUsY0FBSSxFQUFDLE9BRlA7QUFHRSxxQkFBVyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU1FO0FBQ0UsbUJBQVMsWUFBS0EsdUVBQUwsY0FBMkJBLHFFQUEzQixDQURYO0FBRUUsY0FBSSxFQUFDLFVBRlA7QUFHRSxxQkFBVyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQ0Q7S0FuQ3VCUCxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBiOTllZDI4YTNkZGU3NmIyZWZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9sb2dpbi5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGhlaWdodDogXCI1MHZoXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGJvcmRlcjogXCIycHggc29saWQgdmlvbGV0XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCI0JSAwXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmNhbGxUb0FjdGlvbn1cclxuICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkIHRlYWxcIiwgbWluV2lkdGg6IFwiMzAlXCIsIG1heFdpZHRoOiBcIjQwJVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aDE+bWFpcyBwcmF0aWNpZGFkZSBwYXJhIG9yZ2FuaXphciBvIHNldSBlc3RvcXVlITwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubG9naW5XcmFwcGVyfT5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtgJHtzdHlsZS5oZWFkZXJ9IHByaW1hcnlgfT5TZWphIGJlbSB2aW5kbyE8L2gzPlxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGUubG9naW5Gb3JtfT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLnVzZXJOYW1lfSAke3N0eWxlLmxvZ2luSW5wdXR9YH1cclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIGRlIFVzdcOhcmlvXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS51c2VyUGFzc3dvcmR9ICR7c3R5bGUubG9naW5JbnB1dH1gfVxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmhhXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==