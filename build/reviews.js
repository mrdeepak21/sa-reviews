/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/star.svg":
/*!**********************!*\
  !*** ./src/star.svg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgStar = function SvgStar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    width: 25,
    height: 25,
    fill: "#FFA534",
    viewBox: "0 0 47.94 47.94"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m26.285 2.486 5.407 10.956a2.58 2.58 0 0 0 1.944 1.412l12.091 1.757c2.118.308 2.963 2.91 1.431 4.403l-8.749 8.528a2.58 2.58 0 0 0-.742 2.285l2.065 12.042c.362 2.109-1.852 3.717-3.746 2.722l-10.814-5.685a2.59 2.59 0 0 0-2.403 0l-10.814 5.685c-1.894.996-4.108-.613-3.746-2.722l2.065-12.042a2.58 2.58 0 0 0-.742-2.285L.783 21.014c-1.532-1.494-.687-4.096 1.431-4.403l12.091-1.757a2.58 2.58 0 0 0 1.944-1.412l5.407-10.956c.946-1.919 3.682-1.919 4.629 0",
    style: {
      fill: "#ffa534"
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgStar);

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fancy_circular_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fancy-circular-carousel */ "./node_modules/react-fancy-circular-carousel/index.js");
/* harmony import */ var react_fancy_circular_carousel_FancyCarousel_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-fancy-circular-carousel/FancyCarousel.css */ "./node_modules/react-fancy-circular-carousel/FancyCarousel.css");
/* harmony import */ var _reviews_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reviews.json */ "./reviews.json");
/* harmony import */ var react_viewport_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-viewport-hooks */ "./node_modules/react-viewport-hooks/lib/react-viewport-hooks.esm.js");
/* harmony import */ var _star_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./star.svg */ "./src/star.svg");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






function App() {
  var _newData$random$focus, _newData$random$focus2;
  var newData = Array(_reviews_json__WEBPACK_IMPORTED_MODULE_3__)[0]['reviews'];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    images = _useState2[0],
    setImages = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    focusElement = _useState4[0],
    setFocusElement = _useState4[1];
  var _useViewport = (0,react_viewport_hooks__WEBPACK_IMPORTED_MODULE_4__.useViewport)(),
    vw = _useViewport.vw;
  var r = Math.abs(vw / (vw > 800 ? 5 : 3));
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    random = _useState6[0],
    setRandom = _useState6[1];
  var imgSrcUrl = 'http://dev.sterlingadministration.com';
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var review = [];
    for (var i = 0; review.length < 10; i++) {
      var _newData$_random;
      var _random = Math.floor(Math.random() * (newData.length - 1 + 1) + 1);
      if (!review.includes(_random) && ((_newData$_random = newData[_random]) === null || _newData$_random === void 0 ? void 0 : _newData$_random.starRating) === "FIVE" && newData[_random].hasOwnProperty('comment')) review.push(_random);
    }
    setRandom(review);
    setImages([imgSrcUrl + "/wp-content/uploads/2024/07/insurance.svg", imgSrcUrl + "/wp-content/uploads/2024/07/apple-1.svg", imgSrcUrl + "/wp-content/uploads/2024/07/circle-dollar.svg", imgSrcUrl + "/wp-content/uploads/2024/07/train.svg", imgSrcUrl + "/wp-content/uploads/2024/07/gift-box-heart.svg", imgSrcUrl + "/wp-content/uploads/2024/07/heart-care.svg", imgSrcUrl + "/wp-content/uploads/2024/07/pig-piggy-bank.svg", imgSrcUrl + "/wp-content/uploads/2024/07/insurance.svg", imgSrcUrl + "/wp-content/uploads/2024/07/apple-1.svg", imgSrcUrl + "/wp-content/uploads/2024/07/circle-dollar.svg"]);
    console.log(images);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex gap-20 lg:gap-0 justify-start lg:justify-center relative flex-col lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center lg:justify-end lg:items-center w-full lg:w-1/3 overflow-hidden z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "-mt-32 lg:mt-0 min-h-96 pb-10 lg:pb-0 lg:pr-32 lg:ml-[-100%]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_fancy_circular_carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    images: images,
    setFocusElement: setFocusElement,
    focusElementStyling: {
      border: '2px solid var(--e-global-color-1a239e5)'
    },
    peripheralImageBoxShadow: "0 0 20px 2px rgba(0,0,0,0.1)",
    peripheralImageRadius: r > 150 ? r / 8 : r / 4,
    border: false,
    transitionTime: 3,
    autoRotateTime: 3,
    offsetAngle: vw > 1024 ? 270 : 180,
    carouselRadius: r,
    navigationTextSize: 1.5,
    navigationButtonBgColor: "transparent",
    navigationButtonColor: "534B42",
    navigationButtonStyling: {
      border: "none",
      width: 0,
      height: 0,
      outline: 'none'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-start lg:justify-center flex-col w-full lg:w-2/3 p-5 min-h-[45rem] align-middle text-center lg:text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-3xl transition duration-150 ease-in-out"
  }, "\"", (_newData$random$focus = newData[random[focusElement]]) === null || _newData$random$focus === void 0 ? void 0 : _newData$random$focus.comment, "\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-xl italic mt-5 capitalize"
  }, (_newData$random$focus2 = newData[random[focusElement]]) === null || _newData$random$focus2 === void 0 || (_newData$random$focus2 = _newData$random$focus2.reviewer) === null || _newData$random$focus2 === void 0 ? void 0 : _newData$random$focus2.displayName, " | Google"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "icon mt-5 flex gap-2 flex-row justify-center lg:justify-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_star_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: 20,
    height: 20,
    alt: "Rating"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_star_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: 20,
    height: 20,
    alt: "Rating"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_star_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: 20,
    height: 20,
    alt: "Rating"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_star_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: 20,
    height: 20,
    alt: "Rating"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_star_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: 20,
    height: 20,
    alt: "Rating"
  }))));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-fancy-circular-carousel/FancyCarousel.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/react-fancy-circular-carousel/FancyCarousel.css ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.fancy-carousel-wrapper-element {
    background-color: transparent;
}

.fancy-carousel-border {
    background-color: transparent;
    z-index: 5;
}

.fancy-carousel {
    position: relative;
    border-radius: 50%;
    transition: 0.5s;
    transform-origin: center center;
    background-color: transparent;
}

.fancy-carousel-navigators {
    z-index: 1;
    display: flex;
    bottom: 0;
    left: 0;
    background: transparent;
}

.fancy-carousel-navigation-button {
    color: white;
    border-radius: 50%;
    outline: none;
    border: none;
}

.fancy-carousel-navigation-button:hover {
    outline: none;
    border: none;
    cursor: pointer;
}

.fancy-carousel-element {
    position: absolute;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
    bottom: 0;
    transition: 0.5s;
}

.fancy-carousel-image, .fancy-carousel-central-image, .fancy-carousel-element {
    border-radius: 50%;
}

.invisible {
    display: none;
}`, "",{"version":3,"sources":["webpack://./node_modules/react-fancy-circular-carousel/FancyCarousel.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;IAC7B,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,+BAA+B;IAC/B,6BAA6B;AACjC;;AAEA;IACI,UAAU;IACV,aAAa;IACb,SAAS;IACT,OAAO;IACP,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB","sourcesContent":[".fancy-carousel-wrapper-element {\n    background-color: transparent;\n}\n\n.fancy-carousel-border {\n    background-color: transparent;\n    z-index: 5;\n}\n\n.fancy-carousel {\n    position: relative;\n    border-radius: 50%;\n    transition: 0.5s;\n    transform-origin: center center;\n    background-color: transparent;\n}\n\n.fancy-carousel-navigators {\n    z-index: 1;\n    display: flex;\n    bottom: 0;\n    left: 0;\n    background: transparent;\n}\n\n.fancy-carousel-navigation-button {\n    color: white;\n    border-radius: 50%;\n    outline: none;\n    border: none;\n}\n\n.fancy-carousel-navigation-button:hover {\n    outline: none;\n    border: none;\n    cursor: pointer;\n}\n\n.fancy-carousel-element {\n    position: absolute;\n    background: transparent;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 2px;\n    bottom: 0;\n    transition: 0.5s;\n}\n\n.fancy-carousel-image, .fancy-carousel-central-image, .fancy-carousel-element {\n    border-radius: 50%;\n}\n\n.invisible {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/react-fancy-circular-carousel/FancyCarousel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-fancy-circular-carousel/FancyCarousel.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FancyCarousel: () => (/* binding */ FancyCarousel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const FancyCarousel = ({ images, setFocusElement = () => { }, offsetAngle = 0, carouselRadius = 400, centralImageRadius = 125, centralImageBoxShadow = '5px 10px 18px #888888', peripheralImageRadius = 75, peripheralImageBoxShadow = '5px 10px 18px #888888', focusElementStyling = {}, border = true, borderWidth = 5, borderHexColor = 'CB786C', autoRotateTime = 0, transitionTime = 1.5, navigationTextSize = 2, navigationButtonRadius = 32.5, navigationButtonBgColor = 'CB786C', navigationButtonColor = 'FFFFFF', navigationButtonStyling = {} }) => {
    const [carousel, setCarousel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        carouselOrietation: 0,
        elementOrientation: 0,
        focusElement: 0
    });
    setFocusElement(carousel.focusElement);
    if (autoRotateTime) {
        setTimeout(() => {
            rotateRight();
        }, autoRotateTime * 1000);
    }
    const noOfImages = images.length;
    const theta = 360 / noOfImages;
    const borderElement = (border) ? `url("data:image/svg+xml,%3csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3crect width=\'100%25\' height=\'100%25\' fill=\'none\' rx=\'${carouselRadius * 2}\' ry=\'${carouselRadius * 2}\' stroke=\'%23${borderHexColor}FF\' stroke-width=\'${borderWidth}\' stroke-dasharray=\'6%2c 24\' stroke-dashoffset=\'0\' stroke-linecap=\'square\'/%3e%3c/svg%3e")` : '';
    const rotateRight = () => {
        setCarousel({
            carouselOrietation: carousel.carouselOrietation + theta,
            elementOrientation: carousel.elementOrientation - theta,
            focusElement: (carousel.focusElement < (noOfImages - 1)) ? carousel.focusElement + 1 : 0
        });
    };
    const rotateLeft = () => {
        setCarousel({
            carouselOrietation: carousel.carouselOrietation - theta,
            elementOrientation: carousel.elementOrientation + theta,
            focusElement: (carousel.focusElement > 0) ? carousel.focusElement - 1 : noOfImages - 1
        });
    };
    var newCoordinates = [];
    images.forEach((item, index) => {
        newCoordinates.push([carouselRadius - peripheralImageRadius + carouselRadius * Math.cos(2 * Math.PI * index / noOfImages), carouselRadius - peripheralImageRadius + carouselRadius * Math.sin(2 * Math.PI * index / noOfImages)]);
    });
    // rotate point around (carouselRadius-peripheralRadius, carouselRadius-peripheralRadius) by (offset+90) deg
    const totalDeviation = offsetAngle * Math.PI / 180 + Math.PI / 2;
    var rotatedCoordinates = [];
    const centerCoordinate = carouselRadius - peripheralImageRadius;
    newCoordinates.forEach((item, index) => {
        rotatedCoordinates.push([centerCoordinate + (item[0] - centerCoordinate) * Math.cos(totalDeviation) - (item[1] - centerCoordinate) * Math.sin(totalDeviation), centerCoordinate + (item[0] - centerCoordinate) * Math.sin(totalDeviation) + (item[1] - centerCoordinate) * Math.cos(totalDeviation)]);
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fancy-carousel-wrapper-element" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fancy-carousel-border", style: { backgroundImage: borderElement, height: `${carouselRadius * 2}px`, width: `${carouselRadius * 2}px`, transition: `${transitionTime}` } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fancy-carousel", style: {
                    transform: `rotate(${carousel.carouselOrietation}deg)`,
                    height: `${carouselRadius * 2}px`, width: `${carouselRadius * 2}px`
                } },
                images.map((item, index) => ((index !== carousel.focusElement) ?
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fancy-carousel-element", key: index, style: {
                            transform: `rotate(${carousel.elementOrientation}deg)`, width: `${peripheralImageRadius * 2}px`, height: `${peripheralImageRadius * 2}px`,
                            left: `${rotatedCoordinates[index][0]}px`,
                            bottom: `${rotatedCoordinates[index][1]}px`,
                            boxShadow: `${peripheralImageBoxShadow}`,
                            transition: `${transitionTime}`
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "fancy-carousel-image", src: item, style: { width: `${peripheralImageRadius * 2}px`, height: `${peripheralImageRadius * 2}px` } })) :
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fancy-carousel-element", key: index, style: Object.assign({
                            transform: `rotate(${carousel.elementOrientation}deg)`, width: `${peripheralImageRadius * 2}px`, height: `${peripheralImageRadius * 2}px`,
                            left: `${rotatedCoordinates[index][0]}px`,
                            bottom: `${rotatedCoordinates[index][1]}px`,
                            boxShadow: `${peripheralImageBoxShadow}`,
                            transition: `${transitionTime}`
                        }, focusElementStyling) },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "fancy-carousel-image", src: item, style: { width: `${peripheralImageRadius * 2}px`, height: `${peripheralImageRadius * 2}px`, transition: `${transitionTime}` } })))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fancy-carousel-element central-img", key: noOfImages, style: {
                        transform: `rotate(${carousel.elementOrientation}deg)`, width: `${centralImageRadius * 2}px`, height: `${centralImageRadius * 2}px`,
                        left: `${carouselRadius - centralImageRadius - 10}px`, bottom: `${carouselRadius - centralImageRadius - 10}px`,
                        boxShadow: `${centralImageBoxShadow}`,
                        transition: `${transitionTime}`
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "fancy-carousel-central-image", src: images[carousel.focusElement], style: { width: `${centralImageRadius * 2}px`, height: `${centralImageRadius * 2}px`, transition: `${transitionTime}` } })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fancy-carousel-navigators " + ((autoRotateTime) ? "" : ""), style: { gap: `${carouselRadius * 2}px`, marginLeft: `-${navigationButtonRadius * 1.8}px` } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "fancy-carousel-navigation-button", onClick: rotateLeft, style: Object.assign({
                    width: `${navigationButtonRadius * 2}px`, height: `${navigationButtonRadius * 2}px`,
                    backgroundColor: `#${navigationButtonBgColor}`, color: `#${navigationButtonColor}`,
                    fontSize: `${navigationTextSize}rem`
                }, navigationButtonStyling) }, "\u2190"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "fancy-carousel-navigation-button", onClick: rotateRight, style: Object.assign({
                    width: `${navigationButtonRadius * 2}px`, height: `${navigationButtonRadius * 2}px`,
                    backgroundColor: `#${navigationButtonBgColor}`, color: `#${navigationButtonColor}`,
                    fontSize: `${navigationTextSize}rem`
                }, navigationButtonStyling) }, "\u2192"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement('span',{className:"fancy-corousel-indicator"},(carousel.focusElement+1)+'/'+noOfImages))));
};


/***/ }),

/***/ "./node_modules/react-fancy-circular-carousel/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-fancy-circular-carousel/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FancyCarousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FancyCarousel */ "./node_modules/react-fancy-circular-carousel/FancyCarousel.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_FancyCarousel__WEBPACK_IMPORTED_MODULE_0__.FancyCarousel);


/***/ }),

/***/ "./node_modules/react-viewport-hooks/lib/react-viewport-hooks.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-viewport-hooks/lib/react-viewport-hooks.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useViewport: () => (/* binding */ o),
/* harmony export */   withViewport: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var r=function(){return(r=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}).apply(this,arguments)},i={defaultVH:void 0,defaultVW:void 0,updateOnResize:!0},o=function(n){var o=r(r({},i),n),u=o.updateOnResize,a=o.defaultVW,d=o.defaultVH,f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(a),c=f[0],w=f[1],v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(d),s=v[0],l=v[1];return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var n=function(){window.innerWidth!==c&&w(window.innerWidth),window.innerHeight!==s&&l(window.innerHeight)};if(n(),u)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[u,s,c]),{vw:c,vh:s}},u=function(e){return function(t){return function(i){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t,r({},i,o(e)))}}};
//# sourceMappingURL=react-viewport-hooks.esm.js.map


/***/ }),

/***/ "./node_modules/react-fancy-circular-carousel/FancyCarousel.css":
/*!**********************************************************************!*\
  !*** ./node_modules/react-fancy-circular-carousel/FancyCarousel.css ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_FancyCarousel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./FancyCarousel.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-fancy-circular-carousel/FancyCarousel.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_FancyCarousel_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_FancyCarousel_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_FancyCarousel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_FancyCarousel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

/***/ }),

/***/ "./reviews.json":
/*!**********************!*\
  !*** ./reviews.json ***!
  \**********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"reviews":[{"reviewer":{"displayName":"brownies7777"},"starRating":"FIVE","comment":"Michelle Emblem is great. She is so responsive and so knowledgeable. Really appreciate working with her.","createTime":"2024-06-24T19:54:05.529610Z","updateTime":"2024-06-24T19:54:05.529610Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSURMMEstZWx3RRAB"},{"reviewer":{"displayName":"Ciera Pratt"},"starRating":"TWO","comment":"Their website says they are all about “service” but you can never get ahold of anyone.","createTime":"2024-06-05T22:49:02.758996Z","updateTime":"2024-06-05T22:49:02.758996Z","reviewReply":{"comment":"Hi Ciera,\\n\\nWe sincerely regret that your experience did not meet your expectations. We see that the FSA team has since responded to your inquiries via voicemail and email, but if there is anything outstanding or any additional concerns, please reach out to us, and we would be happy to assist you.","updateTime":"2024-06-13T14:31:05.204503Z"},"name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUN6cDdPczB3RRAB"},{"reviewer":{"displayName":"susan villoria"},"starRating":"FIVE","comment":"Ryan Delfin from Sterling Administration always gives me a 5-star service! He responds to my questions immediately. He answers all my questions knowledgeably and professionally. Always a pleasure to work with him.","createTime":"2024-05-31T16:21:31.728141Z","updateTime":"2024-05-31T16:21:31.728141Z","reviewReply":{"comment":"Thank you for your fantastic feedback, Susan! We are so pleased to hear that Ryan Delfin has consistently provided you with 5-star service. Our team strives to be knowledgeable, professional, and responsive, and it\'s rewarding to hear that Ryan exemplifies these qualities. Your appreciation means a lot to us, and we look forward to continuing to provide you with excellent service.","updateTime":"2024-06-07T05:54:51.377552Z"},"name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUN6blA3UkdnEAE"},{"reviewer":{"displayName":"Cliff Guan"},"starRating":"FIVE","comment":"Thanks John at Sterling for his outstanding service. He replied to me promptly and solved my issue in less than 24 hours. It is indeed impressive and appreciated...","createTime":"2024-05-21T16:13:52.865106Z","updateTime":"2024-05-21T16:13:52.865106Z","reviewReply":{"comment":"Thank you Cliff for your kind words, and for taking the time to share your positive experience with John at Sterling Administration! We are thrilled to hear that he was able to resolve your issue promptly and efficiently. Providing outstanding service is our top priority, and it\'s always gratifying to receive such positive feedback. We appreciate your recognition and your support!","updateTime":"2024-06-07T05:53:22.033648Z"},"name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSURUc0p6alZ3EAE"},{"reviewer":{"displayName":"The Inspower Agency"},"starRating":"ONE","comment":"Anlo Hoang, supervisor to Josie Jacobo, had time to write a review about how the company treats its employees but did not find time to do their job. I sent an email to Anglo three hours BEFORE they wrote their review. I requested a response within a full week and they still have yet to respond to my email about why the company did not communicate multiple increases and admitted mistakes to the calculation of my cobra, as well as unethically taking my money from my account without my consent.\\n\\nWhat kind of company is this????!!!!","createTime":"2024-05-20T22:57:45.783697Z","updateTime":"2024-05-20T22:57:45.783697Z","reviewReply":{"comment":"Hi Jasmine, I am sorry to hear that you did not receive your rate change letter from us and that your email was not responded to in a timely manner. We are researching what happened with the letter to ensure it does not happen again. I understand that the COBRA team was able to give you a refund for the difference in premium due to the inconvenience, and I feel confident we will provide better customer service moving forward.","updateTime":"2024-06-03T06:56:07.183886Z"},"name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUNUdjR5bzJnRRAB"},{"reviewer":{"displayName":"Toby Bigley"},"starRating":"THREE","comment":"Slow or no response","createTime":"2024-05-18T12:19:54.125080Z","updateTime":"2024-05-18T12:19:54.125080Z","reviewReply":{"comment":"Hi Toby,\\nThank you for your feedback. I am sorry to hear your experience with the team has been less than satisfactory. I do not see any communications sent in from you since January 2023, so I want to be sure you have our correct contact information. If you have any questions or concerns regarding your plan, please reach out to us at benefits@sterlingadministration.com or call us at 800.617.4729 and we would be happy to assist.\\n","updateTime":"2024-06-03T06:55:10.618396Z"},"name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUNUdzlpZk53EAE"},{"reviewer":{"displayName":"Jiaan Wu"},"starRating":"FIVE","comment":"Best TPA in the market! I have been working with the sales team, renewal team, and day-to-day service team. John Cruz, Jessica Hogan, and Kristine Farrell are all professional and efficient!","createTime":"2024-05-15T19:44:10.585900Z","updateTime":"2024-05-15T19:44:10.585900Z","reviewReply":{"comment":"Thank you for your glowing review! We are delighted to hear that you have had such a positive experience with our sales team, renewal team, and day-to-day service team. John Cruz, Jessica Hogan, and Kristine Farrell will be thrilled to hear your praises. We are committed to professionalism and efficiency, and it\'s wonderful to know that our efforts are making a difference for you. We appreciate your continued trust in the Sterling Administration!","updateTime":"2024-06-07T05:54:25.000899Z"},"name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUNUa1lDWUdnEAE"},{"reviewer":{"displayName":"Carol Houseman"},"starRating":"ONE","comment":"Today they owe me almost $2000. That is 4 months of $490. Dozens of phone calls, seldom answered or returned. All documentation sent sometimes several times. Their \\"check writing function is not working\\"  My husband is 92. Their representative said today she has thousands of emails. If thousands of dollars are being withheld from thousands over 90 consider the interest and the odds that much of it will be overlooked or forgotten. Sounds like a business strategy to us.","createTime":"2024-05-14T19:00:27.546968Z","updateTime":"2024-05-14T19:00:27.546968Z","reviewReply":{"comment":"Hi Carol,\\n\\nI am so sorry to hear your experience with Sterling has been so frustrating. Unfortunately we did lose our ability to write checks for several months due to an issue at our mailing vendor, but we could always ACH the money to you and ACH payments are delivered within several days. I see that the ACH payment was presented to your husband but he declined that option and decided to wait for the checks to be available, which were sent out in early May. I know it was a very stressful time for all and I hope moving forward we can prove to you through our service that requests for disbursement are completed in a timely manner. Please reach out to us at 800.617.4729 if you have any further questions or concerns.\\n","updateTime":"2024-06-03T06:54:32.312823Z"},"name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUNUanVtcnZRRRAB"},{"reviewer":{"displayName":"Sandi Carpenter"},"starRating":"FIVE","comment":"Incredible customer service; always responds and handles issues quickly, professional, and always a pleasure to work with.","createTime":"2024-05-10T22:21:11.001822Z","updateTime":"2024-05-10T22:21:11.001822Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUNULU5DcGJ3EAE"},{"reviewer":{"displayName":"Yvonne Eisenman"},"starRating":"FIVE","comment":"Sterling Administration is a wonderful company to work for. Sterling has a great family culture and values its employees and the hard work each employee produces.  This principle is extended to how the company values its clients as well. Sterling is committed and strives to provide the best Sterling service.","createTime":"2024-04-25T20:41:00.733592Z","updateTime":"2024-05-10T22:12:17.539828Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUNqeTdXTkF3EAE"},{"reviewer":{"displayName":"Anlo Hoang"},"starRating":"FIVE","comment":"Sterling is a great place to work at. They establish a clear value for the organization and there is always room for growth. They listen to their employees\'s feedback and are open-minded. Sterling is a great company with work-life balance.","createTime":"2024-04-25T17:58:59.717333Z","updateTime":"2024-05-10T21:34:44.165547Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUNqaTVyaTRBRRAB"},{"reviewer":{"displayName":"Sheila Black"},"starRating":"FIVE","comment":"Ryan who is our representative is so calm and respectful. I am new to this and he was so kind to walk me through the entire process of creating a new cobra entry. I am very nervous when putting things into the computer or updating things. I had a glitch and Ryan was so patient and calm and again walked me through the process of fixing it. Thank goodness for people like Ryan! He reassured me by telling me if I had any questions or if I needed anything else to please call him. He deserves a raise!!","createTime":"2024-05-10T20:31:52.389766Z","updateTime":"2024-05-10T20:31:52.389766Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUNUdU9MWkRnEAE"},{"reviewer":{"displayName":"Cheryl Cote"},"starRating":"FIVE","comment":"Jon Cruz is a Senior Cobra Specialist and I have been working with him on one of our larger COBRA groups. He is fantastic, knowledgeable and responsive. I seem to turn to him for all my Sterling questions and if he isn\'t the person, he points me to the correct person. I am impressed and appreciate all he does. Thank you.","createTime":"2024-05-09T22:32:29.499152Z","updateTime":"2024-05-09T22:32:29.499152Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUNUa0tyVTZnRRAB"},{"reviewer":{"displayName":"Duke Martin"},"starRating":"FIVE","comment":"If one has too much on their plate, efficiency will always suffer in everything else. The business may look awful to most people from the outside , but in over ten years, I haven\'t seen a more committed and passionate group of people at work. Maybe we could have made more people happy if one person could only do as much as three could.","createTime":"2024-05-07T20:58:05.437146Z","updateTime":"2024-05-07T20:58:05.437146Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSURqMjdEeXd3RRAB"},{"reviewer":{"displayName":"Natalie Rokovich"},"starRating":"FIVE","comment":"We have used Sterling Administration many times in the past! Michelle Emblem is always there for whatever questions I have and to help guide me. We appreciate them helping this difficult process be as seamless as possible!","createTime":"2024-05-06T14:56:21.706133Z","updateTime":"2024-05-06T14:56:21.706133Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSURqM2FtTGdBRRAB"},{"reviewer":{"displayName":"Susana Portillo"},"starRating":"FOUR","comment":"Overall, I had a good experience with Sterling. Our compliance manager was attentive and knowledgeable. Her response time was great and was able to guide us through the process.","createTime":"2024-05-03T15:11:07.146459Z","updateTime":"2024-05-03T15:11:07.146459Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSURqbnZlbUx3EAE"},{"reviewer":{"displayName":"Tracie Carter"},"starRating":"FIVE","comment":"Service driven while striving for excellence - that is how Sterling approaches both external and internal clients. As an  internal customer, Sterling has proven to be a family-oriented Company that I\'m proud to be a part of! If you are looking for work/life balance while helping others, this is the place to be. From the Executive Leaders to peer groups, everyone is easily accessible and cares about your well-being. The work is rewarding and internal promotions are celebrated. Great Company with Great people!","createTime":"2024-04-25T18:55:34.019271Z","updateTime":"2024-04-25T18:55:34.019271Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUNqaS12cEJ3EAE"},{"reviewer":{"displayName":"Marcie DeLaCruz"},"starRating":"FIVE","comment":"At Sterling Administration, I thoroughly enjoy the people that I work with and the camaraderie as we come together to create enjoyable experiences for each other and our clients.","createTime":"2024-04-25T18:20:00.898613Z","updateTime":"2024-04-25T18:20:00.898613Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUNqaTVHeWF3EAE"},{"reviewer":{"displayName":"Suzie Roehrenbach"},"starRating":"FIVE","comment":"I love having my FSA and HSA accounts with Sterling Administration. It\'s a one-stop shop for all of my financial benefit needs. Their app is very handy to use when you\'re on the go. I can easily access my balances and other pertinent details of my accounts.","createTime":"2024-04-25T18:19:32.446726Z","updateTime":"2024-04-25T18:19:32.446726Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUNqaS1ITlJnEAE"},{"reviewer":{"displayName":"Josie Jaay"},"starRating":"FIVE","comment":"Very helpful customer service. They were able to answer my questions and provide solutions.","createTime":"2024-04-25T18:03:14.348193Z","updateTime":"2024-04-25T18:03:14.348193Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUNqaThiaTVRRRAB"},{"reviewer":{"displayName":"Lindsey Neville"},"starRating":"FIVE","comment":"As an HSA account holder, I find the app super easy to use to submit claims for reimbursement. The money is deposited in my account quickly and easily. As an EE of the company, I appreciate how our voices are heard when discussing ways to constantly improve our services for our clients and participants.","createTime":"2024-04-25T18:02:28.955469Z","updateTime":"2024-04-25T18:02:28.955469Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUNqaTRhLTBnRRAB"},{"reviewer":{"displayName":"Mike Puente"},"starRating":"FIVE","comment":"Sterling is a wonderful company to work for. They care about their employees and families and offer a good work-life balance. As a Sales Director, in order to be successful, I must believe in our organization, and I absolutely do! I am confident in our people and the services we offer. Wouldn\'t want to work anywhere else.","createTime":"2024-04-25T13:42:46.164108Z","updateTime":"2024-04-25T13:42:46.164108Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUNqMF92aDFBRRAB"},{"reviewer":{"displayName":"Dorothea Baker"},"starRating":"ONE","comment":"Absolutely terrible customer service. Absolute trash of a company! I\'ve been trying to retrieve funds owed to me for over 4 months. I have been going in circles speaking to staff that are short and incompetent. Super frustrating. Even the supervisors are dumb.","createTime":"2024-04-17T20:10:31.301736Z","updateTime":"2024-04-17T20:10:31.301736Z","reviewReply":{"comment":"I am deeply sorry to hear your experience with Sterling has been so terrible. I know that the ID verification process can be tedious, but unfortunately it is a requirement that it be completed to keep our participants and the company safe. We are looking into ways we can make it a more streamlined process with less back and forth for our participants. We appreciate your patience with us and look forward to providing you excellent customer service moving forward.\\n","updateTime":"2024-06-03T06:59:00.345505Z"},"name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUNqdUpuS0lBEAE"},{"reviewer":{"displayName":"Rick Monteiro"},"starRating":"ONE","comment":"Terrible HSA administration company. In December of 2023 they failed to disperse requested funds for 18 days.\\nStaff and administration are incompetent. I\'m on 21 days and count to fund my 2024 maximum contribution base on inaccurate and incomplete instructions. 21 emails later they received the funds on Thursday and on Friday they told me they were hoping to show the deposit on Monday or Tuesday.\\nIf you have a choice on another HSA administration company run from Sterling. They are getting rich on fees and inappropriately hold your funds at your expense.","createTime":"2024-04-14T16:24:56.405774Z","updateTime":"2024-04-14T16:24:56.405774Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUREMi03SzNBRRAB"},{"reviewer":{"displayName":"Luisa Pineros"},"starRating":"ONE","createTime":"2024-04-09T19:39:47.532999Z","updateTime":"2024-04-09T19:39:47.532999Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUREN3JlaktREAE"},{"reviewer":{"displayName":"Chelsea Passmore"},"starRating":"ONE","comment":"Disgusting customer service. Horrible website makes everything a million times harder. And almost completely uncommunicative. Not to mention they make mistakes and then expect you to feel bad for getting upset about their money costing mistakes. Did not create my card and now I’m suffering trying to get refunded for their mistake.","createTime":"2024-04-02T22:36:38.700958Z","updateTime":"2024-04-02T22:36:38.700958Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUNEbDlQOGhBRRAB"},{"reviewer":{"displayName":"Katsura Edamaru"},"starRating":"ONE","comment":"It\'s pretty bad, I was not aware of the monthly charge they put on my account for years. Usually there will be a notification after you left the company or your company is acquired by another company. But as I remember, I can\'t think of I have received it from this company. Also, the 8+ dollars monthly fee is high since you are not really manage my money.","createTime":"2024-03-05T22:30:42.709427Z","updateTime":"2024-03-05T22:30:42.709427Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUM5N3R1eXVBRRAB"},{"reviewer":{"displayName":"Yanira Rivera"},"starRating":"ONE","comment":"BEWARE!!! I am a simple person, i hate confrontation, and i pay my bills on time. This company has caused me so much stress. I had no choice in picking this company when i decided to leave my former employers and continue my heath coverage with Cobra but if someone does have a choice DO NOT PICK THIS COMPANY!!! Awful customer service!!","createTime":"2024-02-20T21:43:09.458196Z","updateTime":"2024-02-20T21:43:09.458196Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSURkdVB6WE1BEAE"},{"reviewer":{"displayName":"Yanira Rivera"},"starRating":"ONE","comment":"0 STARS!!!!  It makes me so sad that this a women owned company because it is complete trash!! I have been given the run around for months and all I wanted to do was pay my bill! I requested invoices to be sent to me so I can pay and no one would answer my calls or call back. I called 1 day over 100 times. Screw this awful company!","createTime":"2024-02-16T23:24:25.936662Z","updateTime":"2024-02-16T23:24:25.936662Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUNkbFotekRnEAE"},{"reviewer":{"displayName":"Rebekah Aronson"},"starRating":"ONE","createTime":"2024-02-16T15:08:18.259963Z","updateTime":"2024-02-16T15:08:18.259963Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUNkdWJmdnJnRRAB"},{"reviewer":{"displayName":"Anthony M"},"starRating":"ONE","comment":"These people are tough to work with.  Long hold times whenever you call.  Sometimes you call and get hung up on.  Other times you call and they play a message that it is outside business hours, when it actually isn\'t.  If feels like there\'s maybe 1 person working here on a very casual part-time basis.  Would not recommend, would not choose to use their services in the future and closing account with them.","createTime":"2024-02-09T00:40:03.465962Z","updateTime":"2024-02-09T00:40:03.465962Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUR0bi12Zlp3EAE"},{"reviewer":{"displayName":"Danny Duran"},"starRating":"ONE","comment":"This company is a scam. They will not allow you to speak to supervisors and they are not interested in offering any service. I will be contacting the Better Business Bureau and suggest everyone else do the same.","createTime":"2024-02-06T23:18:34.496651Z","updateTime":"2024-02-06T23:18:34.496651Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUR0ODlicnRRRRAB"},{"reviewer":{"displayName":"Krista Borgquist"},"starRating":"ONE","comment":"If I could give Sterling Administration 0 stars I would. When I left my previous employer I knew I had 90 days to submit my remaining receipts for reimbursement. I was immediately locked out of my account and spent months trying to regain access with little to no help from the \\"customer service\\" team. Ultimately, they were unable to help me regain access and as the end of the 90 days was approaching asked me to hand write submission forms. I did this, I submitted the receipts, and I asked if the documentation was sufficient and anything else needed. I asked multiple times over the course of two weeks. The response finally came that my documentation was sufficient and a check was being sent. Now, after the 90 days have passed - a time frame they were well aware of, they are coming back and saying the documentation is no longer sufficient and I can go through a long process to appeal their decision. The information provided on how I would know what was required and why the claim was denied was on the account they would not help me gain access to.","createTime":"2024-01-29T17:58:49.173175Z","updateTime":"2024-01-29T17:58:49.173175Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUN0M05YT2RBEAE"},{"reviewer":{"displayName":"Jason Glavis"},"starRating":"ONE","comment":"trash , horrible , Not only do they not return phone calls ,\\nthey routinely deny claims for no reason I can only assume inept laziness , Expect to be on hold for 30 minutes to an hour just to be sent to a voicemail\\nI\'m sure the executives are raking in the dough At this so-called company again just trash","createTime":"2024-01-13T14:41:55.962398Z","updateTime":"2024-01-13T14:41:55.962398Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUNOeXFDZHJRRRAB"},{"reviewer":{"displayName":"Isdrevi (Isdrevi)"},"starRating":"ONE","comment":"If 0 star is an option that’s what I would choose! I’m having a hard time trying to to get a reimbursement back from Sterling, I went to the urgent care on 12/22/23 and after the service I went to swipe my Sterling card and it declined and tried several times and declined every time, there was a line and I had to pay via my debit card. I submitted countless Claims and they all getting denied due to “insufficient Documentation”, I call them and waited to talk to someone and told me about 1hr 45mins and I told them my situation and they said it was insufficient documentation, and I submitted new claims with new documents and keep getting declined and have to call them again to see what’s going on! Every time I call them they give me a different excuse to why it’s getting declined, Like: The documentation is not clear and not visible! How?… it’s a PDF documentation. I call them again and they said ohh the documentation doesn’t have your name in it, I submitted a new claim another excuse, we can’t see which debit card you paid with, submitted my receipt from previous claims , and another excuse it doesn’t show the amount you paid. So every time I call they give me an excuse after excuse and they tell me what they need and I put it on the claims and still getting declined. ALL THEY DO IS GIVE EXUCSE! Why pay when guys cant even resolve a $50 claim. Our Company pays for your services and you guys don’t even do nothing. Worst Service & Company Overall! Don’t even bother to contract this company.","createTime":"2024-01-09T20:10:06.304722Z","updateTime":"2024-01-09T20:10:06.304722Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUQxbzZiZ1RREAE"},{"reviewer":{"displayName":"Loretta S"},"starRating":"ONE","comment":"Sterling Health Services never ever ever answers phone calls. If you are able to talk to a live person it\'s a miracle!","createTime":"2023-08-31T15:18:27.126135Z","updateTime":"2023-08-31T15:18:27.126135Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSURwejlLYjNnRRAB"},{"reviewer":{"displayName":"Jenna Patrick"},"starRating":"ONE","comment":"AVOID this company! You inquire about services and before you know it, you are on the hook for a service they have not rendered.. OH and you can\'t even talk to someone about it because they don\'t answer the phone! YET they are reporting us to collections..  laughable. I looked up the AR person on LinkedIn and his profile has an #openforwork banner.. something fishy is going on.","createTime":"2023-08-21T17:52:02.129364Z","updateTime":"2023-08-21T17:52:02.129364Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSURwdHBYTFFBEAE"},{"reviewer":{"displayName":"Renee Huerta"},"starRating":"FIVE","createTime":"2023-08-16T01:32:52.080532Z","updateTime":"2023-08-16T01:32:52.080532Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSURwLUtuLTNBRRAB"},{"reviewer":{"displayName":"Karen Natsuhara"},"starRating":"ONE","comment":"Terrible company. Do not use them. Poor / non existent customer service. Will not release my funds as requested over two weeks ago!","createTime":"2023-08-01T13:52:04.643666Z","updateTime":"2023-08-01T13:52:04.643666Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUNweXVYazJ3RRAB"},{"reviewer":{"displayName":"Kevin Bass"},"starRating":"ONE","createTime":"2023-07-22T18:02:06.986974Z","updateTime":"2023-07-22T18:04:21.366054Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSURKaS1QUHFBRRAB"},{"reviewer":{"displayName":"GPT VN 1"},"starRating":"ONE","comment":"The customer phone number is a voicemail.  No one ever pick up.  Left messages no one return my calls.  Just try to solve the log in issue but the website keeps having issue with register, enrollment page.  So frustrating....","createTime":"2023-07-18T23:23:54.793493Z","updateTime":"2023-07-18T23:24:51.221178Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSURKMGMtTlB3EAE"},{"reviewer":{"displayName":"Stewart Douglas"},"starRating":"ONE","comment":"AVOID THIS COMPANY AT ALL COSTS.\\nAwful, awful, awful  company. I actually cancelled or early term ended my Healthcare, now I don\'t have any, They wouldn\'t take my money, Month after Month I would set up a recurring payment, they would wait two months then send a threatening letter saying that my Healthcare had been suspended. I got tired of it. This time they did the same thing only told me that it could not be reactivated I quote \\"Hello xxxxxx, we regret for the inconvenience, but we are bound by the laws and regulations that govern the administration of your former employer\'s group benefit plan.\\"\\n\\nThey wouldn\'t take the money. I couldn\'t log in to the site as it said user name and password were incorrect but no one would get back to me until I wrote a real threatening email and surprise it worked again without any changes.\\n\\nEven when I signed up it was 3 months before my Cobra through Bluesheild was activated, in the end I had to call Bluesheild and they got it going. No-one would respond to my calls or my emails.\\n\\nThey won\'t return calls in any kind of timely manner, if they do respond they\'ll leave a voice mail so you have no written record, email responses take a week or so, sometimes two. I suspect they were hired as the Administrator of Cobra so I would quit using it and my former employer could walk away from their liabilities, there\'s some sort of scam going on.\\n\\nRead their Yelp and Google and BBB reviews, they have one star on almost every single one,  they\'ve failed to make payments for people that are suffering from Cancer and other diseases. They have a flood of employee reviews, all around 3 stars and I suspect someone clever published those to drown out or deflect from the massive amount of poor customer 1 star reviews.","createTime":"2023-07-12T17:45:38.765620Z","updateTime":"2023-07-12T17:45:38.765620Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSURKblAzVmN3EAE"},{"reviewer":{"displayName":"Lowkey"},"starRating":"TWO","comment":"Hard to contact a real person.","createTime":"2023-06-05T16:15:36.194456Z","updateTime":"2023-06-05T16:15:36.194456Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUR4OHR1MHZnRRAB"},{"reviewer":{"displayName":"Nathanael Steele"},"starRating":"ONE","comment":"Unanswered phone calls, incorrect account balances, and murky communication.","createTime":"2023-05-31T22:39:58.235100Z","updateTime":"2023-05-31T22:39:58.235100Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUR4Nk8zVldnEAE"},{"reviewer":{"displayName":"Frederick Howden"},"starRating":"FIVE","createTime":"2023-05-20T16:22:40.744445Z","updateTime":"2023-05-20T16:22:40.744445Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUN4cVlpbThnRRAB"},{"reviewer":{"displayName":"Neal"},"starRating":"ONE","comment":"Everytime I have to deal with Sterling HSA is torture. The support people know nearly nothing and the website was created by a kid in junior high school. How pathetic! I have \\"suggested\\" that my college find a new HSA but they are, unfortunately, as brain-dead as Sterling.","createTime":"2023-03-22T18:27:22.240458Z","updateTime":"2023-03-22T18:32:34.743227Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUNSNElPN1hBEAE"},{"reviewer":{"displayName":"Carlos Escobar"},"starRating":"ONE","comment":"(Translated by Google) They never answer calls\\n\\n(Original)\\nNunca responden las llamadas","createTime":"2023-03-20T23:51:05.469569Z","updateTime":"2023-03-20T23:51:05.469569Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSURocl9yWHB3RRAB"},{"reviewer":{"displayName":"Shane Ẽire Byrne"},"starRating":"FIVE","createTime":"2023-03-18T00:32:56.043671Z","updateTime":"2023-03-18T00:32:56.043671Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSURocTZ5TkxnEAE"},{"reviewer":{"displayName":"kristen Olson"},"starRating":"ONE","comment":"They don’t answer their phones no one is “available” they are suppose to be a customer service organization - I think not! I would give them a zero if available","createTime":"2022-12-22T19:01:56.434834Z","updateTime":"2022-12-22T19:01:56.434834Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUNCbXNtTDJRRRAB"},{"reviewer":{"displayName":"Christina Gutierrez"},"starRating":"ONE","createTime":"2022-12-10T04:30:54.170086Z","updateTime":"2022-12-10T04:30:54.170086Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUQtNjV2czNnRRAB"},{"reviewer":{"displayName":"Mohamed Nasrullah"},"starRating":"ONE","comment":"One star of protest as I could not give negative five.\\n\\nSimply the worst HSA service provider I had to deal with.\\n\\nEvery claim by dependents is marked for review even though the list of dependents was provided at the time of enrollment.\\n\\nI lost close to $500 at end of the year as result of delays caused due to providing the documentation and re-activating the card.\\n\\nBecause of this, I did not enroll for HSA with my employer and strongly recommended the HR to discontinue using Sterling\'s services.","createTime":"2022-11-16T23:01:46.076781Z","updateTime":"2022-11-16T23:01:46.076781Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUMtcjhIdVRnEAE"},{"reviewer":{"displayName":"Glen Eberts"},"starRating":"ONE","comment":"The worst HSA I’ve ever had. HSA debit card doesn’t work, website is terrible, no one picks up the phone after trying for several days, and they have HSA fees for their terrible service. I am constantly moving my HSA money over to HealthEquity, and hope my company terminates their service asap. HealthEquity is better on every conceivable aspect of service, and doesn’t have HSA fees! Sterling HSA is straight trash!","createTime":"2022-11-04T18:43:04.229125Z","updateTime":"2022-11-04T18:43:04.229125Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUMtbm9xN3dBRRAB"},{"reviewer":{"displayName":"Kate Slater"},"starRating":"ONE","comment":"Echoing what everyone else has said - phone calls and emails go unanswered. For weeks. What in the actual hell is wrong with this company? Why even have a customer service line?","createTime":"2022-08-08T15:20:04.119822Z","updateTime":"2022-08-08T15:20:04.119822Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUN1MTYyOHpBRRAB"},{"reviewer":{"displayName":"Deborah Schleuter"},"starRating":"ONE","comment":"The worst service I\'ve ever experienced with any medical insurance facilitator. I\'ve had my COBRA with them since May 2021. Everytime I need to use it the Dr. Office has trouble getting benefits verified and I have to call Sterling to fix it. Since I\'ve done this 5 times now I\'d say they never really fixed it the first, second or even third time.","createTime":"2022-07-19T18:55:02.703809Z","updateTime":"2022-07-19T18:55:02.703809Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUN1eUxTRlJBEAE"},{"reviewer":{"displayName":"Krissy Graham"},"starRating":"FOUR","createTime":"2022-06-06T04:00:26.957080Z","updateTime":"2022-06-06T04:00:26.957080Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUNPMHU2Qm9RRRAB"},{"reviewer":{"displayName":"Lady Alane Quien - Eliana Batyah"},"starRating":"FIVE","comment":"Awesome","createTime":"2022-04-22T11:46:51.362036Z","updateTime":"2022-04-22T11:46:51.362036Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUMyZ1pTLXZBRRAB"},{"reviewer":{"displayName":"Greg Schwinghammer"},"starRating":"FIVE","createTime":"2022-03-23T13:29:23.723033Z","updateTime":"2022-03-23T13:29:23.723033Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSURXMXVuNXdRRRAB"},{"reviewer":{"displayName":"Liz “Lizzzz” Zzzz"},"starRating":"TWO","comment":"So my former employer in AUSTIN uses them as their COBRA administrator for some reason. Their customer service is awful. 2 times my insurance got cancelled even though I had paid. Not sure if this was the employer or Sterling but in both cases it took days for my insurance to be reinstated. I have severe medical issues and can\'t just go without medical care nor can I afford to pay out of pocket for prescriptions and such seeing as how I am ya know unemployed.","createTime":"2022-02-28T00:55:12.485845Z","updateTime":"2022-02-28T00:56:31.314241Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUNXbnBPSjd3RRAB"},{"reviewer":{"displayName":"Humera Bibi"},"starRating":"FIVE","createTime":"2022-01-11T04:00:21.152651Z","updateTime":"2022-01-11T04:00:21.152651Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUNtLTdQcmVREAE"},{"reviewer":{"displayName":"Pete Johnson"},"starRating":"ONE","comment":"They are the Cobra administrators for my policy. They have 2 out out of the last 3 months failed to forward my payments on time and my insurance has been interupted causing my medical procedures to be post poned . I am a cancer patient and it is difficult to get them rescheduled . When you call them all you get is the run around and explanation of how nothing is eber their fault. That is not what you are told when you talk to the insurance company. I wish you all the luck in the world if you have the misfortune to have to deal with these people.","createTime":"2021-12-06T20:33:51.358538Z","updateTime":"2021-12-06T20:33:51.358538Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSURHM2VEOG13RRAB"},{"reviewer":{"displayName":"Sophie Doodle"},"starRating":"ONE","comment":"Absolutely zero service, they don’t return phone calls and dispense incorrect information to employees and to the employer. They collect payments from employees to pay for coverage that the insurance carriers won’t accept. Dreadful company to work with and their fees are very high; especially when you get no service or response.","createTime":"2021-10-05T20:57:35.009324Z","updateTime":"2021-10-05T20:57:35.009324Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUQ2cFkzNVlnEAE"},{"reviewer":{"displayName":"Robert york"},"starRating":"TWO","createTime":"2021-06-29T19:22:01.852355Z","updateTime":"2021-06-29T19:22:01.852355Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSURxbE9uWHd3RRAB"},{"reviewer":{"displayName":"Bradley Gent"},"starRating":"ONE","createTime":"2021-06-03T03:44:28.428708Z","updateTime":"2021-06-03T03:44:28.428708Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUNxNnFDSjNnRRAB"},{"reviewer":{"displayName":"Dom Greber"},"starRating":"ONE","comment":"I’ve been on hold multiple times, always prompted  to leave a voicemail after 8 minutes and nobody ever calls back. Sent multiple emails and never got a response. I think this company just takes in money but never actually pays it back out to you. They keep charging your account a ridiculous fee even if you don’t use so beware, you’ll lose all your money very fast!","createTime":"2021-05-06T17:05:14.260513Z","updateTime":"2021-05-06T17:05:14.260513Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSURLOHNiUm9BRRAB"},{"reviewer":{"displayName":"Juan Tachiquin"},"starRating":"FIVE","createTime":"2021-04-02T20:22:19.011524Z","updateTime":"2021-04-02T20:22:19.011524Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUNLLW9TZmZ3EAE"},{"reviewer":{"displayName":"Erin Sanfilippo"},"starRating":"THREE","createTime":"2021-02-23T03:51:17.782401Z","updateTime":"2021-02-23T03:51:17.782401Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUR5bVB6LXh3RRAB"},{"reviewer":{"displayName":"Lee Perry"},"starRating":"FIVE","comment":"Sterling Administration, they handle people\'s red tape as it pertains to their health savings accounts. They are amazing. Very kind and considerate. Extremely knowledgeable wherever a member may encounter issues or difficulties navigating their way through the system, which can be a challenge at first. Once Sterling Staff helps you through it a time or ten, it will be old hats. Thank you Sterling Administration. Lee.","createTime":"2021-02-09T07:18:14.646430Z","updateTime":"2021-02-09T07:22:35.555804Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUN5cmY3UGNBEAE"},{"reviewer":{"displayName":"Xuliang Yan"},"starRating":"ONE","comment":"They keep charging you a monthly fee even after you stop save money in the account and they did nothing for me. The ad says they will refund you up to one year monthly fee if you’re not satisfied with their service. Sure I’m not happy. But it’s a scam. It only shows up in Google search result. The official website hides this false statement. Called for hours. Service people was not helpful at all, denying they have this refund policy, showed contempt to my right in all sort of ways in a passive aggressive manner. I later tried to transfer my HSA out of Sterling to Fidelity for the latter charges no monthly fee. But it takes forever to get the transaction completed. I don’t even find a way to complain. It’s still in pending.","createTime":"2021-02-02T05:28:24.582690Z","updateTime":"2021-02-02T05:28:24.582690Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUN5d2FlZTdBRRAB"},{"reviewer":{"displayName":"Florence Garcia"},"starRating":"FIVE","comment":"Always easy to manage this website","createTime":"2021-01-19T23:01:09.881326Z","updateTime":"2021-01-19T23:01:23.922294Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUN5eEttekpBEAE"},{"reviewer":{"displayName":"Karen Prasad"},"starRating":"FIVE","comment":"Have my HSA through them and they are excellent","createTime":"2020-11-30T03:07:43.226489Z","updateTime":"2020-11-30T03:07:43.226489Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSURpd3QtMGlRRRAB"},{"reviewer":{"displayName":"Nick Muresan"},"starRating":"FIVE","comment":"Perfect health care option","createTime":"2020-09-30T19:33:23.330738Z","updateTime":"2020-09-30T19:33:23.806806Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSURDa2ZlamdBRRAB"},{"reviewer":{"displayName":"Yossi A"},"starRating":"ONE","comment":"By far one of the WORST company to deal with. Unprofessional, untrained staff and incompetent beyond words.","createTime":"2020-08-18T06:34:43.164041Z","updateTime":"2020-08-18T06:34:43.164041Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUNDMHJqVEJREAE"},{"reviewer":{"displayName":"Juanita Lujan"},"starRating":"FIVE","comment":"Easy to navigate","createTime":"2020-06-27T04:44:11.964092Z","updateTime":"2020-06-27T04:44:11.964092Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUM4dk42S1VBEAE"},{"reviewer":{"displayName":"ashika Garcia"},"starRating":"ONE","createTime":"2019-12-19T22:17:47.901171Z","updateTime":"2019-12-19T22:17:49.165568Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSURNck1hUUNBEAE"},{"reviewer":{"displayName":"Sean Cody"},"starRating":"ONE","comment":"Logging in to check your account is like trying to steal the declaration of independence. Emails go unanswered. No certainty as to whether funds will be available. This is the only bank I have ever had these issues with.","createTime":"2019-12-11T18:44:14.468251Z","updateTime":"2019-12-11T18:44:14.468251Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUNNdjRtSFhREAE"},{"reviewer":{"displayName":"Jorge Lopez"},"starRating":"FIVE","comment":"Great Company, with Awesome Customer Services!","createTime":"2019-11-01T23:50:30.881932Z","updateTime":"2019-11-01T23:50:30.881932Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUQwMnFlOHhnRRAB"},{"reviewer":{"displayName":"Sequoia Grimble"},"starRating":"THREE","createTime":"2019-09-10T00:08:36.555890Z","updateTime":"2019-09-10T00:08:36.555890Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSURVXzd6Q1p3EAE"},{"reviewer":{"displayName":"Eva Barham"},"starRating":"ONE","comment":"Several years ago, I started an individual HSA at Sterling. It was cumbersome, and took a ridiculous amount of time and effort to set up and GIVE them Money. Transferring money which you must first deposit with Sterling to invest with their partner, TDA, takes a ridiculous amount of time. Their website is very poorly designed.... your account links are on the left margin, blank space to the right....click a link, and you don\'t see that your info has loaded far down on the page. EVERY year-end (December), there is an issue with incorrect information on the site about next year\'s contribution limits and the application appears to allow scheduling a contribution in December for a January contribution, but in fact fails. Every year I ask to have this escalated to the Tech Dept, and every year the problem persists. After yet another change to terms (they now require I keep an extra $500 idle in the base account and cannot transfer / invest it at TDA, so they earn money on my money, while I lose out), I am trying to transfer to a new HSA administrator and shut this mess down. NO progress in over two weeks and multiple calls, letters, emails from me, TDA,or Fidelity (new HSA administrator); I now discovered multiple Service reps gave me explicitly wrong info. Promises for a call back result in no call. They don\'t tell you upfront, but they have no process or will not do an institution-to-institution transfer if you want to move your HSA to another administrator. Apparently, they\'ll take your money but make it very difficult to get it back. I would NEVER recommend Sterling!","createTime":"2019-02-21T03:24:31.250439Z","updateTime":"2019-02-21T03:24:31.250439Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChdDSUhNMG9nS0VJQ0FnSUNvLWFDT3hRRRAB"},{"reviewer":{"displayName":"Natalie Davis"},"starRating":"ONE","comment":"Took 3 weeks to get an email response to a support question I had. I emailed them 3 TIMES over the course of a 2 week period and after I received a response asking for my info, it took another WEEK to have them take action. Very frustrating.","createTime":"2018-02-21T17:26:32.617Z","updateTime":"2018-02-21T17:26:32.617Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUNRMzRUOU13EAE"},{"reviewer":{"displayName":"Gregory Pelletteri"},"starRating":"ONE","comment":"THE WORST! JUST THE WORST IF YOU NEED ASSISTANCE HOPE TO GOD YOU DON\'T HAVE TO DEAL WITH STERLING!","createTime":"2018-02-14T16:46:00.888Z","updateTime":"2018-02-14T16:46:00.888Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSUNReE56SGNREAE"},{"reviewer":{"displayName":"Patti Reimer"},"starRating":"FIVE","createTime":"2017-02-18T00:36:43.226Z","updateTime":"2017-02-18T00:36:43.226Z","name":"accounts/114147206379557324111/locations/5479012694615267473/reviews/ChZDSUhNMG9nS0VJQ0FnSURBbi1qLWFnEAE"}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.jsx");



var rootElement = document.getElementById('reviews-app');
if (rootElement) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default().render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), rootElement);
}
})();

/******/ })()
;
//# sourceMappingURL=reviews.js.map