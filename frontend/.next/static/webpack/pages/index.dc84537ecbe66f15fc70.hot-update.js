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
      style: {
        width: "75%",
        border: "1px solid green",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "".concat((_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().header), " primary"),
        children: "Seja bem vindo!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
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
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "".concat((_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().userPassword), " ").concat((_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().loginInput)),
          type: "password",
          placeholder: "Senha"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Mb2dpbi9Mb2dpbi50c3giXSwibmFtZXMiOlsiTG9naW4iLCJkaXNwbGF5IiwiaGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsImJvcmRlciIsInBhZGRpbmciLCJzdHlsZSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQzlCLHNCQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRSxNQURKO0FBRUxDLFlBQU0sRUFBRSxNQUZIO0FBR0xDLG9CQUFjLEVBQUUsUUFIWDtBQUlMQyxXQUFLLEVBQUUsTUFKRjtBQUtMQyxZQUFNLEVBQUUsa0JBTEg7QUFNTEMsYUFBTyxFQUFFO0FBTkosS0FEVDtBQUFBLDRCQVVFO0FBQ0UsZUFBUyxFQUFFQyx1RUFEYjtBQUVFLFdBQUssRUFBRTtBQUFFRixjQUFNLEVBQUUsZ0JBQVY7QUFBNEJHLGdCQUFRLEVBQUUsS0FBdEM7QUFBNkNDLGdCQUFRLEVBQUU7QUFBdkQsT0FGVDtBQUFBLDZCQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGLGVBZ0JFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xMLGFBQUssRUFBRSxLQURGO0FBRUxDLGNBQU0sRUFBRSxpQkFGSDtBQUdMSixlQUFPLEVBQUUsTUFISjtBQUlMUyxxQkFBYSxFQUFFLFFBSlY7QUFLTEMsa0JBQVUsRUFBRTtBQUxQLE9BRFQ7QUFBQSw4QkFTRTtBQUFJLGlCQUFTLFlBQUtKLGlFQUFMLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixlQVVFO0FBQU0sY0FBTSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsRUFBRUEsb0VBQWpDO0FBQUEsZ0NBQ0U7QUFDRSxtQkFBUyxZQUFLQSxtRUFBTCxjQUF1QkEscUVBQXZCLENBRFg7QUFFRSxjQUFJLEVBQUMsT0FGUDtBQUdFLHFCQUFXLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBTUU7QUFDRSxtQkFBUyxZQUFLQSx1RUFBTCxjQUEyQkEscUVBQTNCLENBRFg7QUFFRSxjQUFJLEVBQUMsVUFGUDtBQUdFLHFCQUFXLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBDRDtLQTNDdUJQLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGM4NDUzN2VjYmU2NmYxNWZjNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuL2xvZ2luLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjUwdmhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCB2aW9sZXRcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjQlIDBcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGUuY2FsbFRvQWN0aW9ufVxyXG4gICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgdGVhbFwiLCBtaW5XaWR0aDogXCIzMCVcIiwgbWF4V2lkdGg6IFwiNDAlXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxoMT5tYWlzIHByYXRpY2lkYWRlIHBhcmEgb3JnYW5pemFyIG8gc2V1IGVzdG9xdWUhPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgd2lkdGg6IFwiNzUlXCIsXHJcbiAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZWVuXCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtgJHtzdHlsZS5oZWFkZXJ9IHByaW1hcnlgfT5TZWphIGJlbSB2aW5kbyE8L2gzPlxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGUubG9naW5Gb3JtfT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLnVzZXJOYW1lfSAke3N0eWxlLmxvZ2luSW5wdXR9YH1cclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIGRlIFVzdcOhcmlvXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS51c2VyUGFzc3dvcmR9ICR7c3R5bGUubG9naW5JbnB1dH1gfVxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmhhXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==