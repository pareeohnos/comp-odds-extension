self["webpackHotUpdatevine_reviews"]("content_scripts/content-0",{

/***/ "./content/scripts.ts":
/*!****************************!*\
  !*** ./content/scripts.ts ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

if (document.body.classList.contains("single-product")) {
    var _document_querySelector, _document_querySelector1;
    console.log("Calculating odds");
    const totalTickets = parseInt((_document_querySelector = document.querySelector(".wcl-progress-meter .max")) === null || _document_querySelector === void 0 ? void 0 : _document_querySelector.textContent);
    const ticketsLeft = parseInt((_document_querySelector1 = document.querySelector(".wcl-progress-meter .sold")) === null || _document_querySelector1 === void 0 ? void 0 : _document_querySelector1.textContent.replace("Tickets available: ", ""));
    const instantWinsTable = document.querySelector("table");
    let instantWinsLeft = 0;
    if (instantWinsTable) {
        instantWinsLeft = Array.from(instantWinsTable.querySelectorAll("tr td.winner")).filter((el)=>el.textContent === "-").length;
    }
    console.log("GOT THIS");
    console.log(totalTickets, ticketsLeft, instantWinsLeft);
}


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
/******/ 	__webpack_require__.h = () => ("b60d7ac5ca063290d5f4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=content-0.b54236ad222b0340432c.js.map