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
    navigateTo: function (nav) {
      this.$router.push({
        path: nav
      })
    },
    register: function () {
      let url = this.$utils.getUrl()
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      }
      axios.put(url + 'api/users', this.data, config).then((response) => {
      })
    }
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
