webpackJsonp([5],{

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(179),
  /* template */
  __webpack_require__(190),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 179:
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
      auctionTimeRemaining: [],
      currentBid: 0,
      currentAuction: null,
      minBid: 0
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
    auctionEnd: function (time) {
      return this.calculateTime(time) < 0;
    },
    bidModal: function (minBid, id) {
      this.minBid = minBid;
      this.currentBid = minBid;
      this.currentAuction = id;
      this.$refs.bidModal.open();
    }
  },
  computed: {},
  created() {
    let config = {
      headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
    };
    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('https://auctionserver.ml/api/auctions', config).then(response => {
      this.auctions = response.data;
    }).catch(function (error) {
      console.log(error);
    });
    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('https://auctionserver.ml/api/categories', config).then(response => {
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

/***/ 190:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row auto large-gutter"
  }, _vm._l((_vm.auctions), function(i) {
    return (i.closed != 1 && _vm.calculateTime(i.enddate, i.id) >= 0 && i.articles.length > 0) ? _c('div', {
      key: i.id,
      staticClass: "width-1of3"
    }, [_c('div', {
      staticClass: "card shadow-4 bg-white"
    }, [_c('div', {
      staticClass: "card-title"
    }, [_vm._v(" Auction id: #" + _vm._s(i.id) + "\n          ")]), _vm._v(" "), _c('div', {
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
      staticClass: "text-secondary"
    }, [_vm._v("\n              Ends in:\n            ")]), _vm._v(" "), _c('div', [_vm._v("\n              " + _vm._s(_vm.msToTime(_vm.calculateTime(i.enddate, i.id))) + "\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "auto"
    }), _vm._v(" "), _c('button', {
      staticClass: "primary clear small",
      on: {
        "click": function($event) {
          _vm.bidModal(i.minbid, i.id)
        }
      }
    }, [_c('i', {
      staticClass: "on-left"
    }, [_vm._v("attach_money")]), _vm._v(" Bid")])])])]) : _vm._e()
  })), _vm._v(" "), _c('q-modal', {
    ref: "bidModal",
    attrs: {
      "content-css": {
        minWidth: '80vw',
        minHeight: '40vh'
      }
    }
  }, [_c('q-layout', [_c('div', {
    staticClass: "toolbar bg-white text-secondary",
    slot: "header"
  }, [_c('q-toolbar-title', {
    attrs: {
      "padding": 1
    }
  }, [_vm._v("\n          Auction nº " + _vm._s(_vm.currentAuction) + "\n        ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "layout-content"
  }, [_c('div', {
    staticClass: "layout-view"
  }, [_c('div', {
    staticClass: "layout-padding"
  }, [_c('div', {
    staticClass: "row"
  }, [(_vm.minBid > 0) ? _c('q-range', {
    attrs: {
      "min": _vm.minBid,
      "max": 1000,
      "step": 1,
      "labelAlways": "",
      "snap": ""
    },
    model: {
      value: (_vm.currentBid),
      callback: function($$v) {
        _vm.currentBid = $$v
      },
      expression: "currentBid"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "row big-gutter"
  }, [_c('div', {
    staticClass: "width-1of3"
  }), _vm._v(" "), _c('div', {
    staticClass: "width-1of3"
  }, [_c('div', {
    staticClass: "card bg-secondary text-white"
  }, [_c('h2', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.currentBid) + " Coins")]), _vm._v(" "), _c('q-tooltip', {
    attrs: {
      "anchor": "bottom middle",
      "offset": [0, 50]
    }
  }, [_c('strong', [_vm._v("Click to post your bidModal")])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "width-1of3"
  })])])])])])], 1)], 1)
},staticRenderFns: []}

/***/ })

});
