webpackJsonp([1],{

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(183)

var Component = __webpack_require__(131)(
  /* script */
  __webpack_require__(174),
  /* template */
  __webpack_require__(188),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar__ = __webpack_require__(125);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      userName: '',
      email: '',
      coins: '',
      password: '',
      avatarUrl: ''
    };
  },
  methods: {
    disconnect: function () {
      this.$auth.destroyToken();
      location.reload();
    },
    setAuthenticatedUser() {
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      };

      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://auctionserver.ml/api/user', config).then(response => {
        this.$auth.setAuthenticatedUser(response.body);
        this.userName = response.data.name;
        this.coins = response.data.coins;
        this.email = response.data.email;
        this.avatarUrl = response.data.avatarurl;
      });
    },
    notify(msg) {
      __WEBPACK_IMPORTED_MODULE_1_quasar__["Toast"].create(msg);
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
    }
  },
  created() {
    this.setAuthenticatedUser();
  }
});

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(164)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(179);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(165)("d9e7e856", content, true);

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('q-layout', {
    staticClass: "bg-grey-14"
  }, [_c('div', {
    staticClass: "toolbar",
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
  }, [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")])], 1), _vm._v(" "), (_vm.isAuth) ? _c('button', {
    on: {
      "click": function($event) {
        _vm.$refs.userModal.open()
      }
    }
  }, [_vm._v("\n     Welcome " + _vm._s(_vm.email) + " "), _c('i', [_vm._v("account_circle")])]) : _vm._e()]), _vm._v(" "), (_vm.isAuth) ? _c('q-tabs', {
    slot: "navigation"
  }, [_c('q-tab', {
    attrs: {
      "icon": "home",
      "route": "/home",
      "exact": "",
      "replace": ""
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.isAuth) ? _c('q-modal', {
    ref: "userModal",
    attrs: {
      "content-css": {
        padding: '10px 40px 5px 40px',
        minWidth: '50vw'
      }
    }
  }, [_c('h4', [_vm._v("Hello " + _vm._s(_vm.userName))]), _vm._v(" "), _c('div', {
    staticClass: "card-actions"
  }, [_c('div', {
    staticClass: "text-primary"
  }, [_c('button', {
    staticClass: "primary",
    on: {
      "click": function($event) {
        _vm.$refs.userModal.close()
      }
    }
  }, [_vm._v("Close")])]), _vm._v(" "), _c('div', {
    staticClass: "text-primary"
  }, [_c('button', {
    staticClass: "secondary",
    on: {
      "click": function($event) {
        _vm.$refs.userModal.close()
      }
    }
  }, [_vm._v("Edit Profile")])]), _vm._v(" "), _c('div', {
    staticClass: "text-primary"
  }, [_c('button', {
    staticClass: "red",
    on: {
      "click": _vm.disconnect
    }
  }, [_vm._v("Log out")])]), _vm._v(" "), _c('div', {
    staticClass: "auto"
  }), _vm._v(" "), _c('div', {
    staticClass: "text-grey-6"
  }, [_vm._v("\n        23 minutes ago.\n      ")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "layout-padding  fit"
  }, [_c('router-view', {
    staticClass: "layout-view"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "toolbar",
    slot: "footer"
  })], 1)
},staticRenderFns: []}

/***/ })

});