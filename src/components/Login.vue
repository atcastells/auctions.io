<template>
<div>
  <div class="row auto items-center">
    <div class="width-1of3"></div>
    <div class="card shadow-5 bg-white ">
      <div class="card-title bg-secondary text-white">
        Please Login
      </div>
      <div class="layout-padding">
        <div class="floating-label">
          <input required class="bg-white full-width" v-model="email" type="email">
          <label>Email</label>
        </div>

        <div class="floating-label">
          <input required class="bg-white full-width" v-model="password" type="password">
          <label>Email</label>
        </div>

        <button class="secondary push" @click="login">Login</button>
        <button class="primary push" @click="navigateTo('register')">Register</button>
      </div>
    </div>
    <div class="width-1of3"></div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: 'aaroncastells@iesmontsia.org',
      password: 'aron200289'
    }
  },
  methods: {
    navigateTo: function (nav) {
      this.$router.push({
        path: nav
      })
    },
    login: function () {
      let data = {
        client_id: 6,
        client_secret: 'cZR9DR79MC4miArdU9OC7v9mOwgOTMaCb8DamHax',
        grant_type: 'password',
        username: this.email,
        password: this.password
      }
      axios.post('https://auctionserver.ml/oauth/token', data).then((response) => {
        this.$auth.setToken(response.data.access_token, response.data.expires_in + Date.now(), response.data.refresh_token)
        location.reload()
      })
    },
    computed: {
      isAuth () {
        return this.$auth.isAuthenticated()
      }
    }
  }
}
</script>

<style>
</style>
