webpackJsonp([0],{

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(182)

var Component = __webpack_require__(131)(
  /* script */
  __webpack_require__(175),
  /* template */
  __webpack_require__(187),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 175:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      email: 'aaroncastells@iesmontsia.org',
      password: 'aron200289'
    };
  },
  methods: {
    login: function () {
      let data = {
        client_id: 6,
        client_secret: 'cZR9DR79MC4miArdU9OC7v9mOwgOTMaCb8DamHax',
        grant_type: 'password',
        username: this.email,
        password: this.password
      };
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('https://auctionserver.ml/oauth/token', data).then(response => {
        this.$auth.setToken(response.data.access_token, response.data.expires_in + Date.now());
        location.reload();
      });
    },
    computed: {
      isAuth() {
        return this.$auth.isAuthenticated();
      }
    }
  }
});

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(164)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(178);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(165)("0a9cec92", content, true);

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row auto items-center"
  }, [_c('div', {
    staticClass: "width-1of3"
  }), _vm._v(" "), _c('div', {
    staticClass: "card shadow-5 bg-white "
  }, [_c('div', {
    staticClass: "card-title bg-secondary text-white"
  }, [_vm._v("\n          Please Login\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "layout-padding"
  }, [_c('div', {
    staticClass: "floating-label"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.email),
      expression: "email"
    }],
    staticClass: "bg-white full-width",
    attrs: {
      "required": "",
      "type": "email"
    },
    domProps: {
      "value": (_vm.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.email = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', [_vm._v("Email")])]), _vm._v(" "), _c('div', {
    staticClass: "floating-label"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    staticClass: "bg-white full-width",
    attrs: {
      "required": "",
      "type": "password"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', [_vm._v("Email")])]), _vm._v(" "), _c('button', {
    staticClass: "secondary push",
    on: {
      "click": _vm.login
    }
  }, [_vm._v("Login")])])]), _vm._v(" "), _c('div', {
    staticClass: "width-1of3"
  })])])
},staticRenderFns: []}

/***/ })

});