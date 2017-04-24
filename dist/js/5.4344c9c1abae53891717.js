webpackJsonp([5],{

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(193)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(180),
  /* template */
  __webpack_require__(198),
  /* scopeId */
  "data-v-b9604432",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import axios from 'axios'
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  props: {
    wonAuctions: {}
  },
  mounted() {},
  methods: {}
});

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(165)();
// imports


// module
exports.push([module.i, "i[data-v-b9604432]{font-size:54px}", ""]);

// exports


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(188);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(166)("1ca5fcf1", content, true);

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card text-secondary bg-white"
  }, [_c('div', {
    staticClass: "card-title"
  }, [_vm._v("\n    Finished Auctions\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "card-content "
  }, _vm._l((_vm.wonAuctions), function(auction) {
    return _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "auto text-center"
    }, [_c('div', {
      staticClass: "card bg-secondary text-white"
    }, [_c('big', [_vm._v(" Auction ID # " + _vm._s(auction.id) + " ")]), _vm._v(" "), _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "auto"
    }, [_c('small', [_vm._v(" Products ")]), _vm._v(" "), _c('div', {
      staticClass: "list"
    }, [_vm._v("\n              " + _vm._s(auction) + "\n            ")])])])], 1)])])
  }))])
},staticRenderFns: []}

/***/ })

});