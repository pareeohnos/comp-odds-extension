self["webpackHotUpdatevine_reviews"]("content_scripts/content-0",{

/***/ "./content/scripts.ts":
/*!****************************!*\
  !*** ./content/scripts.ts ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

if (document.body.classList.contains("single-product")) {
    var _document_querySelector, _document_querySelector1, _document_querySelector2;
    console.log("Calculating odds");
    const cost = parseFloat((_document_querySelector = document.querySelector(".woocommerce-Price-amount > span")) === null || _document_querySelector === void 0 ? void 0 : _document_querySelector.nextSibling.textContent);
    const totalTickets = parseInt((_document_querySelector1 = document.querySelector(".wcl-progress-meter .max")) === null || _document_querySelector1 === void 0 ? void 0 : _document_querySelector1.textContent);
    const ticketsLeft = parseInt((_document_querySelector2 = document.querySelector(".wcl-progress-meter .sold")) === null || _document_querySelector2 === void 0 ? void 0 : _document_querySelector2.textContent.replace("Tickets available: ", ""));
    const instantWinsTable = document.querySelector("table");
    let instantWinsLeft = 0;
    if (instantWinsTable) {
        instantWinsLeft = Array.from(instantWinsTable.querySelectorAll("tr td.winner")).filter((el)=>el.textContent === "-").length;
    }
    chrome.runtime.sendMessage({
        cost,
        totalTickets,
        ticketsLeft,
        instantWinsLeft
    });
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
/******/ 	__webpack_require__.h = () => ("5e6e605df683efcfd248")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=content-0.94bf1ecde9b7dd3e6c40.js.map