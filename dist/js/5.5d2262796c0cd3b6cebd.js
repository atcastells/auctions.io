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
        payment_method_id: ''
      },
      payment_methods_select: []
    };
  },
  methods: {
    paymentMethodsList: function (input) {
      for (let p in input) {
        p = input[p];
        let pMethod = {};
        pMethod.label = p.description;
        pMethod.value = p.id;
        this.payment_methods_select.push(pMethod);
      }
    }
  },
  mounted() {
    this.paymentMethodsList(this.paymentMethods);
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
    paymentMethods: {}
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
  }, [_vm._v("credit_card")]), _vm._v(" "), _c('div', {
    staticClass: "item-content"
  }, [_c('label', [_vm._v("Payment Methods")]), _vm._v(" "), _c('q-select', {
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
  })], 1)])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "width-1of3"
  }, [_c('i', [_vm._v("monetization_on")])])
}]}

/***/ })

});