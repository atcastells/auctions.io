<template>
  <q-layout class="bg-grey-14">
    <div slot="header" class="toolbar">
      <div class="toolbar-content">
      <button class="hide-on-drawer-visible" @click="$refs.drawer.toggle()">
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="1">
        {{title}}
      </q-toolbar-title>
      </div>
      <button v-if="isAuth" @click="$refs.userModal.open()">
        <i>account_circle</i>
      </button>
    </div>

    <q-tabs v-if="isAuth" slot="navigation">
      <q-tab icon="home" route="/home" exact replace></q-tab>
    </q-tabs>

    <!--<q-drawer ref="drawer">-->
      <!--<div class="toolbar">-->
        <!--<q-toolbar-title>-->
          <!--Drawer Title-->
        <!--</q-toolbar-title>-->
      <!--</div>-->

      <!--<div class="list no-border platform-delimiter">-->
        <!--<q-drawer-link icon="mail" :to="{path: '/', exact: true}">-->
          <!--Link-->
        <!--</q-drawer-link>-->
      <!--</div>-->
    <!--</q-drawer>-->
    <q-modal v-if="isAuth" ref="userModal" :content-css="{padding: '10px 40px 5px 40px', minWidth: '50vw'}">
      <h4>Hello username</h4>
      <p v-for="n in 10">User params</p>
      <div class="card-actions">
        <div class="text-primary">
          <button class="primary" @click="$refs.userModal.close()">Close</button>
        </div>
        <div class="text-primary">
          <button class="secondary" @click="$refs.userModal.close()">Edit Profile</button>
        </div>
        <div class="text-primary">
          <button class="red" @click="disconnect">Log out</button>
        </div>
        <div class="auto">
        </div>
        <div class="text-grey-6">
          23 minutes ago.
        </div>
      </div>
    </q-modal>


    <div class="layout-padding  fit">
    <router-view class="layout-view"></router-view>
    </div>

    <div slot="footer" class="toolbar"></div>
  </q-layout>
</template>

<script>
  import axios from 'axios'
  import { Toast } from 'quasar'
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      disconnect: function () {
        this.$auth.destroyToken()
        location.reload()
      },
      login: function () {
        let data = {
          client_id: 2,
          client_secret: 'I5TfuXCXf2OP72B1tupts30bM5yR6fN1OtLzALuW',
          grant_type: 'password',
          username: this.email,
          password: this.password
        }
        axios.post('http://auctionator.local/oauth/token', data).then((response) => {
          console.log(response)
          this.$auth.setToken(response.data.access_token, response.data.expires_in + Date.now())
        })
      },
      notify (msg) {
        Toast.create(msg)
      }
    },
    props: {
      title: {
        type: String,
        default: 'Auctions.io'
      }
    },
    computed: {
      isAuth () {
        return this.$auth.isAuthenticated()
      }
    }
  }
</script>

<style>
</style>
