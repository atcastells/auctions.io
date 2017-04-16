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
       Welcome {{email}} <i>account_circle</i>
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
      <h4>Hello {{userName}}</h4>



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
        userName: '',
        email: '',
        coins: '',
        password: '',
        avatarUrl: ''
      }
    },
    methods: {
      disconnect: function () {
        this.$auth.destroyToken()
        location.reload()
      },
      setAuthenticatedUser () {
        let config = {
          headers: {'Authorization': 'Bearer ' + this.$auth.getToken()}
        }

        axios.get('https://auctionserver.ml/api/user', config).then((response) => {
          this.$auth.setAuthenticatedUser(response.body)
          this.userName = response.data.name
          this.coins = response.data.coins
          this.email = response.data.email
          this.avatarUrl = response.data.avatarurl
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
    },
    created () {
      this.setAuthenticatedUser()
    }
  }
</script>

<style>
</style>
