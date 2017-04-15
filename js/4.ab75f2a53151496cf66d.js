webpackJsonp([4],{

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(131)(
  /* script */
  __webpack_require__(173),
  /* template */
  __webpack_require__(186),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 173:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      articleCategories: [],
      categoryFilter: [],
      auctions: [],
      now: '',
      auctionTimeRemaining: []
    };
  },
  methods: {
    msToTime: function (s) {
      var pad = (n, z = 2) => ('00' + n).slice(-z);
      return pad(s / 3.6e6 | 0) + ' : ' + pad(s % 3.6e6 / 6e4 | 0) + ' : ' + pad(s % 6e4 / 1000 | 0) + ''; // + '.' + pad(s % 1000, 3)
    },
    calculateTime: function (time, id) {
      var parsedTime = new Date(Date.parse(time.replace('-', '/', 'g')));
      var pendingTime = parsedTime - this.now;
      var idExists = '';
      if (pendingTime >= 0) {
        for (let auction in this.auctionTimeRemaining) {
          if (this.auctionTimeRemaining[auction].id === id) {
            idExists = true;
            this.auctionTimeRemaining[auction].timeToEnd = pendingTime;
          }
        }
        if (!idExists) {
          var auction = {};
          auction.id = id;
          auction.timeToEnd = pendingTime;
          this.auctionTimeRemaining.push(auction);
        }
      }
      return pendingTime.toString();
    },
    auction: function (id) {
      this.$router.push({
        name: 'auction',
        params: {
          id: id
        }
      });
    },
    auctionEnd: function (time) {
      return this.calculateTime(time) < 0;
    }
  },
  computed: {},
  created() {
    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://auctionator.local/api/auctions').then(response => {
      this.auctions = response.data;
    }).catch(function (error) {
      console.log(error);
    });
    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://auctionator.local/api/categories').then(response => {
      this.articleCategories = response.data;
      this.categoryFilter = this.articleCategories.map(a => a.id);
    }).catch(function (error) {
      console.log(error);
    });
  },
  mounted() {
    window.setInterval(() => {
      this.now = new Date();
    }, 1000);
  }
});

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row auto large-gutter"
  }, _vm._l((_vm.auctions), function(i) {
    return (i.closed != 1 && _vm.calculateTime(i.enddate, i.id) >= 0) ? _c('div', {
      key: i.id,
      staticClass: "width-1of3"
    }, [_c('div', {
      staticClass: "card shadow-4 bg-white"
    }, [_c('div', {
      staticClass: "card-title"
    }, [_vm._v(" Auction items: ")]), _vm._v(" "), _c('div', {
      staticClass: "list item-delimiter"
    }, _vm._l((i.articles), function(item) {
      return _c('q-collapsible', {
        key: item.id,
        attrs: {
          "icon": "explore",
          "label": item.name
        }
      }, [_c('div', {
        staticClass: "item"
      }, [_c('i', {
        staticClass: "item-primary"
      }, [_vm._v("info_outline")]), _vm._v(" "), _c('div', {
        staticClass: "item-content"
      }, [_vm._v("\n                  " + _vm._s(item.description) + "\n                ")])])])
    })), _vm._v(" "), _c('div', {
      staticClass: "card-actions card-no-top-padding"
    }, [_c('div', {
      staticClass: "text-lime"
    }, [_vm._v("\n              Ends in:\n            ")]), _vm._v(" "), _c('div', [_vm._v("\n              " + _vm._s(_vm.msToTime(_vm.calculateTime(i.enddate, i.id))) + "\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "auto"
    }), _vm._v(" "), _vm._m(0, true)])])]) : _vm._e()
  }))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "primary clear small"
  }, [_c('i', {
    staticClass: "on-left"
  }, [_vm._v("attach_money")]), _vm._v(" Bid")])
}]}

/***/ })

});