export default function (Vue) {
  const DEBUG = false
  const API_URL = 'https://auctionserver.ml/api/'
  Vue.utils = {
    debug: function () {
      return DEBUG
    },
    getApiUrl: function () {
      return API_URL
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
