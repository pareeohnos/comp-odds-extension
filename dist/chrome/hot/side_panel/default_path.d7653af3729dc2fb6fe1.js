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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./sidebar/styles.css");
/* harmony import */ var _hooks_useOdds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useOdds */ "./sidebar/hooks/useOdds.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var _s = __webpack_require__.$Refresh$.signature();


function SidebarApp() {
    _s();
    const { odds } = (0,_hooks_useOdds__WEBPACK_IMPORTED_MODULE_2__["default"])();
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: Object.keys(odds).map((numberOfTickets)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [
                    numberOfTickets,
                    " tickets: ",
                    JSON.stringify(odds[numberOfTickets])
                ]
            }, numberOfTickets, true, {
                fileName: "/Users/ahooper/Documents/Work/personal/extensions/comp_odds/sidebar/SidebarApp.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this))
    }, void 0, false, {
        fileName: "/Users/ahooper/Documents/Work/personal/extensions/comp_odds/sidebar/SidebarApp.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(SidebarApp, "mMUxadnopCCPGaDZvDLtSQ8PU6M=", false, function() {
    return [
        _hooks_useOdds__WEBPACK_IMPORTED_MODULE_2__["default"]
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

/***/ }),

/***/ "./sidebar/hooks/useOdds.tsx":
/*!***********************************!*\
  !*** ./sidebar/hooks/useOdds.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();

const calculatOdds = (numberOfTickets, message)=>{
    const totalCost = message.cost * numberOfTickets;
    const chanceOfWinning = numberOfTickets / message.totalTickets;
    const currentChanceOfWinning = numberOfTickets / (message.totalTickets - message.ticketsLeft);
    let chanceOfInstantWin = 0;
    if (message.instantWinsLeft > 0) {
        const chanceOfLosing = (message.ticketsLeft - numberOfTickets) / message.ticketsLeft;
        chanceOfInstantWin = chanceOfLosing ^ message.instantWinsLeft;
    }
    return {
        totalCost,
        chanceOfWinning,
        currentChanceOfWinning,
        chanceOfInstantWin: 0
    };
};
const useOdds = ()=>{
    _s();
    const [odds, setOdds] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const onMessage = (message)=>{
        console.log('processing message');
        setOdds({
            1: calculatOdds(1, message)
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        chrome.runtime.onMessage.addListener(onMessage);
        return ()=>{
            chrome.runtime.onMessage.removeListener(onMessage);
        };
    }, []);
    return {
        odds
    };
};
_s(useOdds, "J8lyOAluFdUkYSFbOyO7dDMcZ5U=");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useOdds);


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
/******/ 	__webpack_require__.h = () => ("94bf1ecde9b7dd3e6c40")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=default_path.d7653af3729dc2fb6fe1.js.map