export default function (Vue) {
  const DEBUG = false
  Vue.utils = {
    debug: function () {
      return DEBUG
    }
  }
  Object.defineProperties(Vue.prototype, {
    $utils: {
      get: () => {
        return Vue.utils
      }
    }
  })
}

