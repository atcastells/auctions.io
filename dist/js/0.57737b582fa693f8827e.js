webpackJsonp([0,1,2,3,4],{

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(184)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(177),
  /* template */
  __webpack_require__(187),
  /* scopeId */
  "data-v-40f426ba",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(185)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(178),
  /* template */
  __webpack_require__(188),
  /* scopeId */
  "data-v-90c082fe",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(183)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(179),
  /* template */
  __webpack_require__(186),
  /* scopeId */
  "data-v-17ac6f0f",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(189),
  /* template */
  __webpack_require__(190),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(194),
  /* template */
  __webpack_require__(208),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quasar__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quasar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_quasar__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['name', 'email', 'coins', 'iconName', 'background', 'apiRoute', 'title'],
  data: function () {
    return {
      readOnly: true
    };
  },
  methods: {
    edit: function () {
      if (this.readOnly === true) {
        this.readOnly = false;
        __WEBPACK_IMPORTED_MODULE_0_quasar__["Toast"].create('Now you can edit the profile');
      }
    },
    updateUser: function () {
      this.readOnly = true;
    }
  }
});

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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function () {
    return {
      creating: false,
      paymentMethod: {
        description: '',
        payment_type: ''
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
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(api + 'users/' + this.userId + '/payment_methods', this.paymentMethod, config).then(response => {
        this.$emit('updateMethods');
        this.creating = false;
      });
    },
    getPaymentType: function (id) {
      for (let pt in this.paymentTypes) {
        pt = this.paymentTypes[pt];
        if (pt.value === id) return pt.label;
      }
    }
  },
  computed: {
    validForm: function () {
      return this.paymentMethod.description.length > 3 && this.paymentMethod.payment_type !== '';
    },
    incorrectDescription: function () {
      if (this.paymentMethod.description.length < 3) {
        return 'has-error';
      }
    },
    incorrectPaymentType: function () {
      if (this.paymentMethod.payment_type === '') {
        return 'has-error';
      }
    }
  },
  mounted() {
    let api = this.$utils.getApiUrl();
    let config = {
      headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
    };
    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(api + 'payment_types', config).then(response => {
      for (let item in response.data) {
        item = response.data[item];
        let obj = {};
        obj.label = item.name;
        obj.value = item.id;
        this.paymentTypes.push(obj);
      }
    });
  },
  props: {
    title: {
      type: String,
      default: 'Payment Methods'
    },
    paymentMethods: {},
    userId: {}
  }
});

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
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(165)();
// imports


// module
exports.push([module.i, "i[data-v-17ac6f0f]{font-size:54px}", ""]);

// exports


/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(165)();
// imports


// module
exports.push([module.i, "i[data-v-40f426ba]{font-size:54px}", ""]);

// exports


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(165)();
// imports


// module
exports.push([module.i, "i[data-v-90c082fe]{font-size:54px}", ""]);

// exports


/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(180);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(166)("8876e672", content, true);

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(181);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(166)("84c56bdc", content, true);

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(182);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(166)("3fc4407e", content, true);

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card text-secondary bg-white"
  }, [_c('div', {
    staticClass: "card-title"
  }, [_vm._v("\n  " + _vm._s(_vm.title) + " (" + _vm._s(_vm.shipmentAddresses.length) + ")\n")]), _vm._v(" "), _c('div', {
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

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('q-transition', {
    attrs: {
      "name": "slide"
    }
  }, [_c('div', {
    staticClass: "card text-secondary",
    class: _vm.background
  }, [_c('div', {
    staticClass: "card-title"
  }, [_vm._v("\n  " + _vm._s(_vm.title) + "\n")]), _vm._v(" "), _c('div', {
    staticClass: "card-content "
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "width-1of3"
  }, [_c('i', [_vm._v(_vm._s(_vm.iconName))])]), _vm._v(" "), _c('div', {
    staticClass: "width-2of3"
  }, [_c('div', {
    staticClass: "list"
  }, [_c('div', {
    staticClass: "item two-lines"
  }, [_c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.readOnly),
      expression: "!readOnly"
    }],
    staticClass: "item-primary"
  }, [_vm._v("edit")]), _vm._v(" "), _c('div', {
    staticClass: "item-content"
  }, [_c('label', [_vm._v("Name")]), _vm._v(" "), _c('input', {
    staticClass: "full-width",
    attrs: {
      "readonly": _vm.readOnly
    },
    domProps: {
      "value": _vm.name
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "item two-lines"
  }, [_c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.readOnly),
      expression: "!readOnly"
    }],
    staticClass: "item-primary"
  }, [_vm._v("edit")]), _vm._v(" "), _c('div', {
    staticClass: "item-content"
  }, [_c('label', [_vm._v("Email")]), _vm._v(" "), _c('input', {
    staticClass: "full-width",
    attrs: {
      "readonly": _vm.readOnly
    },
    domProps: {
      "value": _vm.email
    }
  })])])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-actions"
  }, [_c('div', {
    staticClass: "text-primary"
  }, [_c('button', {
    staticClass: "secondary",
    on: {
      "click": function($event) {
        _vm.edit()
      }
    }
  }, [_vm._v("Edit Profile")]), _vm._v(" "), (!_vm.readOnly) ? _c('button', {
    staticClass: "primary",
    on: {
      "click": function($event) {
        _vm.updateUser()
      }
    }
  }, [_vm._v("Submit")]) : _vm._e()])])])])])
},staticRenderFns: []}

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card text-secondary bg-white"
  }, [_c('div', {
    staticClass: "card-title"
  }, [_vm._v("\n  " + _vm._s(_vm.title) + " (" + _vm._s(_vm.paymentMethods.length) + ")\n")]), _vm._v(" "), _c('div', {
    staticClass: "card-content "
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "width-2of3"
  }, _vm._l((_vm.paymentMethods), function(i) {
    return _c('div', {
      key: "i.id",
      staticClass: "list"
    }, [_c('div', {
      staticClass: "item two-lines"
    }, [_c('i', {
      staticClass: "item-primary"
    }, [_vm._v("description")]), _vm._v(" "), _c('div', {
      staticClass: "item-content"
    }, [_c('label', [_vm._v(_vm._s(_vm.getPaymentType(i.paymenttype_id)))]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (i.description),
        expression: "i.description"
      }],
      staticClass: "full-width",
      attrs: {
        "readonly": ""
      },
      domProps: {
        "value": (i.description)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          i.description = $event.target.value
        }
      }
    })])])])
  }))]), _vm._v(" "), (_vm.creating) ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "list full-width"
  }, [_c('div', {
    staticClass: "item two-lines"
  }, [_c('i', {
    staticClass: "item-primary"
  }, [_vm._v("edit")]), _vm._v(" "), _c('div', {
    staticClass: "item-content"
  }, [_c('label', [_vm._v("Payment Type")]), _vm._v(" "), _c('q-select', {
    staticClass: "full-width",
    class: _vm.incorrectPaymentType,
    attrs: {
      "type": "list",
      "options": _vm.paymentTypes
    },
    model: {
      value: (_vm.paymentMethod.payment_type),
      callback: function($$v) {
        _vm.paymentMethod.payment_type = $$v
      },
      expression: "paymentMethod.payment_type"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "item two-lines"
  }, [_c('i', {
    staticClass: "item-primary"
  }, [_vm._v("edit")]), _vm._v(" "), _c('div', {
    staticClass: "item-content"
  }, [_c('label', [_vm._v("Description")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.paymentMethod.description),
      expression: "paymentMethod.description"
    }],
    staticClass: "full-width",
    class: _vm.incorrectDescription,
    domProps: {
      "value": (_vm.paymentMethod.description)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.paymentMethod.description = $event.target.value
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
  }, [_vm._v("Add Payment Method")]), _vm._v(" "), (_vm.creating) ? _c('button', {
    staticClass: "secondary",
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
  }, [_c('i', [_vm._v("credit_card")])])
}]}

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infoCard_vue__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infoCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__infoCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paymentCard_vue__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paymentCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__paymentCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shipmentCard_vue__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shipmentCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__shipmentCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    infoCard: __WEBPACK_IMPORTED_MODULE_0__infoCard_vue___default.a,
    paymentCard: __WEBPACK_IMPORTED_MODULE_1__paymentCard_vue___default.a,
    shipmentCard: __WEBPACK_IMPORTED_MODULE_2__shipmentCard_vue___default.a
  },
  props: {
    user: {}
  },
  mounted() {},
  created() {
    this.getPaymentMethods(this.user.id);
    this.getShipmentAddresses(this.user.id);
  },
  methods: {
    getPaymentMethods: function (id) {
      let api = this.$utils.getApiUrl();
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      };
      __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(api + 'users/' + id + '/payment_methods', config).then(response => {
        this.paymentMethods = response.data;
      });
    },
    getShipmentAddresses: function (id) {
      let api = this.$utils.getApiUrl();
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      };
      __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(api + 'users/' + id + '/shipment_addresses', config).then(response => {
        this.shipmentAddresses = response.data;
      });
    }
  },
  data() {
    return {
      paymentMethods: '',
      shipmentAddresses: ''
    };
  },
  computed: {
    isAuth() {
      return this.$auth.isAuthenticated();
    }
  }
});

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('q-layout', [_c('div', {
    staticClass: "toolbar bg-white text-secondary",
    slot: "header"
  }, [_c('button', {
    on: {
      "click": function($event) {
        _vm.$refs.userModal.close()
      }
    }
  }, [_c('i', [_vm._v("keyboard_arrow_left")])]), _vm._v(" "), _c('q-toolbar-title', {
    attrs: {
      "padding": 1
    }
  }, [_vm._v("\n      " + _vm._s(_vm.user.name) + "'s profile\n    ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "layout-view  bg-teal"
  }, [_c('div', {
    staticClass: "layout-padding large-gutter"
  }, [_c('div', {
    staticClass: "row flex wrap gutter"
  }, [_c('div', {
    staticClass: "width-1of2 "
  }, [_c('info-card', {
    attrs: {
      "title": "User info",
      "name": _vm.user.name,
      "email": _vm.user.email,
      "coins": _vm.user.coins,
      "iconName": "info_outline",
      "background": "bg-white"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "width-1of2 "
  }, [_c('payment-card', {
    attrs: {
      "paymentMethods": _vm.paymentMethods,
      "userId": this.user.id
    },
    on: {
      "updateMethods": function($event) {
        _vm.getPaymentMethods(_vm.user.id)
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "width-1of2 "
  }), _vm._v(" "), _c('div', {
    staticClass: "width-1of2 "
  }, [_c('shipment-card', {
    attrs: {
      "shipmentAddresses": _vm.shipmentAddresses,
      "userId": _vm.user.id
    },
    on: {
      "updateAddresses": function($event) {
        _vm.getShipmentAddresses(_vm.user.id)
      }
    }
  })], 1)])])])])
},staticRenderFns: []}

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_quasar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_vue__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__profile_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    profile: __WEBPACK_IMPORTED_MODULE_2__profile_vue___default.a
  },
  data() {
    return {
      user: {},
      avatarUrl: ''
    };
  },
  methods: {
    disconnect: function () {
      this.$auth.destroyToken();
      location.reload();
    },
    setAuthenticatedUser() {
      let api = this.$utils.getApiUrl();
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      };

      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(api + 'user', config).then(response => {
        this.$auth.setAuthenticatedUser(response.body);
        this.user = response.data;
        this.avatarUrl = this.getAvatar(this.user.email, 200);
        this.getUserBids();
      });
    },
    getUserBids() {
      let api = this.$utils.getApiUrl();
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      };
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(api + 'users/' + this.user.id + '/bids', config).then(response => {
        console.log(response.data);
      });
    },
    notify(msg) {
      __WEBPACK_IMPORTED_MODULE_1_quasar__["Toast"].create(msg);
    },
    getAvatar: function (email, size) {
      let uri = 'https://api.adorable.io/avatars/' + size + '/' + email + '.png';
      return uri;
    },
    refreshSession: function () {
      let data = {
        client_id: 6,
        client_secret: 'cZR9DR79MC4miArdU9OC7v9mOwgOTMaCb8DamHax',
        grant_type: 'refresh_token',
        refresh_token: localStorage.getItem('refresh')
      };
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('https://auctionserver.ml/oauth/token', data).then(response => {
        if (this.$utils.debug()) {
          console.log('Old token: ' + this.$auth.getToken());
          console.log('New token: ' + response.data.access_token);
        }
        this.$auth.setToken(response.data.access_token, response.data.expires_in + Date.now(), response.data.refresh_token);
      });
    }
  },
  props: {
    title: {
      type: String,
      default: 'Auctions.io'
    }
  },
  computed: {
    isAuth() {
      return this.$auth.isAuthenticated();
    },
    userLoaded() {
      return this.user.id > 0;
    }
  },
  created() {
    if (this.isAuth) {
      this.setAuthenticatedUser();
    }
  },
  mounted() {
    window.setInterval(() => {
      this.refreshSession();
    }, 180000);
  }
});

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('q-layout', {
    staticClass: "bg-blue-grey-4"
  }, [_c('div', {
    staticClass: "toolbar bg-white text-secondary",
    slot: "header"
  }, [_c('div', {
    staticClass: "toolbar-content"
  }, [_c('button', {
    staticClass: "hide-on-drawer-visible",
    on: {
      "click": function($event) {
        _vm.$refs.drawer.toggle()
      }
    }
  }, [_c('i', [_vm._v("menu")])]), _vm._v(" "), _c('q-toolbar-title', {
    attrs: {
      "padding": 1
    }
  }, [_vm._v("\n        " + _vm._s(_vm.title) + "\n      ")])], 1), _vm._v(" "), (_vm.isAuth) ? _c('button', {
    on: {
      "click": function($event) {
        _vm.$refs.userModal.open()
      }
    }
  }, [_vm._v("\n       Welcome " + _vm._s(_vm.user.email) + " "), _c('i', [_vm._v("account_circle")])]) : _vm._e(), _vm._v(" "), (_vm.isAuth) ? _c('button', {
    on: {
      "click": function($event) {
        _vm.disconnect()
      }
    }
  }, [_c('i', [_vm._v("exit_to_app")]), _vm._v(" "), _c('q-tooltip', {
    attrs: {
      "anchor": "center right",
      "offset": [-30, 80]
    }
  }, [_c('strong', [_vm._v("Close session")])])], 1) : _vm._e()]), _vm._v(" "), (_vm.userLoaded) ? _c('q-drawer', {
    ref: "drawer"
  }, [_c('div', {
    staticClass: "toolbar bg-teal text-white"
  }, [_c('q-toolbar-title', [_vm._v("\n        Stats\n      ")])], 1), _vm._v(" "), (_vm.isAuth) ? _c('div', {
    staticClass: "list platform-delimiter"
  }, [_c('div', {
    staticClass: "generic-margin",
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('img', {
    staticStyle: {
      "border-radius": "30%",
      "height": "100px"
    },
    attrs: {
      "src": _vm.avatarUrl
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "item two-lines"
  }, [_c('i', {
    staticClass: "item-primary"
  }, [_vm._v("monetization_on")]), _vm._v(" "), _c('div', {
    staticClass: "item-content"
  }, [_c('input', {
    staticClass: "full-width text-blue text-bold",
    attrs: {
      "type": "number",
      "readonly": ""
    },
    domProps: {
      "value": _vm.user.coins
    }
  })])])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('q-modal', {
    ref: "userModal",
    staticClass: "maximized",
    attrs: {
      "content-css": {
        padding: '10px 40px 5px 40px',
        minWidth: '50vw'
      }
    }
  }, [(_vm.userLoaded) ? _c('profile', {
    attrs: {
      "user": _vm.user
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "layout-padding generic-margin fit"
  }, [_c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('router-view', {
    staticClass: "layout-view"
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "toolbar bg-teal",
    slot: "footer"
  })], 1)
},staticRenderFns: []}

/***/ })

});