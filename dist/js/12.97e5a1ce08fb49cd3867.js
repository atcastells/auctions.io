webpackJsonp([12],{

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(206),
  /* template */
  __webpack_require__(218),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_quasar__);
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
      user: {},
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
    getAuctions: function () {
      window.setInterval(() => {
        let api = this.$utils.getApiUrl();
        let config = {
          headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
        };
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(api + 'auctions/active', config).then(response => {
          this.auctions = response.data;
        });
      }, 10000);
    },
    notify(msg) {
      __WEBPACK_IMPORTED_MODULE_1_quasar__["Toast"].create(msg);
    },
    msToTime: function (s) {
      var pad = (n, z = 2) => ('00' + n).slice(-z);
      return pad(s / 3.6e6 | 0) + ' : ' + pad(s % 3.6e6 / 6e4 | 0) + ' : ' + pad(s % 6e4 / 1000 | 0) + ''; // + '.' + pad(s % 1000, 3)
    },
    calculateTime: function (time, id) {
      var mysqlTime = time.split(/[- :]/);
      var parsedTime = new Date(Date.UTC(mysqlTime[0], mysqlTime[1] - 1, mysqlTime[2], mysqlTime[3], mysqlTime[4], mysqlTime[5]));
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
      if (!this.canBid) {
        this.notify("You don't have enougth coins to make a bid.");
        return;
      }
      this.minBid = minBid;
      this.currentBid = minBid;
      this.currentAuction = id;
      this.$refs.bidModal.open();
    },
    bid: function () {
      let api = this.$utils.getApiUrl();
      let data = {
        coins: this.currentBid,
        user: this.user.id
      };
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      };
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(api + 'auctions/' + this.currentAuction + '/bids', data, config).then(response => {
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
      });
    }
  },
  computed: {
    canBid: function () {
      return this.user.coins >= 50;
    }
  },
  created() {
    let api = this.$utils.getApiUrl();
    let config = {
      headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
    };
    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(api + 'auctions/active', config).then(response => {
      this.auctions = response.data;
      this.getAuctions();
    }).catch(function (error) {
      console.log(error);
    });
    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(api + 'categories', config).then(response => {
      this.articleCategories = response.data;
      this.categoryFilter = this.articleCategories.map(a => a.id);
    }).catch(function (error) {
      console.log(error);
    });

    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(api + 'user', config).then(response => {
      this.user = response.data;
    });
  },
  mounted() {
    window.setInterval(() => {
      this.now = new Date();
    }, 1000);
  }
});

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row auto large-gutter"
  }, [_vm._l((_vm.auctions), function(i) {
    return (i.closed != 1 && _vm.calculateTime(i.enddate, i.id) >= 0 && i.articles.length > 0) ? _c('div', {
      key: i.id,
      staticClass: "width-2of5"
    }, [_c('div', {
      staticClass: "card shadow-4 bg-white"
    }, [_c('div', {
      staticClass: "card-title text-teal"
    }, [_vm._v(" Auction id: #" + _vm._s(i.id) + " ")]), _vm._v(" "), _c('div', {
      staticClass: "list item-delimiter"
    }, _vm._l((i.articles), function(item) {
      return _c('q-collapsible', {
        key: item.id,
        attrs: {
          "icon": "explore",
          "label": item.name
        }
      }, [_c('div', {
        staticClass: "item multiple-lines"
      }, [_c('div', {
        staticClass: "item-content has-secondary"
      }, [_vm._v(" " + _vm._s(item.description) + " ")])])])
    })), _vm._v(" "), _c('div', {
      staticClass: "card-actions card-no-top-padding"
    }, [_c('div', {
      staticClass: "text-secondary"
    }, [_vm._v(" Ends in: ")]), _vm._v(" "), _c('div', [_vm._v(" " + _vm._s(_vm.msToTime(_vm.calculateTime(i.enddate, i.id))) + " ")]), _vm._v(" "), _c('div', {
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
  }), _vm._v(" "), _c('q-modal', {
    ref: "bidModal",
    attrs: {
      "content-css": {
        padding: '10px'
      }
    }
  }, [_c('div', {
    staticClass: "toolbar bg-white text-secondary",
    slot: "header"
  }, [_c('q-toolbar-title', {
    attrs: {
      "padding": 1
    }
  }, [_vm._v(" Auction nº " + _vm._s(_vm.currentAuction) + " ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "row generic-margin"
  }, [_c('div', {
    staticClass: "width-1of3 "
  }), _vm._v(" "), _c('div', {
    staticClass: "width-1of3 "
  }, [_c('q-numeric', {
    attrs: {
      "min": _vm.minBid
    },
    model: {
      value: (_vm.currentBid),
      callback: function($$v) {
        _vm.currentBid = $$v
      },
      expression: "currentBid"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "width-1of3 "
  })]), _vm._v(" "), _c('div', {
    staticClass: "row no-margin"
  }, [_c('button', {
    staticClass: "primary full-width",
    attrs: {
      "disabled": !_vm.canBid
    },
    on: {
      "click": function($event) {
        _vm.bid()
      }
    }
  }, [_vm._v(" Bid! ")])])])], 2)])
},staticRenderFns: []}

/***/ })

});