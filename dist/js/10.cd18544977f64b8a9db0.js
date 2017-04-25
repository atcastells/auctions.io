webpackJsonp([10],{

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(180),
  /* template */
  __webpack_require__(181),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 180:
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
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      articles: ''
    };
  },
  methods: {
    getArticles: function () {
      let id = this.id;
      let api = this.$utils.getApiUrl();
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      };
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(api + 'auctions/' + id + '/articles', config).then(response => {
        this.articles = response.data;
        console.log(response.data);
      });
    }
  },
  mounted() {
    this.getArticles();
  },
  props: {
    id: {}
  }
});

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "list"
  }, _vm._l((_vm.articles), function(article) {
    return _c('div', {
      staticClass: "item text-center"
    }, [_vm._v("\r\n    " + _vm._s(article.name) + "\r\n  ")])
  }))
},staticRenderFns: []}

/***/ })

});