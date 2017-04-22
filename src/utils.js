export default function (Vue) {
  const DEBUG = false
  const URL = 'https://auctionserver.ml/'
  const API_URL = 'api/'
  Vue.utils = {
    debug: function () {
      return DEBUG
    },
    getUrl: function () {
      return URL
    },
    getApiUrl: function () {
      return URL + API_URL
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
