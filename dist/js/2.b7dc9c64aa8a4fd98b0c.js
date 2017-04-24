webpackJsonp([2],{

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(189)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(183),
  /* template */
  __webpack_require__(194),
  /* scopeId */
  "data-v-17ac6f0f",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 183:
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
      creating: false,
      shipment_address: {
        fullname: '',
        country: '',
        city: '',
        postcode: '',
        street: '',
        phone: '',
        comment: ''
      },
      paymentTypes: []
    };
  },
  methods: {
    create: function () {
      this.creating = true;
    },
    save: function () {
      let api = this.$utils.getApiUrl();
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      };
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(api + 'users/' + this.userId + '/shipment_addresses', this.shipment_address, config).then(response => {
        this.$emit('updateAddresses');
        this.creating = false;
      });
    },
    incorrectField: function (value) {
      if (value.length < 3) return 'has-error';else {
        return 'valid';
      }
    }
  },
  computed: {
    validForm: function () {
      for (let item in this.shipment_address) {
        item = this.shipment_address[item];
        if (this.incorrectField(item) === 'has-error') {
          return false;
        }
      }
      return true;
    }
  },
  mounted() {},
  props: {
    title: {
      type: String,
      default: 'Shipment Addresses'
    },
    shipmentAddresses: {},
    userId: {}
  }
});

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(165)();
// imports


// module
exports.push([module.i, "i[data-v-17ac6f0f]{font-size:54px}", ""]);

// exports


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(184);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(166)("8876e672", content, true);

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card text-secondary bg-white"
  }, [_c('div', {
    staticClass: "card-title"
  }, [_vm._v("\r\n  " + _vm._s(_vm.title) + " (" + _vm._s(_vm.shipmentAddresses.length) + ")\r\n")]), _vm._v(" "), _c('div', {
    staticClass: "card-content "
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "width-2of3"
  }, [_c('div', {
    staticClass: "list"
  }, _vm._l((_vm.shipmentAddresses), function(i) {
    return _c('q-collapsible', {
      key: "i.id",
      attrs: {
        "icon": "local_shipping",
        "label": i.fullname
      }
    }, [_c('label', [_vm._v("Country")]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (i.country),
        expression: "i.country"
      }],
      staticClass: "full-width",
      attrs: {
        "readonly": ""
      },
      domProps: {
        "value": (i.country)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          i.country = $event.target.value
        }
      }
    }), _vm._v(" "), _c('label', [_vm._v("City")]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (i.city),
        expression: "i.city"
      }],
      staticClass: "full-width",
      attrs: {
        "readonly": ""
      },
      domProps: {
        "value": (i.city)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          i.city = $event.target.value
        }
      }
    }), _vm._v(" "), _c('label', [_vm._v("Code")]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (i.postcode),
        expression: "i.postcode"
      }],
      staticClass: "full-width",
      attrs: {
        "readonly": ""
      },
      domProps: {
        "value": (i.postcode)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          i.postcode = $event.target.value
        }
      }
    }), _vm._v(" "), _c('label', [_vm._v("Street")]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (i.street),
        expression: "i.street"
      }],
      staticClass: "full-width",
      attrs: {
        "readonly": ""
      },
      domProps: {
        "value": (i.street)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          i.street = $event.target.value
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "item two-lines"
    }, [_c('i', {
      staticClass: "item-primary"
    }, [_vm._v("phone")]), _vm._v(" "), _c('div', {
      staticClass: "item-content"
    }, [_c('label', [_vm._v("Phone")]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (i.phone),
        expression: "i.phone"
      }],
      staticClass: "full-width",
      attrs: {
        "readonly": ""
      },
      domProps: {
        "value": (i.phone)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          i.phone = $event.target.value
        }
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "item two-lines"
    }, [_c('i', {
      staticClass: "item-primary"
    }, [_vm._v("info")]), _vm._v(" "), _c('div', {
      staticClass: "item-content"
    }, [_c('label', [_vm._v("Comment")]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (i.comment),
        expression: "i.comment"
      }],
      staticClass: "full-width",
      attrs: {
        "readonly": ""
      },
      domProps: {
        "value": (i.comment)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          i.comment = $event.target.value
        }
      }
    })])])])
  }))])]), _vm._v(" "), (_vm.creating) ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "list full-width"
  }, [_c('div', {
    staticClass: "item two-lines"
  }, [_c('i', {
    staticClass: "item-primary"
  }, [_vm._v("edit")]), _vm._v(" "), _c('div', {
    staticClass: "item-content"
  }, [_c('label', [_vm._v("Description")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.shipment_address.fullname),
      expression: "shipment_address.fullname"
    }],
    staticClass: "full-width",
    class: _vm.incorrectField(_vm.shipment_address.fullname),
    domProps: {
      "value": (_vm.shipment_address.fullname)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.shipment_address.fullname = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "item two-lines"
  }, [_c('i', {
    staticClass: "item-primary"
  }, [_vm._v("edit")]), _vm._v(" "), _c('div', {
    staticClass: "item-content"
  }, [_c('label', [_vm._v("Country")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.shipment_address.country),
      expression: "shipment_address.country"
    }],
    staticClass: "full-width",
    class: _vm.incorrectField(_vm.shipment_address.country),
    domProps: {
      "value": (_vm.shipment_address.country)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.shipment_address.country = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "item two-lines"
  }, [_c('i', {
    staticClass: "item-primary"
  }, [_vm._v("edit")]), _vm._v(" "), _c('div', {
    staticClass: "item-content"
  }, [_c('label', [_vm._v("City")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.shipment_address.city),
      expression: "shipment_address.city"
    }],
    staticClass: "full-width",
    class: _vm.incorrectField(_vm.shipment_address.city),
    domProps: {
      "value": (_vm.shipment_address.city)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.shipment_address.city = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "item two-lines"
  }, [_c('i', {
    staticClass: "item-primary"
  }, [_vm._v("edit")]), _vm._v(" "), _c('div', {
    staticClass: "item-content"
  }, [_c('label', [_vm._v("Postcode")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.shipment_address.postcode),
      expression: "shipment_address.postcode"
    }],
    staticClass: "full-width",
    class: _vm.incorrectField(_vm.shipment_address.postcode),
    domProps: {
      "value": (_vm.shipment_address.postcode)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.shipment_address.postcode = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "item two-lines"
  }, [_c('i', {
    staticClass: "item-primary"
  }, [_vm._v("edit")]), _vm._v(" "), _c('div', {
    staticClass: "item-content"
  }, [_c('label', [_vm._v("Street")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.shipment_address.street),
      expression: "shipment_address.street"
    }],
    staticClass: "full-width",
    class: _vm.incorrectField(_vm.shipment_address.street),
    domProps: {
      "value": (_vm.shipment_address.street)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.shipment_address.street = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "item two-lines"
  }, [_c('i', {
    staticClass: "item-primary"
  }, [_vm._v("edit")]), _vm._v(" "), _c('div', {
    staticClass: "item-content"
  }, [_c('label', [_vm._v("Phone")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.shipment_address.phone),
      expression: "shipment_address.phone"
    }],
    staticClass: "full-width",
    class: _vm.incorrectField(_vm.shipment_address.phone),
    domProps: {
      "value": (_vm.shipment_address.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.shipment_address.phone = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "item two-lines"
  }, [_c('i', {
    staticClass: "item-primary"
  }, [_vm._v("edit")]), _vm._v(" "), _c('div', {
    staticClass: "item-content"
  }, [_c('label', [_vm._v("coment")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.shipment_address.comment),
      expression: "shipment_address.comment"
    }],
    staticClass: "full-width",
    class: _vm.incorrectField(_vm.shipment_address.comment),
    domProps: {
      "value": (_vm.shipment_address.comment)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.shipment_address.comment = $event.target.value
      }
    }
  })])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "card-actions"
  }, [_c('div', {
    staticClass: "text-primary"
  }, [_c('button', {
    staticClass: "secondary",
    attrs: {
      "disabled": _vm.creating
    },
    on: {
      "click": function($event) {
        _vm.create()
      }
    }
  }, [_vm._v("Add Shipment Address")]), _vm._v(" "), (_vm.creating) ? _c('button', {
    staticClass: "primary",
    attrs: {
      "disabled": !_vm.validForm
    },
    on: {
      "click": function($event) {
        _vm.save()
      }
    }
  }, [_vm._v("Save")]) : _vm._e()])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "width-1of3"
  }, [_c('i', [_vm._v("local_shipping")])])
}]}

/***/ })

});