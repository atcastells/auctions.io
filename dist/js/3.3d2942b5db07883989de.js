webpackJsonp([3],{

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(180)

var Component = __webpack_require__(131)(
  /* script */
  __webpack_require__(171),
  /* template */
  __webpack_require__(184),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 171:
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
    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://auctionator.local/api/auctions/' + id + '/articles').then(response => {
      this.auctionObj = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(164)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(176);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(165)("7d4c63d4", content, true);

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\n  " + _vm._s(_vm.auctionObj) + "\n")])
},staticRenderFns: []}

/***/ })

});