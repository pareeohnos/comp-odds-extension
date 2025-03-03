"use strict";
self["webpackHotUpdatevine_reviews"]("side_panel/default_path",{

/***/ "./components/odds/odds.tsx":
/*!**********************************!*\
  !*** ./components/odds/odds.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const StatBox = ({ label, value })=>{
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-xs text-muted-foreground",
                children: label
            }, void 0, false, {
                fileName: "/Users/ahooper/Documents/Work/personal/extensions/comp_odds/components/odds/odds.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-lg font-bold leading-none sm:text-3xl",
                children: value
            }, void 0, false, {
                fileName: "/Users/ahooper/Documents/Work/personal/extensions/comp_odds/components/odds/odds.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/Users/ahooper/Documents/Work/personal/extensions/comp_odds/components/odds/odds.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, undefined);
};
_c = StatBox;
const Odds = ({ odd })=>{
    const formatPercentage = (percentage)=>{
        return `${percentage.toFixed(4)}%`;
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid grid-cols-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "col-span-1",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatBox, {
                    label: "Total Cost",
                    value: `£${odd.totalCost}`
                }, void 0, false, {
                    fileName: "/Users/ahooper/Documents/Work/personal/extensions/comp_odds/components/odds/odds.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "/Users/ahooper/Documents/Work/personal/extensions/comp_odds/components/odds/odds.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "col-span-1",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatBox, {
                    label: "Current chance of winning",
                    value: formatPercentage(odd.currentChanceOfWinning)
                }, void 0, false, {
                    fileName: "/Users/ahooper/Documents/Work/personal/extensions/comp_odds/components/odds/odds.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "/Users/ahooper/Documents/Work/personal/extensions/comp_odds/components/odds/odds.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/Users/ahooper/Documents/Work/personal/extensions/comp_odds/components/odds/odds.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, undefined);
};
_c1 = Odds;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Odds);
var _c, _c1;
__webpack_require__.$Refresh$.register(_c, "StatBox");
__webpack_require__.$Refresh$.register(_c1, "Odds");


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
/******/ 	__webpack_require__.h = () => ("87334ec0cc85c9bc3d57")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=default_path.70e93dc140f11ea9e274.js.map