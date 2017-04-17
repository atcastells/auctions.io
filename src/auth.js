export default function (Vue) {
  let authenticatedUser = null
  Vue.auth = {
    setToken (token, expiration, refresh) {
      localStorage.setItem('token', token)
      localStorage.setItem('expiration', expiration)
      localStorage.setItem('refresh', refresh)
    },

    getToken () {
      var token = localStorage.getItem('token')
      var expiration = localStorage.getItem('expiration')

      if (!token || !expiration) return null

      if (Date.now() > parseInt(expiration)) {
        console.log('Token expirated, destroying...')
        this.destroyToken()
        return null
      }
      else {
        return token
      }
    },

    destroyToken () {
      localStorage.removeItem('token')
      localStorage.removeItem('expiration')
    },

    isAuthenticated () {
      if (this.getToken()) {
        return true
      }
      else {
        return false
      }
    },

    setAuthenticatedUser (data) {
      authenticatedUser = data
    },

    getAuthtenticatedUser () {
      return authenticatedUser
    }

  }

  Object.defineProperties(Vue.prototype, {
    $auth: {
      get: () => {
        return Vue.auth
      }
    }
  })
}

