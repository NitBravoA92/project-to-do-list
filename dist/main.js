"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_to_do_list"] = self["webpackChunkproject_to_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  text-decoration: none;\r\n}\r\n\r\nbody,\r\nmain,\r\nsection {\r\n  width: 100%;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nsvg {\r\n  pointer-events: none;\r\n}\r\n\r\nbody {\r\n  background-color: #f2f2f2;\r\n  font-size: 14px;\r\n  color: #000;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-family: \"Open Sans\", \"Lucida Grande\", tahoma, verdana, arial, sans-serif;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 5rem 5% 3rem 5%;\r\n}\r\n\r\n#app {\r\n  width: 100%;\r\n  background-color: #fff;\r\n  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#app #title,\r\n#app #to-do-list .task,\r\n#clear-all-container,\r\n#new-task-entry {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  display: flex;\r\n  align-items: center;\r\n  border-bottom: 1px solid #d7d7d7;\r\n}\r\n\r\n#app #title,\r\n#app #to-do-list .task,\r\n#new-task-entry {\r\n  justify-content: space-between;\r\n  position: relative;\r\n}\r\n\r\n#app #to-do-list .task.focus {\r\n  background-color: #f9f98e;\r\n}\r\n\r\n#clear-all-container {\r\n  background-color: #f1f2f5;\r\n  justify-content: center;\r\n}\r\n\r\n#app #title {\r\n  font-weight: 500;\r\n  color: #4d4d4d;\r\n}\r\n\r\n#app #refresh {\r\n  background-color: transparent;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  rotate: 90deg;\r\n}\r\n\r\n#new-task-entry #inputTaskDescription {\r\n  width: 96%;\r\n  font-size: 1.25em;\r\n  font-weight: 300;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#new-task-entry #inputTaskDescription::placeholder {\r\n  font-weight: 300;\r\n  opacity: 0.5;\r\n  font-style: italic;\r\n}\r\n\r\n#new-task-entry #btnAddTask {\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n  pointer-events: auto;\r\n  padding: 0.2rem;\r\n}\r\n\r\n#app #to-do-list .task .task-content {\r\n  width: 95%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#app #to-do-list .task.focus .task-content {\r\n  width: 100%;\r\n}\r\n\r\n#app #to-do-list .task .mark-task {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  justify-content: center;\r\n  margin-right: 0.7rem;\r\n}\r\n\r\n#app #to-do-list .task .mark-task .task-check-status {\r\n  width: 1rem;\r\n  height: 1rem;\r\n}\r\n\r\n#app #to-do-list .task .task-description {\r\n  font-weight: 300;\r\n  width: 100%;\r\n  transition: background-color 0.3s ease-in-out;\r\n}\r\n\r\n#app #to-do-list .task.focus .task-description {\r\n  outline: none;\r\n}\r\n\r\n#app #to-do-list .task.completed .task-description {\r\n  opacity: 0.4;\r\n  text-decoration: line-through;\r\n}\r\n\r\n#app #to-do-list .task.focus.completed .task-description {\r\n  opacity: 1;\r\n  text-decoration: none;\r\n}\r\n\r\n#app #to-do-list .task .task-options {\r\n  width: 5%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n#app #to-do-list .task.focus .task-options {\r\n  width: 0;\r\n  display: none;\r\n}\r\n\r\n#app #to-do-list .task .remove-task {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0;\r\n  transform: translateY(-50%);\r\n  background-color: transparent;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  pointer-events: auto;\r\n  display: none;\r\n  opacity: 0;\r\n  margin-right: 0.8rem;\r\n  transition: opacity 0.2s linear;\r\n}\r\n\r\n.drag-icon {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 2px;\r\n}\r\n\r\n.drag-icon span {\r\n  width: 3.5px;\r\n  height: 3.5px;\r\n  border: none;\r\n  border-radius: 50%;\r\n  background-color: #d7d7d7;\r\n}\r\n\r\n#btn-clear-list {\r\n  background-color: transparent;\r\n  outline: none;\r\n  border: none;\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  cursor: pointer;\r\n  overflow: visible;\r\n  opacity: 0.5;\r\n  font-weight: 300;\r\n  color: #404040;\r\n  font-size: 1.27em;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n#btn-clear-list:hover {\r\n  opacity: 1;\r\n  text-decoration: underline;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  #app {\r\n    width: 70%;\r\n  }\r\n\r\n  #app #to-do-list .task .mark-task {\r\n    margin-right: 0.9rem;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/ToDoList.js":
/*!*************************!*\
  !*** ./src/ToDoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils.js */ \"./src/Utils.js\");\n\n\nclass ToDoList {\n  constructor() {\n    this.tasksList = [];\n  }\n\n  setTasksIds = () => {\n    const tasks = this.tasksList.map((task, i) => (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.taskObj)(task.description, task.completed, i + 1));\n    this.tasksList = (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.cloneCollection)(tasks);\n  };\n\n  renderTasksList = () => {\n    const listItems = this.tasksList.map((task) => (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.markUpTask)(task));\n    document.querySelector('#to-do-list').innerHTML = listItems.join('');\n    if (!(0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(this.tasksList)) {\n      this.generalEventHandlers();\n    }\n  };\n\n  createTask = (inputDesc) => {\n    const inputDescription = inputDesc.value;\n    if (!(0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(inputDescription)) {\n      const id = this.tasksList.length + 1;\n      const newTask = (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.taskObj)(inputDescription, false, id);\n      this.tasksList.push(newTask);\n      inputDesc.value = '';\n      inputDesc.focus();\n      (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage)('tasks-list', JSON.stringify(this.tasksList));\n      this.renderTasksList();\n    }\n  };\n\n  updateTask = (event) => {\n    const taskItem = event.target;\n    const taskId = taskItem.parentElement.parentElement.dataset.index;\n    const index = Number(taskId) - 1;\n    const taskDescription = taskItem.innerText;\n    this.tasksList[index].description = taskDescription;\n  };\n\n  UpdateTaskStatus = (event) => {\n    const taskCompleted = event.target.checked;\n    const taskItem = event.target.parentElement.parentElement.parentElement;\n    const taskId = taskItem.dataset.index;\n    const index = Number(taskId) - 1;\n    this.tasksList[index].completed = taskCompleted;\n    (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage)('tasks-list', JSON.stringify(this.tasksList));\n    taskItem.classList.toggle('completed');\n  };\n\n  deleteTask = (event) => {\n    const taskBtnRemove = event.target;\n    const taskItem = taskBtnRemove.parentElement;\n    const taskId = Number(taskItem.dataset.index);\n    if (!(0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(this.tasksList)) {\n      const newTaskList = this.tasksList.filter(\n        (task) => task.index !== taskId,\n      );\n      this.tasksList = (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.cloneCollection)(newTaskList);\n      this.setTasksIds();\n      (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage)('tasks-list', JSON.stringify(this.tasksList));\n      this.renderTasksList();\n    }\n  };\n\n  deleteAllCompletedTasks = () => {\n    if (!(0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(this.tasksList)) {\n      const newTasksList = this.tasksList.filter((task) => !task.completed);\n      this.tasksList = (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.cloneCollection)(newTasksList);\n      this.setTasksIds();\n      (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage)('tasks-list', JSON.stringify(this.tasksList));\n      this.renderTasksList();\n    }\n  };\n\n  onTaskFocus = (event) => {\n    const taskItem = event.target.parentElement.parentElement;\n    const btnRemove = taskItem.querySelector('.remove-task');\n    taskItem.classList.add('focus');\n    btnRemove.style.display = 'block';\n    btnRemove.style.opacity = '1';\n    btnRemove.removeAttribute('disabled');\n  };\n\n  onTaskFocusOut = (event) => {\n    const taskItem = event.target.parentElement.parentElement;\n    const btnRemove = taskItem.querySelector('.remove-task');\n    taskItem.classList.remove('focus');\n    btnRemove.style.opacity = '0';\n    setTimeout(() => {\n      btnRemove.setAttribute('disabled', 'true');\n      btnRemove.style.display = 'none';\n    }, 500);\n    (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage)('tasks-list', JSON.stringify(this.tasksList));\n  };\n\n  createTaskEventHandler = () => {\n    const inputDescription = document.querySelector('#inputTaskDescription');\n    const btnAddTask = document.querySelector('#btnAddTask');\n    inputDescription.addEventListener('keydown', (event) => {\n      if (event.code === 'Enter') {\n        this.createTask(inputDescription);\n      }\n    });\n    btnAddTask.addEventListener('click', () => {\n      this.createTask(inputDescription);\n    });\n  };\n\n  generalEventHandlers() {\n    const allTaskDescription = document.querySelectorAll('.task-description');\n    const allTaskBtnRemove = document.querySelectorAll('.remove-task');\n    const allTaskCheckbox = document.querySelectorAll('.task-check-status');\n    allTaskDescription.forEach((task) => {\n      task.addEventListener('keyup', this.updateTask);\n      task.addEventListener('focusin', this.onTaskFocus);\n      task.addEventListener('focusout', this.onTaskFocusOut);\n    });\n    allTaskBtnRemove.forEach((btnRemove) => {\n      btnRemove.addEventListener('click', this.deleteTask);\n    });\n    allTaskCheckbox.forEach((inputStatus) => {\n      inputStatus.addEventListener('change', this.UpdateTaskStatus);\n    });\n  }\n\n  clearAllEventHandler = () => {\n    document\n      .querySelector('#btn-clear-list')\n      .addEventListener('click', this.deleteAllCompletedTasks);\n  };\n\n  listTasks = () => {\n    const getAllData = (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.retrieveLocalStorage)('tasks-list');\n    this.tasksList = !(0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(getAllData)\n      ? (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.cloneCollection)(JSON.parse(getAllData))\n      : [];\n    this.renderTasksList();\n    this.createTaskEventHandler();\n    this.clearAllEventHandler();\n  };\n\n  refreshListEventHandler = () => {\n    document.querySelector('#refresh').addEventListener('click', (event) => {\n      const rotateButton = [\n        { transform: 'rotate(-90deg)' },\n        { transform: 'rotate(90deg)' },\n      ];\n      event.target.animate(rotateButton, { duration: 300, iterations: 1 });\n      this.listTasks();\n    });\n  };\n\n  init = () => {\n    this.listTasks();\n    this.refreshListEventHandler();\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoList);\n\n\n//# sourceURL=webpack://project-to-do-list/./src/ToDoList.js?");

/***/ }),

/***/ "./src/Utils.js":
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cloneCollection: () => (/* binding */ cloneCollection),\n/* harmony export */   isEmpty: () => (/* binding */ isEmpty),\n/* harmony export */   markUpTask: () => (/* binding */ markUpTask),\n/* harmony export */   retrieveLocalStorage: () => (/* binding */ retrieveLocalStorage),\n/* harmony export */   saveLocalStorage: () => (/* binding */ saveLocalStorage),\n/* harmony export */   taskObj: () => (/* binding */ taskObj)\n/* harmony export */ });\nconst retrieveLocalStorage = (key) => {\n  const data = localStorage.getItem(key);\n  return data || '';\n};\nconst saveLocalStorage = (key, value) => localStorage.setItem(key, value);\nconst isEmpty = (collection) => collection.length === 0;\nconst markUpTask = (task) => `\n<li class=\"task ${task.completed ? 'completed' : ''}\" data-index=\"${\n  task.index\n}\">\n  <div class=\"task-content\">\n    <div class=\"mark-task\">\n      <input type=\"checkbox\" id=\"task-${\n  task.index\n}-status\" class=\"task-check-status\" ${\n  task.completed ? 'checked' : ''\n}>\n      <label for=\"task-${task.index}-status\"></label>\n    </div>\n    <h3 class=\"task-description\" contenteditable=\"true\">${\n  task.description\n}</h3>\n  </div>\n  <div class=\"task-options\">\n    <div class=\"drag-icon\">\n      <span class=\"dot\"></span>\n      <span class=\"dot\"></span>\n      <span class=\"dot\"></span>\n    </div>\n  </div>\n  <button type=\"button\" class=\"remove-task\" disabled>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#bebebe\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line></svg>\n  </button>\n</li>\n`;\nconst cloneCollection = (collection) => [...collection];\nconst taskObj = (description, completed, index) => ({ description, completed, index });\n\n//# sourceURL=webpack://project-to-do-list/./src/Utils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ToDoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoList.js */ \"./src/ToDoList.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nconst toDoListApp = new _ToDoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ntoDoListApp.init();\n\n\n//# sourceURL=webpack://project-to-do-list/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);