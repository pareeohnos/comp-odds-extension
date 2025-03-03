"use strict";
self["webpackHotUpdatevine_reviews"]("side_panel/default_path",{

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
            1: calculatOdds(1, message),
            10: calculatOdds(10, message),
            20: calculatOdds(20, message),
            30: calculatOdds(30, message),
            40: calculatOdds(40, message),
            50: calculatOdds(50, message)
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
/******/ 	__webpack_require__.h = () => ("12755e7f0881212e9cb4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=default_path.c46165b17910544d1ad1.js.map