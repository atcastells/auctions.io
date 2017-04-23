<template>
<div>
  <div class="row auto items-center">
    <div class="width-1of3"></div>
    <div class="card shadow-5 bg-white ">
      <div class="card-title bg-secondary text-white">
        Register
      </div>
      <div class="layout-padding">

        <div class="floating-label">
          <input required class="bg-white full-width" v-model="name" type="text">
          <label>Name</label>
        </div>

        <div class="floating-label">
          <input required class="bg-white full-width" v-model="email" type="email">
          <label>Email</label>
        </div>

        <div class="floating-label">
          <input required class="bg-white full-width" v-model="password" type="password">
          <label>Password</label>
        </div>

        <div class="floating-label">
          <input required :class="passwordMatch" class="bg-white full-width" v-model="passwordConfirm" type="password">
          <label>Confirm Password</label>
        </div>

        <button :disabled="passwordMatch" class="secondary push" @click="register">Register</button>
        <button class="primary push" @click="navigateTo('login')">Login</button>
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
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  },
  methods: {
    login: function () {
      let data = {
        client_id: 6,
        client_secret: 'cZR9DR79MC4miArdU9OC7v9mOwgOTMaCb8DamHax',
        grant_type: 'password',
        username: 'aaroncastells@iesmontsia.org',
        password: 'aron200289'
      }
      axios.post('https://auctionserver.ml/oauth/token', data).then((response) => {
        this.$auth.setToken(response.data.access_token, response.data.expires_in + Date.now(), response.data.refresh_token)
      })
    },
    navigateTo: function (nav) {
      this.$router.push({
        path: nav
      })
    },
    register: function () {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirm
      }
      let url = this.$utils.getUrl()
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      }
      axios.post(url + 'api/users', data, config).then((response) => {
      })
    }
  },
  created () {
    this.login()
  },
  computed: {
    passwordMatch: function () {
      if (!(this.password === this.passwordConfirm)) {
        return 'has-error'
      }
    }
  }
}
</script>
