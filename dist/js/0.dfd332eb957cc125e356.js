webpackJsonp([0,1],{

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(175)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(173),
  /* template */
  __webpack_require__(176),
  /* scopeId */
  "data-v-40f426ba",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(180),
  /* template */
  __webpack_require__(192),
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['name', 'email', 'coins', 'iconName', 'background', 'apiRoute'],
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

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(165)();
// imports


// module
exports.push([module.i, "i[data-v-40f426ba]{font-size:54px}", ""]);

// exports


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(174);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(166)("84c56bdc", content, true);

/***/ }),

/***/ 176:
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
  }, [_c('input', {
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
  }, [_c('input', {
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
  }, [_vm._v("Edit Profile")]), _vm._v(" "), _c('button', {
    staticClass: "primary",
    on: {
      "click": function($event) {
        _vm.updateUser()
      }
    }
  }, [_vm._v("Submit")])])])])])])
},staticRenderFns: []}

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_quasar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infoCard_vue__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infoCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__infoCard_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    infoCard: __WEBPACK_IMPORTED_MODULE_2__infoCard_vue___default.a
  },
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

      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('https://auctionserver.ml/api/user', config).then(response => {
        this.$auth.setAuthenticatedUser(response.body);
        this.userName = response.data.name;
        this.coins = response.data.coins;
        this.email = response.data.email;
        this.avatarUrl = this.getAvatar(this.email, 200);
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

/***/ 192:
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
  })], 1) : _vm._e(), _vm._v(" "), (_vm.isAuth) ? _c('q-drawer', {
    ref: "drawer"
  }, [_c('div', {
    staticClass: "toolbar"
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
    staticClass: "full-width",
    attrs: {
      "type": "number",
      "readonly": ""
    },
    domProps: {
      "value": _vm.coins
    }
  })])])]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.isAuth) ? _c('q-modal', {
    ref: "userModal",
    staticClass: "maximized",
    attrs: {
      "content-css": {
        padding: '10px 40px 5px 40px',
        minWidth: '50vw'
      }
    }
  }, [_c('q-layout', [_c('div', {
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
  }, [_vm._v("\n          " + _vm._s(_vm.userName) + "'s profile\n        ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "layout-view  bg-teal"
  }, [_c('div', {
    staticClass: "layout-padding large-gutter"
  }, [_c('div', {
    staticClass: "flex wrap gutter"
  }, [_c('div', {
    staticClass: "width-1of2 "
  }, [_c('info-card', {
    attrs: {
      "name": _vm.userName,
      "email": _vm.email,
      "coins": _vm.coins,
      "iconName": "info_outline",
      "background": "bg-white"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "width-1of4 "
  }), _vm._v(" "), _c('div', {
    staticClass: "width-1of4 "
  })])])])])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "layout-padding generic-margin fit"
  }, [_c('router-view', {
    staticClass: "layout-view"
  })], 1), _vm._v(" "), (_vm.isAuth) ? _c('q-fab', {
    staticClass: "absolute-bottom-right",
    staticStyle: {
      "right": "18px",
      "bottom": "18px"
    },
    attrs: {
      "classNames": "primary",
      "icon": "settings",
      "active-icon": "settings",
      "direction": "up"
    },
    on: {
      "click": function($event) {
        _vm.alert()
      }
    }
  }, [_c('q-small-fab', {
    ref: "logout",
    staticClass: "purple",
    attrs: {
      "icon": "exit_to_app"
    },
    nativeOn: {
      "click": function($event) {
        _vm.disconnect()
      }
    }
  }, [_c('q-tooltip', {
    attrs: {
      "anchor": "center right",
      "self": "center left",
      "offset": [-20, 0]
    }
  }, [_c('strong', [_vm._v("Close session "), _c('i', [_vm._v("keyboard_arrow_right")])])])], 1), _vm._v(" "), (this.$utils.debug()) ? _c('q-small-fab', {
    ref: "refreshSession",
    staticClass: "red",
    attrs: {
      "icon": "refresh"
    },
    nativeOn: {
      "click": function($event) {
        _vm.refreshSession()
      }
    }
  }, [_c('q-tooltip', {
    attrs: {
      "anchor": "center right",
      "self": "center left",
      "offset": [-20, 0]
    }
  }, [_c('strong', [_vm._v("Refresh token's (DEBUG)"), _c('i', [_vm._v("keyboard_arrow_right")])])])], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "toolbar",
    slot: "footer"
  })], 1)
},staticRenderFns: []}

/***/ })

});