"use strict";
self["webpackHotUpdatevine_reviews"]("side_panel/default_path",{

/***/ "./sidebar/SidebarApp.tsx":
/*!********************************!*\
  !*** ./sidebar/SidebarApp.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SidebarApp)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/card */ "./components/ui/card.tsx");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./sidebar/styles.css");
/* harmony import */ var _hooks_useOdds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useOdds */ "./sidebar/hooks/useOdds.tsx");
/* harmony import */ var _components_odds_odds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/odds/odds */ "./components/odds/odds.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var _s = __webpack_require__.$Refresh$.signature();




function SidebarApp() {
    _s();
    const { odds } = (0,_hooks_useOdds__WEBPACK_IMPORTED_MODULE_3__["default"])();
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Object.keys(odds).map((numberOfTickets)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardTitle, {
                            children: [
                                numberOfTickets,
                                " ticket(s)"
                            ]
                        }, void 0, true, {
                            fileName: "/Users/ahooper/Documents/Work/personal/extensions/comp_odds/sidebar/SidebarApp.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/ahooper/Documents/Work/personal/extensions/comp_odds/sidebar/SidebarApp.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_odds_odds__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            odd: odds[numberOfTickets]
                        }, void 0, false, {
                            fileName: "/Users/ahooper/Documents/Work/personal/extensions/comp_odds/sidebar/SidebarApp.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/ahooper/Documents/Work/personal/extensions/comp_odds/sidebar/SidebarApp.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                ]
            }, numberOfTickets, true, {
                fileName: "/Users/ahooper/Documents/Work/personal/extensions/comp_odds/sidebar/SidebarApp.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this))
    }, void 0, false);
}
_s(SidebarApp, "mMUxadnopCCPGaDZvDLtSQ8PU6M=", false, function() {
    return [
        _hooks_useOdds__WEBPACK_IMPORTED_MODULE_3__["default"]
    ];
});
_c = SidebarApp;
var _c;
__webpack_require__.$Refresh$.register(_c, "SidebarApp");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c608cbca4349a328f0ea")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=default_path.a53cb9a9eef1653e5c2b.js.map