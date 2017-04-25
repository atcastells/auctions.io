webpackJsonp([11],{

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(209),
  /* template */
  __webpack_require__(220),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 209:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    };
  },
  methods: {
    login: function () {
      let data = {
        client_id: 6,
        client_secret: 'cZR9DR79MC4miArdU9OC7v9mOwgOTMaCb8DamHax',
        grant_type: 'password',
        username: 'aaroncastells@iesmontsia.org',
        password: 'aron200289'
      };
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('https://auctionserver.ml/oauth/token', data).then(response => {
        this.$auth.setToken(response.data.access_token, response.data.expires_in + Date.now(), response.data.refresh_token);
        this.register;
      });
    },
    navigateTo: function (nav) {
      this.$auth.destroyToken();
      this.$router.push({
        path: nav
      });
    },
    register: function () {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirm
      };
      let url = this.$utils.getUrl();
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      };
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(url + 'api/users', data, config).then(response => {});
      // this.$auth.destroyToken()
      location.reload();
    }
  },
  created() {
    // this.login()
  },
  computed: {
    passwordMatch: function () {
      if (!(this.password === this.passwordConfirm)) {
        return 'has-error';
      }
    }
  }
});

/***/ }),

/***/ 220:
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
  }, [_vm._v("\r\n        Register\r\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "layout-padding"
  }, [_c('div', {
    staticClass: "floating-label"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: "name"
    }],
    staticClass: "bg-white full-width",
    attrs: {
      "required": "",
      "type": "text"
    },
    domProps: {
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', [_vm._v("Name")])]), _vm._v(" "), _c('div', {
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
  }), _vm._v(" "), _c('label', [_vm._v("Password")])]), _vm._v(" "), _c('div', {
    staticClass: "floating-label"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.passwordConfirm),
      expression: "passwordConfirm"
    }],
    staticClass: "bg-white full-width",
    class: _vm.passwordMatch,
    attrs: {
      "required": "",
      "type": "password"
    },
    domProps: {
      "value": (_vm.passwordConfirm)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.passwordConfirm = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', [_vm._v("Confirm Password")])]), _vm._v(" "), _c('button', {
    staticClass: "secondary push",
    attrs: {
      "disabled": _vm.passwordMatch
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("Register")]), _vm._v(" "), _c('button', {
    staticClass: "primary push",
    on: {
      "click": function($event) {
        _vm.navigateTo('login')
      }
    }
  }, [_vm._v("Login")])])]), _vm._v(" "), _c('div', {
    staticClass: "width-1of3"
  })])])
},staticRenderFns: []}

/***/ })

});