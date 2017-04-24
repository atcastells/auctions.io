webpackJsonp([9],{

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(210)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(201),
  /* template */
  __webpack_require__(213),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      auctionObj: ''
    };
  },
  created() {
    var id = this.$route.params['id'];
    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('https://auctionserver.ml/api/auctions/' + id + '/articles').then(response => {
      this.auctionObj = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(165)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(207);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(166)("7d4c63d4", content, true);

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\n  " + _vm._s(_vm.auctionObj) + "\n")])
},staticRenderFns: []}

/***/ })

});