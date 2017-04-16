webpackJsonp([6],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  let authenticatedUser = null;
  Vue.auth = {
    setToken(token, expiration) {
      localStorage.setItem('token', token);
      localStorage.setItem('expiration', expiration);
    },

    getToken() {
      var token = localStorage.getItem('token');
      var expiration = localStorage.getItem('expiration');

      if (!token || !expiration) return null;

      if (Date.now() > parseInt(expiration)) {
        this.destroyToken();
        return null;
      } else {
        return token;
      }
    },

    destroyToken() {
      localStorage.removeItem('token');
      localStorage.removeItem('expiration');
    },

    isAuthenticated() {
      if (this.getToken()) {
        return true;
      } else {
        return false;
      }
    },

    setAuthenticatedUser(data) {
      authenticatedUser = data;
    },

    getAuthtenticatedUser() {
      return authenticatedUser;
    }

  };

  Object.defineProperties(Vue.prototype, {
    $auth: {
      get: () => {
        return Vue.auth;
      }
    }
  });
});

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(160);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

function load(component) {
  return () => __webpack_require__(163)(`./${component}.vue`);
}

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */
  mode: 'history',
  routes: [{ path: '/',
    component: load('Index'),
    children: [{
      path: 'login',
      name: 'login',
      component: load('Login'),
      meta: {
        guest: true
      }
    }, {
      path: 'home',
      name: 'home',
      component: load('Home'),
      meta: {
        auth: true
      }
    }, {
      path: 'auction/:id',
      name: 'auction',
      component: load('Auction'),
      meta: {
        auth: true
      }
    }]
  }, // Default
  { path: '*', component: load('Error404') } // Not found
  ]
}));

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(153)

var Component = __webpack_require__(131)(
  /* script */
  __webpack_require__(150),
  /* template */
  __webpack_require__(159),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_quasar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth__ = __webpack_require__(127);
// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
__webpack_require__(129);
// ==============================







__WEBPACK_IMPORTED_MODULE_3_axios___default.a.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'Accept': 'application/json'
};

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_quasar___default.a); // Install Quasar Framework
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_axios___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4_auth__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].beforeEach((to, from, next) => {
  if (to.path === '/') {
    if (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].auth.isAuthenticated()) {
      next({
        path: '/home'
      });
    } else {
      next({
        path: '/login'
      });
    }
  }
  if (to.matched.some(record => record.meta.guest)) {
    if (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].auth.isAuthenticated()) {
      next({
        path: '/home'
      });
    } else next();
  } else if (to.matched.some(record => record.meta.auth)) {
    if (!__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].auth.isAuthenticated()) {
      next({
        path: '/login'
      });
    } else next();
  } else next();
});

__WEBPACK_IMPORTED_MODULE_1_quasar___default.a.start(() => {
  /* eslint-disable no-new */
  new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: '#q-app',
    router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
    render: h => h(__webpack_require__(130))
  });
});

/***/ }),

/***/ 150:
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

/*
 * Root component
 */
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 10,
	"./af.js": 10,
	"./ar": 17,
	"./ar-dz": 11,
	"./ar-dz.js": 11,
	"./ar-kw": 12,
	"./ar-kw.js": 12,
	"./ar-ly": 13,
	"./ar-ly.js": 13,
	"./ar-ma": 14,
	"./ar-ma.js": 14,
	"./ar-sa": 15,
	"./ar-sa.js": 15,
	"./ar-tn": 16,
	"./ar-tn.js": 16,
	"./ar.js": 17,
	"./az": 18,
	"./az.js": 18,
	"./be": 19,
	"./be.js": 19,
	"./bg": 20,
	"./bg.js": 20,
	"./bn": 21,
	"./bn.js": 21,
	"./bo": 22,
	"./bo.js": 22,
	"./br": 23,
	"./br.js": 23,
	"./bs": 24,
	"./bs.js": 24,
	"./ca": 25,
	"./ca.js": 25,
	"./cs": 26,
	"./cs.js": 26,
	"./cv": 27,
	"./cv.js": 27,
	"./cy": 28,
	"./cy.js": 28,
	"./da": 29,
	"./da.js": 29,
	"./de": 32,
	"./de-at": 30,
	"./de-at.js": 30,
	"./de-ch": 31,
	"./de-ch.js": 31,
	"./de.js": 32,
	"./dv": 33,
	"./dv.js": 33,
	"./el": 34,
	"./el.js": 34,
	"./en-au": 35,
	"./en-au.js": 35,
	"./en-ca": 36,
	"./en-ca.js": 36,
	"./en-gb": 37,
	"./en-gb.js": 37,
	"./en-ie": 38,
	"./en-ie.js": 38,
	"./en-nz": 39,
	"./en-nz.js": 39,
	"./eo": 40,
	"./eo.js": 40,
	"./es": 42,
	"./es-do": 41,
	"./es-do.js": 41,
	"./es.js": 42,
	"./et": 43,
	"./et.js": 43,
	"./eu": 44,
	"./eu.js": 44,
	"./fa": 45,
	"./fa.js": 45,
	"./fi": 46,
	"./fi.js": 46,
	"./fo": 47,
	"./fo.js": 47,
	"./fr": 50,
	"./fr-ca": 48,
	"./fr-ca.js": 48,
	"./fr-ch": 49,
	"./fr-ch.js": 49,
	"./fr.js": 50,
	"./fy": 51,
	"./fy.js": 51,
	"./gd": 52,
	"./gd.js": 52,
	"./gl": 53,
	"./gl.js": 53,
	"./gom-latn": 54,
	"./gom-latn.js": 54,
	"./he": 55,
	"./he.js": 55,
	"./hi": 56,
	"./hi.js": 56,
	"./hr": 57,
	"./hr.js": 57,
	"./hu": 58,
	"./hu.js": 58,
	"./hy-am": 59,
	"./hy-am.js": 59,
	"./id": 60,
	"./id.js": 60,
	"./is": 61,
	"./is.js": 61,
	"./it": 62,
	"./it.js": 62,
	"./ja": 63,
	"./ja.js": 63,
	"./jv": 64,
	"./jv.js": 64,
	"./ka": 65,
	"./ka.js": 65,
	"./kk": 66,
	"./kk.js": 66,
	"./km": 67,
	"./km.js": 67,
	"./kn": 68,
	"./kn.js": 68,
	"./ko": 69,
	"./ko.js": 69,
	"./ky": 70,
	"./ky.js": 70,
	"./lb": 71,
	"./lb.js": 71,
	"./lo": 72,
	"./lo.js": 72,
	"./lt": 73,
	"./lt.js": 73,
	"./lv": 74,
	"./lv.js": 74,
	"./me": 75,
	"./me.js": 75,
	"./mi": 76,
	"./mi.js": 76,
	"./mk": 77,
	"./mk.js": 77,
	"./ml": 78,
	"./ml.js": 78,
	"./mr": 79,
	"./mr.js": 79,
	"./ms": 81,
	"./ms-my": 80,
	"./ms-my.js": 80,
	"./ms.js": 81,
	"./my": 82,
	"./my.js": 82,
	"./nb": 83,
	"./nb.js": 83,
	"./ne": 84,
	"./ne.js": 84,
	"./nl": 86,
	"./nl-be": 85,
	"./nl-be.js": 85,
	"./nl.js": 86,
	"./nn": 87,
	"./nn.js": 87,
	"./pa-in": 88,
	"./pa-in.js": 88,
	"./pl": 89,
	"./pl.js": 89,
	"./pt": 91,
	"./pt-br": 90,
	"./pt-br.js": 90,
	"./pt.js": 91,
	"./ro": 92,
	"./ro.js": 92,
	"./ru": 93,
	"./ru.js": 93,
	"./sd": 94,
	"./sd.js": 94,
	"./se": 95,
	"./se.js": 95,
	"./si": 96,
	"./si.js": 96,
	"./sk": 97,
	"./sk.js": 97,
	"./sl": 98,
	"./sl.js": 98,
	"./sq": 99,
	"./sq.js": 99,
	"./sr": 101,
	"./sr-cyrl": 100,
	"./sr-cyrl.js": 100,
	"./sr.js": 101,
	"./ss": 102,
	"./ss.js": 102,
	"./sv": 103,
	"./sv.js": 103,
	"./sw": 104,
	"./sw.js": 104,
	"./ta": 105,
	"./ta.js": 105,
	"./te": 106,
	"./te.js": 106,
	"./tet": 107,
	"./tet.js": 107,
	"./th": 108,
	"./th.js": 108,
	"./tl-ph": 109,
	"./tl-ph.js": 109,
	"./tlh": 110,
	"./tlh.js": 110,
	"./tr": 111,
	"./tr.js": 111,
	"./tzl": 112,
	"./tzl.js": 112,
	"./tzm": 114,
	"./tzm-latn": 113,
	"./tzm-latn.js": 113,
	"./tzm.js": 114,
	"./uk": 115,
	"./uk.js": 115,
	"./ur": 116,
	"./ur.js": 116,
	"./uz": 118,
	"./uz-latn": 117,
	"./uz-latn.js": 117,
	"./uz.js": 118,
	"./vi": 119,
	"./vi.js": 119,
	"./x-pseudo": 120,
	"./x-pseudo.js": 120,
	"./yo": 121,
	"./yo.js": 121,
	"./zh-cn": 122,
	"./zh-cn.js": 122,
	"./zh-hk": 123,
	"./zh-hk.js": 123,
	"./zh-tw": 124,
	"./zh-tw.js": 124
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 157;

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "q-app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Auction.vue": [
		166,
		3
	],
	"./Error404.vue": [
		167,
		2
	],
	"./Home.vue": [
		168,
		4
	],
	"./Index.vue": [
		169,
		1
	],
	"./Login.vue": [
		170,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 163;

/***/ })

},[149]);