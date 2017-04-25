webpackJsonp([2,10],{

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

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(196)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(183),
  /* template */
  __webpack_require__(201),
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

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auctionArticles_vue__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auctionArticles_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__auctionArticles_vue__);
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
  components: {
    auctionArticles: __WEBPACK_IMPORTED_MODULE_0__auctionArticles_vue___default.a
  },
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

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(165)();
// imports


// module
exports.push([module.i, "i[data-v-b9604432]{font-size:54px}", ""]);

// exports


/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(191);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(166)("1ca5fcf1", content, true);

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card text-secondary bg-white"
  }, [_c('div', {
    staticClass: "card-title"
  }, [_vm._v("\n    Won Auctions\n  ")]), _vm._v(" "), _c('div', {
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
    }, [_c('small', [_vm._v(" Info ")]), _vm._v(" "), _c('div', {
      staticClass: "list"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "width-1of3"
    }, [_vm._v("\n                      Start date: " + _vm._s(auction.startdate) + "\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "width-1of3"
    }, [_c('auction-articles', {
      attrs: {
        "id": auction.id
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "width-1of3"
    }, [_vm._v("\n                      End date: " + _vm._s(auction.enddate) + "\n                    ")])])])])])], 1)])])
  }))])
},staticRenderFns: []}

/***/ })

});