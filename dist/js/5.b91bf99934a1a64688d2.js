webpackJsonp([5],{

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(188)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(178),
  /* template */
  __webpack_require__(192),
  /* scopeId */
  "data-v-7b9aae28",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 178:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function () {
    return {
      transaction: {
        payment_method_id: '',
        quantity: 1
      },
      payment_methods_select: []
    };
  },
  methods: {
    pay: function () {
      let id = this.id;
      let api = this.$utils.getApiUrl();
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      };
      let data = {
        payment_method: this.transaction.payment_method_id,
        amount: this.transaction.quantity
      };
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(api + 'users/' + id + '/transactions', data, config).then(response => {
        this.$emit('updateCoins');
      });
    }
  },
  mounted() {
    let id = this.id;
    let api = this.$utils.getApiUrl();
    let config = {
      headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
    };
    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(api + 'users/' + id + '/payment_methods', config).then(response => {
      for (let item in response.data) {
        item = response.data[item];
        let obj = {};
        obj.label = item.description;
        obj.value = item.id;
        this.payment_methods_select.push(obj);
      }
    });
  },
  props: {
    title: {
      type: String,
      default: 'Add coins'
    },
    coins: {
      type: Number,
      default: 0
    },
    id: {}
  }
});

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(165)();
// imports


// module
exports.push([module.i, "i[data-v-7b9aae28]{font-size:54px}", ""]);

// exports


/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(184);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(166)("2c41e41d", content, true);

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card text-secondary bg-white"
  }, [_c('div', {
    staticClass: "card-title"
  }, [_vm._v("\n    " + _vm._s(_vm.title) + ": (" + _vm._s(_vm.coins) + " Coins)\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "card-content "
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "width-2of3"
  }, [_c('div', {
    staticClass: "list"
  }, [_c('div', {
    staticClass: "item two-lines"
  }, [_c('i', {
    staticClass: "item-primary"
  }), _vm._v(" "), _c('div', {
    staticClass: "item-content"
  }, [_c('label', [_vm._v("Payment Type")]), _vm._v(" "), _c('q-select', {
    staticClass: "full-width",
    attrs: {
      "type": "list",
      "options": _vm.payment_methods_select
    },
    model: {
      value: (_vm.transaction.payment_method_id),
      callback: function($$v) {
        _vm.transaction.payment_method_id = $$v
      },
      expression: "transaction.payment_method_id"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "item two-lines"
  }, [_c('i', {
    staticClass: "item-primary"
  }), _vm._v(" "), _c('div', {
    staticClass: "item-content"
  }, [_c('label', [_vm._v("Quantity")]), _vm._v(" "), _c('q-numeric', {
    attrs: {
      "min": 1
    },
    model: {
      value: (_vm.transaction.quantity),
      callback: function($$v) {
        _vm.transaction.quantity = $$v
      },
      expression: "transaction.quantity"
    }
  })], 1)])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-actions"
  }, [_c('div', {
    staticClass: "text-primary"
  }, [_c('button', {
    staticClass: "secondary",
    on: {
      "click": function($event) {
        _vm.$refs.confirmModal.open()
      }
    }
  }, [_vm._v("Add")])])])]), _vm._v(" "), _c('q-modal', {
    ref: "confirmModal",
    attrs: {
      "content-css": {
        minWidth: '40vw',
        minHeight: '20vh'
      }
    }
  }, [_c('q-layout', [_c('div', {
    staticClass: "toolbar bg-teal",
    slot: "header"
  }, [_c('button', {
    on: {
      "click": function($event) {
        _vm.pay()
      }
    }
  }, [_vm._v("Pay")]), _vm._v(" "), _c('q-toolbar-title', {
    staticClass: "text-center",
    attrs: {
      "padding": 1
    }
  }, [_vm._v("\n        Confirm Payment\n      ")]), _vm._v(" "), _c('button', {
    on: {
      "click": function($event) {
        _vm.$refs.confirmModal.close()
      }
    }
  }, [_vm._v("Close")])], 1), _vm._v(" "), _c('div', {
    staticClass: "layout-view"
  }, [_c('div', {
    staticClass: "layout-padding"
  }, [_c('div', {
    staticClass: "text-center"
  }, [_vm._v("\n          Please confirm your payment of "), _c('span', {
    staticClass: "label bg-primary text-white"
  }, [_vm._v(_vm._s(_vm.transaction.quantity) + " €")]), _vm._v(" with the button on the top of the modal.\n        ")])])])])], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "width-1of3"
  }, [_c('i', [_vm._v("monetization_on")])])
}]}

/***/ })

});