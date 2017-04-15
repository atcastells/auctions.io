// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import axios from 'axios'
import auth from 'auth'

Vue.use(Quasar) // Install Quasar Framework
Vue.use(axios)
Vue.use(auth)

router.beforeEach(
  (to, from, next) => {
    if (to.matched.some(record => record.meta.guest)) {
      if (Vue.auth.isAuthenticated()) {
        next({
          path: '/home'
        })
      }
      else next()
    }
    else if (to.matched.some(record => record.meta.auth)) {
      if (!Vue.auth.isAuthenticated()) {
        next({
          path: '/login'
        })
      }
      else next()
    }
    else next()
  }
)

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    render: h => h(require('./App'))
  })
})
