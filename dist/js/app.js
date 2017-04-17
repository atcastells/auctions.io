webpackJsonp([7],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  let authenticatedUser = null;
  Vue.auth = {
    setToken(token, expiration, refresh) {
      localStorage.setItem('token', token);
      localStorage.setItem('expiration', expiration);
      localStorage.setItem('refresh', refresh);
    },

    getToken() {
      var token = localStorage.getItem('token');
      var expiration = localStorage.getItem('expiration');

      if (!token || !expiration) return null;

      if (Date.now() > parseInt(expiration)) {
        console.log('Token expirated, destroying...');
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(161);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

function load(component) {
  return () => __webpack_require__(164)(`./${component}.vue`);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  const DEBUG = false;
  Vue.utils = {
    debug: function () {
      return DEBUG;
    }
  };
  Object.defineProperties(Vue.prototype, {
    $utils: {
      get: () => {
        return Vue.utils;
      }
    }
  });
});

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(154)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(151),
  /* template */
  __webpack_require__(160),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_quasar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_utils__ = __webpack_require__(129);
// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
__webpack_require__(130);
// ==============================








__WEBPACK_IMPORTED_MODULE_3_axios___default.a.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'Accept': 'application/json'
};

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_quasar___default.a); // Install Quasar Framework
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_axios___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4_auth__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_5_utils__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].beforeEach((to, from, next) => {
  console.log(from);
  console.log(to);
  if (to.path === '') {
    to.path = '/';
  } else if (to.path === '/') {
    if (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].auth.isAuthenticated()) {
      next({
        path: 'home'
      });
    } else {
      next({
        path: 'login'
      });
    }
  }
  if (to.matched.some(record => record.meta.guest)) {
    if (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].auth.isAuthenticated()) {
      next({
        path: 'home'
      });
    } else next();
  } else if (to.matched.some(record => record.meta.auth)) {
    if (!__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].auth.isAuthenticated()) {
      next({
        path: 'login'
      });
    } else next();
  } else next();
});

__WEBPACK_IMPORTED_MODULE_1_quasar___default.a.start(() => {
  /* eslint-disable no-new */
  new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: '#q-app',
    router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
    render: h => h(__webpack_require__(131))
  });
});

/***/ }),

/***/ 151:
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

/***/ 154:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 11,
	"./af.js": 11,
	"./ar": 18,
	"./ar-dz": 12,
	"./ar-dz.js": 12,
	"./ar-kw": 13,
	"./ar-kw.js": 13,
	"./ar-ly": 14,
	"./ar-ly.js": 14,
	"./ar-ma": 15,
	"./ar-ma.js": 15,
	"./ar-sa": 16,
	"./ar-sa.js": 16,
	"./ar-tn": 17,
	"./ar-tn.js": 17,
	"./ar.js": 18,
	"./az": 19,
	"./az.js": 19,
	"./be": 20,
	"./be.js": 20,
	"./bg": 21,
	"./bg.js": 21,
	"./bn": 22,
	"./bn.js": 22,
	"./bo": 23,
	"./bo.js": 23,
	"./br": 24,
	"./br.js": 24,
	"./bs": 25,
	"./bs.js": 25,
	"./ca": 26,
	"./ca.js": 26,
	"./cs": 27,
	"./cs.js": 27,
	"./cv": 28,
	"./cv.js": 28,
	"./cy": 29,
	"./cy.js": 29,
	"./da": 30,
	"./da.js": 30,
	"./de": 33,
	"./de-at": 31,
	"./de-at.js": 31,
	"./de-ch": 32,
	"./de-ch.js": 32,
	"./de.js": 33,
	"./dv": 34,
	"./dv.js": 34,
	"./el": 35,
	"./el.js": 35,
	"./en-au": 36,
	"./en-au.js": 36,
	"./en-ca": 37,
	"./en-ca.js": 37,
	"./en-gb": 38,
	"./en-gb.js": 38,
	"./en-ie": 39,
	"./en-ie.js": 39,
	"./en-nz": 40,
	"./en-nz.js": 40,
	"./eo": 41,
	"./eo.js": 41,
	"./es": 43,
	"./es-do": 42,
	"./es-do.js": 42,
	"./es.js": 43,
	"./et": 44,
	"./et.js": 44,
	"./eu": 45,
	"./eu.js": 45,
	"./fa": 46,
	"./fa.js": 46,
	"./fi": 47,
	"./fi.js": 47,
	"./fo": 48,
	"./fo.js": 48,
	"./fr": 51,
	"./fr-ca": 49,
	"./fr-ca.js": 49,
	"./fr-ch": 50,
	"./fr-ch.js": 50,
	"./fr.js": 51,
	"./fy": 52,
	"./fy.js": 52,
	"./gd": 53,
	"./gd.js": 53,
	"./gl": 54,
	"./gl.js": 54,
	"./gom-latn": 55,
	"./gom-latn.js": 55,
	"./he": 56,
	"./he.js": 56,
	"./hi": 57,
	"./hi.js": 57,
	"./hr": 58,
	"./hr.js": 58,
	"./hu": 59,
	"./hu.js": 59,
	"./hy-am": 60,
	"./hy-am.js": 60,
	"./id": 61,
	"./id.js": 61,
	"./is": 62,
	"./is.js": 62,
	"./it": 63,
	"./it.js": 63,
	"./ja": 64,
	"./ja.js": 64,
	"./jv": 65,
	"./jv.js": 65,
	"./ka": 66,
	"./ka.js": 66,
	"./kk": 67,
	"./kk.js": 67,
	"./km": 68,
	"./km.js": 68,
	"./kn": 69,
	"./kn.js": 69,
	"./ko": 70,
	"./ko.js": 70,
	"./ky": 71,
	"./ky.js": 71,
	"./lb": 72,
	"./lb.js": 72,
	"./lo": 73,
	"./lo.js": 73,
	"./lt": 74,
	"./lt.js": 74,
	"./lv": 75,
	"./lv.js": 75,
	"./me": 76,
	"./me.js": 76,
	"./mi": 77,
	"./mi.js": 77,
	"./mk": 78,
	"./mk.js": 78,
	"./ml": 79,
	"./ml.js": 79,
	"./mr": 80,
	"./mr.js": 80,
	"./ms": 82,
	"./ms-my": 81,
	"./ms-my.js": 81,
	"./ms.js": 82,
	"./my": 83,
	"./my.js": 83,
	"./nb": 84,
	"./nb.js": 84,
	"./ne": 85,
	"./ne.js": 85,
	"./nl": 87,
	"./nl-be": 86,
	"./nl-be.js": 86,
	"./nl.js": 87,
	"./nn": 88,
	"./nn.js": 88,
	"./pa-in": 89,
	"./pa-in.js": 89,
	"./pl": 90,
	"./pl.js": 90,
	"./pt": 92,
	"./pt-br": 91,
	"./pt-br.js": 91,
	"./pt.js": 92,
	"./ro": 93,
	"./ro.js": 93,
	"./ru": 94,
	"./ru.js": 94,
	"./sd": 95,
	"./sd.js": 95,
	"./se": 96,
	"./se.js": 96,
	"./si": 97,
	"./si.js": 97,
	"./sk": 98,
	"./sk.js": 98,
	"./sl": 99,
	"./sl.js": 99,
	"./sq": 100,
	"./sq.js": 100,
	"./sr": 102,
	"./sr-cyrl": 101,
	"./sr-cyrl.js": 101,
	"./sr.js": 102,
	"./ss": 103,
	"./ss.js": 103,
	"./sv": 104,
	"./sv.js": 104,
	"./sw": 105,
	"./sw.js": 105,
	"./ta": 106,
	"./ta.js": 106,
	"./te": 107,
	"./te.js": 107,
	"./tet": 108,
	"./tet.js": 108,
	"./th": 109,
	"./th.js": 109,
	"./tl-ph": 110,
	"./tl-ph.js": 110,
	"./tlh": 111,
	"./tlh.js": 111,
	"./tr": 112,
	"./tr.js": 112,
	"./tzl": 113,
	"./tzl.js": 113,
	"./tzm": 115,
	"./tzm-latn": 114,
	"./tzm-latn.js": 114,
	"./tzm.js": 115,
	"./uk": 116,
	"./uk.js": 116,
	"./ur": 117,
	"./ur.js": 117,
	"./uz": 119,
	"./uz-latn": 118,
	"./uz-latn.js": 118,
	"./uz.js": 119,
	"./vi": 120,
	"./vi.js": 120,
	"./x-pseudo": 121,
	"./x-pseudo.js": 121,
	"./yo": 122,
	"./yo.js": 122,
	"./zh-cn": 123,
	"./zh-cn.js": 123,
	"./zh-hk": 124,
	"./zh-hk.js": 124,
	"./zh-tw": 125,
	"./zh-tw.js": 125
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
webpackContext.id = 158;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "q-app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Auction.vue": [
		168,
		4
	],
	"./Error404.vue": [
		169,
		3
	],
	"./Home.vue": [
		170,
		5
	],
	"./Index.vue": [
		171,
		0
	],
	"./Login.vue": [
		172,
		2
	],
	"./infoCard.vue": [
		167,
		1
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
webpackAsyncContext.id = 164;

/***/ })

},[150]);